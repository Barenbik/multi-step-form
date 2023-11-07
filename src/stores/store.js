import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    isYearly: false,
    selectedPlan: '',
    planCost: 0,
    addOnsCost: 0,
    totalCost: 0,
    selectedAddOns: [],
    plans: {
      Arcade: { monthly: 9, yearly: 90 },
      Advanced: { monthly: 12, yearly: 120 },
      Pro: { monthly: 15, yearly: 150 }
    },
    addOns: {
      'Online service': { monthly: 1, yearly: 10 },
      'Larger storage': { monthly: 2, yearly: 20 },
      'Customisable profile': { monthly: 2, yearly: 20 }
    }
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

      this.selectedAddOns = this.selectedAddOns.sort((a, b) => b.localeCompare(a))
      this.updateCosts()
    },
    updateCosts() {
      switch (this.selectedPlan) {
        case 'Arcade':
          this.planCost = this.isYearly ? this.plans.Arcade.yearly : this.plans.Arcade.monthly
          break
        case 'Advanced':
          this.planCost = this.isYearly ? this.plans.Advanced.yearly : this.plans.Advanced.monthly
          break
        case 'Pro':
          this.planCost = this.isYearly ? this.plans.Pro.yearly : this.plans.Pro.monthly
          break
        default:
          break
      }

      this.addOnsCost = 0

      if (this.selectedAddOns.includes('Online service')) {
        this.addOnsCost += this.isYearly
          ? this.addOns['Online service'].yearly
          : this.addOns['Online service'].monthly
      }

      if (this.selectedAddOns.includes('Larger storage')) {
        this.addOnsCost += this.isYearly
          ? this.addOns['Larger storage'].yearly
          : this.addOns['Larger storage'].monthly
      }

      if (this.selectedAddOns.includes('Customisable profile')) {
        this.addOnsCost += this.isYearly
          ? this.addOns['Customisable profile'].yearly
          : this.addOns['Customisable profile'].monthly
      }

      this.totalCost = this.planCost + this.addOnsCost
    }
  }
})
