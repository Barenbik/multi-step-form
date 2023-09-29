<template>
  <div>
    <div class="mx-4 -my-20 p-6 rounded-md bg-white shadow-lg">
      <h1 class="font-semibold text-marine-blue text-2xl pb-2">Select your plan</h1>
      <p class="font-normal text-cool-gray pb-6 text-lg leading-6">
        You have the option of monthly or yearly billing.
      </p>
      <plan-component icon="icon-arcade" plan="Arcade" monthlyCost="9" yearlyCost="90" />
      <plan-component icon="icon-advanced" plan="Advanced" monthlyCost="12" yearlyCost="120" />
      <plan-component icon="icon-pro" plan="Pro" monthlyCost="15" yearlyCost="150" />
      <toggle-switch />
    </div>
  </div>
  <navigation-component backTo="/personal" moveTo="/addons" />
</template>
<script>
import PlanComponent from '../components/PlanComponent.vue'
import ToggleSwitch from '../components/ToggleSwitch.vue'
import NavigationComponent from '../components/NavigationComponent.vue'

export default {
  components: {
    PlanComponent,
    ToggleSwitch,
    NavigationComponent
  }
}
</script>
