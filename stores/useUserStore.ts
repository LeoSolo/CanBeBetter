import { defineStore } from 'pinia';
import type { User } from '~/types';

type State = {
    userData: User | null;
    token: string | null;
}

export const useUserStore = defineStore('userStore', {
    state: (): State => ({
        userData: null,
        token: null,
    }),
    actions: {
        setUserData(userData: User) {
            this.userData = userData;
        },
        setToken(token: string) {
            this.token = token;
        },
        logout() {
            this.userData = null;
            this.token = null;
        },
    },
    getters: {
        getUserData: (state) => state.userData,
        getToken: (state) => state.token,
    },
});