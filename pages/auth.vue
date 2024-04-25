<template lang="pug">
div(
  class="w-[400px] h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-12 rounded-default")
  form(class="w-full h-full relative" @submit.prevent="onSubmit")
    h1(class="text-[22px] font-semibold text-center mb-8") Авторизация
    input(v-model="formData.login" class="auth-input mb-6" placeholder="Логин")
    input(v-model="formData.password" class="auth-input mb-8" placeholder="Пароль")
    button.btn.btn-primary(
      type="submit"
      class="my-0 mx-auto font-bold py-[8px] text-center w-full h-fit bg-green-300 rounded-default"
    ) Авторизоваться
</template>

<script setup lang="ts">
const userStore = useUserStore();
const formData = ref({
  login: '',
  password: '',
});

const onSubmit = () => {
  if (formData.value.login === 'admin' && formData.value.password === 'admin') {
    userStore.setToken('token123');
    setTimeout(() => {
      userStore.logout();
      navigateTo('/auth');
    },20000);    
    navigateTo('/');
  }
};
</script>

<style scoped>
  .auth-input {
    @apply rounded-default px-[8px] h-[44px] w-full;
  }
</style>