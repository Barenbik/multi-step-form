import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    isYearly: false,
    selectedPlan: '',
    planCost: 0,
    addOnsCost: 0,
    totalCost: 0,
    selectedAddOns: [],
    planData: {
      Arcade: { monthly: 9, yearly: 90 },
      Advanced: { monthly: 12, yearly: 120 },
      Pro: { monthly: 15, yearly: 150 },
    },
    addOnsData: {
      'Online service': { monthly: 1, yearly: 10 },
      'Larger storage': { monthly: 2, yearly: 20 },
      'Customisable profile': { monthly: 2, yearly: 20 },
    },
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
          this.planCost = this.isYearly ? this.planData.Arcade.yearly : this.planData.Arcade.monthly
          break
        case 'Advanced':
          this.planCost = this.isYearly ? this.planData.Advanced.yearly : this.planData.Advanced.monthly
          break
        case 'Pro':
          this.planCost = this.isYearly ? this.planData.Pro.yearly : this.planData.Pro.monthly
          break
        default:
          break
      }

      this.addOnsCost = 0

      if (this.selectedAddOns.includes('Online service')) {
        this.addOnsCost += this.isYearly ? this.addOnsData['Online service'].yearly : this.addOnsData['Online service'].monthly
      }

      if (this.selectedAddOns.includes('Larger storage')) {
        this.addOnsCost += this.isYearly ? this.addOnsData['Larger storage'].yearly : this.addOnsData['Larger storage'].monthly
      }

      if (this.selectedAddOns.includes('Customisable profile')) {
        this.addOnsCost += this.isYearly ? this.addOnsData['Customisable profile'].yearly : this.addOnsData['Customisable profile'].monthly
      }

      this.totalCost = this.planCost + this.addOnsCost
    }
  }, 
})
