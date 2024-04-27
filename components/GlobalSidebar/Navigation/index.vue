<template lang="pug">
    ul
        li(v-for="link in LINKS" :key="link.label") {{ link.label }}
</template>

<script setup lang="ts">
const LINKS = [
    {
        label: 'Главная',
        to: '/',
    },
    {
        label: 'Пользователи',
        to: '/users',
    },
];
</script>