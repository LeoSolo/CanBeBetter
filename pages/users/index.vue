<template lang="pug">
NuxtLink(to="/" class="ml-4 font-bold") назад
ul(class="p-4")
  li(
    v-for="user in users"
    :key="user.id" 
    class="p-4 bg-slate-400 mb-4"
  ) Пользователь: {{ user.name }} {{ user.secondName }} {{ user.surname }}
</template>

<script setup lang="ts">
import type { User } from '~/types';
import * as ApiConfig from '@/config/api';

const { data: users } = await useFetch<User[]>(
  ApiConfig.ENDPOINTS_MAP.get(ApiConfig.EndpointNames.GET_USERS_LIST), {
  method: ApiConfig.Methods.GET,
});
</script>
