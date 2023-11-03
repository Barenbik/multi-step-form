import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    isYearly: false,
    selectedPlan: '',
    planCost: 0,
    addOnsCost: 0,
    totalCost: 0,
    selectedAddOns: []
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
    updateSelectedAddOns(addOn) {
      const index = this.selectedAddOns.indexOf(addOn)

      if (index !== -1) {
        this.selectedAddOns.splice(index, 1)
      } else {
        this.selectedAddOns.push(addOn)
      }

      this.selectedAddOns = this.selectedAddOns.sort((a, b) => b.localeCompare(a));
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

      this.addOnsCost = 0

      if (this.selectedAddOns.includes('Online service')) {
        this.addOnsCost += this.isYearly ? 10 : 1
      }

      if (this.selectedAddOns.includes('Larger storage')) {
        this.addOnsCost += this.isYearly ? 20 : 2
      }

      if (this.selectedAddOns.includes('Customisable profile')) {
        this.addOnsCost += this.isYearly ? 20 : 2
      }

      this.totalCost = this.planCost + this.addOnsCost
    }
  }, 
})
