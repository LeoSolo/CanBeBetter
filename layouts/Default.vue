<template lang="pug">
div(:class="{'hidden': false}" class="container")
    div(class="container p-4")
        slot/ 
</template>

<script setup lang="ts">
// const { isGlobalBlock } = useGlobalStore();
// const LINKS = [
//     {
//         label: 'Главная',
//         to: '/',
//     },
//     {
//         label: 'Пользователи',
//         to: '/users',
//     },
// ];
</script>

<style scoped>
.container {
    @apply relative w-full h-full flex;
}
</style>
