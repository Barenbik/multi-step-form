<template>
  <div
    class="mx-4 -my-20 p-6 rounded-md bg-white shadow-lg md:my-4 md:p-4 md:shadow-none md:flex md:flex-row md:h-custom md:min-h-custom"
  >
    <stage-component class="rounded-md hidden md:block" />
    <div class="flex flex-col md:px-20 md:pt-10 md:w-full">
      <div class="flex flex-col">
        <h1 class="font-semibold text-marine-blue text-3xl pb-2">Select your plan</h1>
        <p class="font-normal text-cool-gray pb-8 leading-6">
          You have the option of monthly or yearly billing.
        </p>
        <div class="md:flex md:flex-row md:justify-between">
          <plan-component
            icon="icon-arcade"
            plan="Arcade"
            :monthlyCost="planData.Arcade.monthly"
            :yearlyCost="planData.Arcade.yearly"
            :isActive="selectedPlan === 'Arcade'"
          />
          <plan-component
            icon="icon-advanced"
            plan="Advanced"
            :monthlyCost="planData.Advanced.monthly"
            :yearlyCost="planData.Advanced.yearly"
            :isActive="selectedPlan === 'Advanced'"
          />
          <plan-component
            icon="icon-pro"
            plan="Pro"
            :monthlyCost="planData.Pro.monthly"
            :yearlyCost="planData.Pro.yearly"
            :isActive="selectedPlan === 'Pro'"
          />
        </div>
        <toggle-switch />
      </div>
      <navigation-component backTo="/personal" moveTo="/addons" class="hidden md:block" />
    </div>
  </div>
  <navigation-component backTo="/personal" moveTo="/addons" class="md:hidden" />
</template>
<script>
import PlanComponent from '../components/PlanComponent.vue'
import ToggleSwitch from '../components/ToggleSwitch.vue'
import NavigationComponent from '../components/NavigationComponent.vue'
import StageComponent from '../components/StageComponent.vue'
import { mapState } from 'pinia'
import { useStore } from '@/stores/store.js'

export default {
  components: {
    PlanComponent,
    ToggleSwitch,
    NavigationComponent,
    StageComponent
  },
  computed: {
    ...mapState(useStore, ['selectedPlan', 'planData'])
  }
}
</script>
