<template lang="pug">
  NuxtLink(to="/" class="ml-4 font-bold") назад
  ul(class="p-4")
    li(v-for="userIndex in 10" :key="userIndex" class="p-4 bg-slate-400 mb-4") Пользователь {{ userIndex }}
</template>