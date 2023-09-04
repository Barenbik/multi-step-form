<template>
    <div>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <plan-component icon="icon-arcade" plan="Arcade" cost="9" />
        <!-- TODO: Add plan component -->
        <!-- TODO: Add plan component -->
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