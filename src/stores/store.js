import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    isYearly: false,
    selectedPlan: ''
  }),
  actions: {
    toggleIsYearly() {
      this.isYearly = !this.isYearly
    },
    updateSelectedPlan(plan) {
      this.selectedPlan = plan
    }
  }
})
