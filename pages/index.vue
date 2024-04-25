<template lang="pug">
    h1(class="text-3xl font-bold underline text-red-800 text-center pt-10") Можно лучше!
    button.btn.btn-primary(type="submit" class="ml-4 font-bold" @click="goToUsersPage") Пользователи
</template>

<script setup>
const router = useRouter();

const goToUsersPage = () => {
    router.push('/users');
};
</script>