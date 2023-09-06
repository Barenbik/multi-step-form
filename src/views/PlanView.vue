<template>
    <div class="p-6">
        <h1 class="font-semibold text-marine-blue text-2xl pb-2">Select your plan</h1>
        <p class="font-normal text-cool-gray pb-6 text-lg leading-6">You have the option of monthly or yearly billing.</p>
        <plan-component icon="icon-arcade" plan="Arcade" cost="9" />
        <plan-component icon="icon-advanced" plan="Advanced" cost="12" />
        <plan-component icon="icon-pro" plan="Pro" cost="15" />        
        <!-- TODO: Add monthly / yearly toggle component -->
    </div>
</template>
<script>
import PlanComponent from '../components/PlanComponent.vue'

export default {
    components: {
        PlanComponent
    }
}
</script>