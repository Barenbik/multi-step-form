<template>
  <div
    class="mx-4 -my-20 p-6 rounded-md bg-white shadow-lg md:my-4 md:shadow-none md:flex md:flex-row md:h-custom md:min-h-custom"
  >
    <stage-component class="rounded-md hidden md:block" />
    <div class="flex flex-col md:px-20 md:pt-10">
      <div>
        <h1 class="font-semibold text-marine-blue text-3xl pb-2">Finishing up</h1>
        <p class="font-normal text-cool-gray pb-8 leading-6">
          Double check everything looks OK before confirming.
        </p>
        <div class="bg-alabaster rounded-md">
          <div class="flex justify-between px-6 pt-4 pb-2 items-center">
            <div>
              <p class="font-semibold text-marine-blue">Arcade (Monthly)</p>
              <a class="text-cool-gray underline hover:cursor-pointer">Change</a>
            </div>
            <p class="font-semibold text-marine-blue">${{ arcadeCost }}/mo</p>
          </div>
          <hr class="mx-6" />
          <div class="px-6 pb-4 pt-2">
            <div class="flex justify-between">
              <p class="pb-2 text-cool-gray">Online service</p>
              <p class="text-marine-blue">+${{ onlineCost }}/{{ chargingPeriod }}</p>
            </div>
            <div class="flex justify-between">
              <p class="text-cool-gray">Larger storage</p>
              <p class="text-marine-blue">+${{ storageCost }}/{{ chargingPeriod }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-between px-6 pt-6 md:pb-10">
          <p class="text-cool-gray">Total (per month)</p>
          <p class="text-purplish-blue font-bold">+${{ totalCost }}/{{ chargingPeriod }}</p>
        </div>
      </div>
      <navigation-component backTo="/addons" moveTo="/completed" class="hidden md:block" />
    </div>
  </div>
  <navigation-component backTo="/addons" moveTo="/completed" class="md:hidden" />
</template>
<script>
import { mapState } from 'pinia'
import { useStore } from '@/stores/store.js'
import NavigationComponent from '../components/NavigationComponent.vue'
import StageComponent from '../components/StageComponent.vue'

export default {
  components: {
    NavigationComponent,
    StageComponent
  },
  computed: {
    ...mapState(useStore, ['isYearly']),
    arcadeCost() {
      return this.isYearly ? 90 : 9
    },
    onlineCost() {
      return this.isYearly ? 10 : 1
    },
    storageCost() {
      return this.isYearly ? 20 : 2
    },
    totalCost() {
      return this.arcadeCost + this.onlineCost + this.storageCost
    },
    chargingPeriod() {
      return this.isYearly ? 'yr' : 'mo'
    }
  }
}
</script>
