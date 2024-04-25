import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('globalStore', {
  state: () => ({
    isGlobalLoading: false,
  }),
  actions: {
    setGlobalLoading(value) {
      this.isGlobalLoading = value;
    },
  },
  getters: {
    getIsGlobalLoading: (state) => state.isGlobalLoading,
  },
});