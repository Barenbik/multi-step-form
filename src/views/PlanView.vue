<template>
  <div
    class="mx-4 -my-20 p-6 rounded-md bg-white shadow-lg md:my-4 md:p-4 md:shadow-none md:flex md:flex-row"
  >
    <stage-component class="rounded-md hidden md:block" />
    <div class="md:px-20 md:pt-10">
      <h1 class="font-semibold text-marine-blue text-3xl pb-2">Select your plan</h1>
      <p class="font-normal text-cool-gray pb-8 leading-6">
        You have the option of monthly or yearly billing.
      </p>
      <div class="md:flex md:flex-row">
        <plan-component icon="icon-arcade" plan="Arcade" monthlyCost="9" yearlyCost="90" />
        <plan-component icon="icon-advanced" plan="Advanced" monthlyCost="12" yearlyCost="120" />
        <plan-component icon="icon-pro" plan="Pro" monthlyCost="15" yearlyCost="150" />
      </div>
      <toggle-switch />
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

export default {
  components: {
    PlanComponent,
    ToggleSwitch,
    NavigationComponent,
    StageComponent
  }
}
</script>
