<template>
  <div class="mx-4 -my-20 p-6 rounded-md bg-white shadow-lg">
    <h1 class="font-semibold text-marine-blue text-2xl pb-2">Pick add-ons</h1>
    <p class="font-normal text-cool-gray pb-6 text-lg leading-6">
      Add-ons help enhance your gaming experience.
    </p>
    <add-on-component
      addon="Online service"
      description="Access to multiplayer games"
      monthlyCost="1"
      yearlyCost="10"
    />
    <add-on-component
      addon="Larger storage"
      description="Extra 1TB of cloud save"
      monthlyCost="2"
      yearlyCost="20"
    />
    <add-on-component
      addon="Customisable profile"
      description="Custom theme on your profile"
      monthlyCost="2"
      yearlyCost="20"
    />
  </div>
  <navigation-component backTo="/plans" moveTo="/finishingup" />
</template>
<script>
import AddOnComponent from '../components/AddOnComponent.vue'
import NavigationComponent from '../components/NavigationComponent.vue'

export default {
  components: {
    AddOnComponent,
    NavigationComponent
  }
}
</script>
