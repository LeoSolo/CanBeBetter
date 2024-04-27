import { defineStore } from 'pinia';

interface State {
    globalBlocked: Boolean;
    globalSidebarOpened: Boolean;
}

export const useGlobalStore = defineStore('globalStore', {
    state: (): State => ({
        globalBlocked: false,
        globalSidebarOpened: false,
    }),
    actions: {
        setGlobalBlock() {
            this.globalBlocked = true;
        },
        removeGlobalBlock() {
            this.globalBlocked = false;
        },
        openGlobalSidebar() {
            this.globalSidebarOpened = true;
        },
        closeGlobalSidebar() {
            this.globalSidebarOpened = false;
        },
    },
    getters: {
        isGlobalBlock: (state) => state.globalBlocked,
        isGlobalSidebarOpened: (state) => state.globalSidebarOpened,
    },
});