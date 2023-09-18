import { defineStore } from 'pinia';

export const useStore = defineStore("store", {
    state: () => ({
        isYearly: false
    }),
    actions: {
        toggleIsYearly() {
            this.isYearly = !this.isYearly;
        }
    }
})