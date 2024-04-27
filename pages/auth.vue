<template lang="pug">
div(class="auth-container")
  form(
    class="w-full h-full relative"
    :state="state"
    @submit.prevent="onSubmit"
  )
    h1(class="text-[22px] font-semibold text-center mb-[10px]") Авторизация
      input(
        v-model="state.email"
        placeholder="Введите почту" 
        color="primary"
        variant="outline"
      )
      input(
        v-model="state.password"
        type="password"
        placeholder="Введитк пароль"
        color="primary"
        variant="outline"
      )
      button(
        type="submit"
        block
        color="primary"
        variant="outline"
      ) Авторизоваться
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
const userStore = useUserStore();

const state = reactive({
  email: '',
  password: '',
});

const onSubmit = () => {
  if (state.email === 'leo.solo@mail.ru' && state.password === '123') {
    userStore.setToken('token123');

    setTimeout(() => {
      userStore.logout();
      console.log('Authorized');
      navigateTo('/auth');
    },160000);    
    navigateTo('/');
  }
};
</script>

<style scoped>
  .auth-container {
    @apply w-[320px] h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-[14px]
     rounded-default border border-gray-700;
  }
</style>