<template>
  <div
    class="mx-4 -my-20 p-6 rounded-md bg-white shadow-lg md:my-4 md:p-4 md:shadow-none md:flex md:flex-row md:h-custom md:min-h-custom"
  >
    <stage-component class="rounded-md hidden md:block" />
    <div class="flex flex-col md:px-20 md:pt-10 md:h-full md:w-full">
      <div>
        <h1 class="font-semibold text-marine-blue text-3xl pb-2">Finishing up</h1>
        <p class="font-normal text-cool-gray pb-8 leading-6">
          Double check everything looks OK before confirming.
        </p>
        <div class="bg-alabaster rounded-md">
          <div class="flex justify-between px-6 py-4 items-center">
            <div>
              <p class="font-semibold text-marine-blue">
                {{ this.selectedPlan }} ({{ this.isYearly ? 'Yearly' : 'Monthly' }})
              </p>
              <router-link
                to="/plans"
                class="text-cool-gray underline hover:cursor-pointer hover:text-purplish-blue hover:brightness-150"
              >
                Change
              </router-link>
            </div>
            <p class="font-semibold text-marine-blue">
              ${{ this.planCost }}/ {{ this.isYearly ? 'yr' : 'mo' }}
            </p>
          </div>
          <div v-if="this.selectedAddOns.length > 0">
            <hr class="mx-6" />
            <div class="px-6 pb-4 pt-2">
              <div
                class="flex justify-between"
                v-for="addOn in this.selectedAddOns"
                :key="addOn.id"
              >
                <p class="pb-2 text-cool-gray">{{ addOn }}</p>
                <p class="text-marine-blue">
                  +${{ isYearly ? addOns[addOn].yearly : addOns[addOn].monthly }}/{{
                    chargingPeriod
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between px-6 pt-6 md:pb-10">
          <p class="text-cool-gray">
            {{ 'Total (per ' + (this.isYearly ? 'year' : 'month') + ')' }}
          </p>
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
    ...mapState(useStore, [
      'isYearly',
      'selectedPlan',
      'planCost',
      'totalCost',
      'selectedAddOns',
      'addOns'
    ]),
    chargingPeriod() {
      return this.isYearly ? 'yr' : 'mo'
    }
  }
}
</script>
