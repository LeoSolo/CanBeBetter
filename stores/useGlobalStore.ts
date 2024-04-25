import { defineStore } from 'pinia';

interface State {
  isGlobalLoading: Boolean;
}

export const useGlobalStore = defineStore('globalStore', {
    state: (): State => ({
        isGlobalLoading: false,
    }),
    actions: {
        setGlobalLoading(value: boolean) {
            this.isGlobalLoading = value;
        },
    },
    getters: {
        getIsGlobalLoading: (state) => state.isGlobalLoading,
    },
});