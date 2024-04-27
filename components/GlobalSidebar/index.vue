<template lang="pug">
div
    UButton(label="OPEN" @click="openSidebar")

    USlideover(v-model="isGlobalSidebarOpened")
      div(class="p-4 flex-1")
        Placeholder(class="h-full") 
</template>

<script setup lang="ts">
const { isGlobalSidebarOpened, openGlobalSidebar, closeGlobalSidebar } = useGlobalStore();

const openSidebar = () => {
    openGlobalSidebar();
};

const closeSidebar = () => {
    closeGlobalSidebar();
};
</script>