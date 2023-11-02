import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    isYearly: false,
    selectedPlan: '',
    planCost: 0,
    totalCost: 0
  }),
  actions: {
    toggleIsYearly() {
      this.isYearly = !this.isYearly
      this.updateCosts()
    },
    updateSelectedPlan(plan) {
      this.selectedPlan = plan
      this.updateCosts()
    },
    updateCosts() {
      switch (this.selectedPlan) {
        case 'Arcade':
          this.planCost = this.isYearly ? 90 : 9
          break
        case 'Advanced':
          this.planCost = this.isYearly ? 120 : 12
          break
        case 'Pro':
          this.planCost = this.isYearly ? 150 : 15
          break
        default:
          break
      }

      this.totalCost = this.planCost
    }
  }
})
