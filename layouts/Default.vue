<template lang="pug">
div(:class="{'hidden': false}" class="card flex justify-content-center")
    GlobalSidebar
    slot/ 
</template>

<script setup lang="ts">
// const { isGlobalBlock } = useGlobalStore();
</script>

<style scoped>
.container {
    @apply relative w-full h-full flex;
}
</style>
