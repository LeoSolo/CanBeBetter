<template lang="pug">
div
    PButton(label="OPEN THE DOOR" @click="triggerSidebar")

    PSidebar(v-model:visible="isShown" header="Sidebar")
      p kokoko
</template>

<script setup lang="ts">
const { openGlobalSidebar, closeGlobalSidebar } = useGlobalStore();
// let isSidebarOpened = computed(() => useGlobalStore().isGlobalSidebarOpened);

const isShown = ref(false);

const triggerSidebar = () => {
    isShown.value = !isShown.value;
    console.log(isShown.value);
    
    // console.log(isSidebarOpened.value);
    // openGlobalSidebar();
    // isSidebarOpened.value ? closeGlobalSidebar() : openGlobalSidebar();
};

</script>