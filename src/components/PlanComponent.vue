<template>
    <div>
        <div class="border-solid border-2 border-indigo-600">
            <img :src="`../src/assets/images/${icon}.svg`" :alt="`${icon}`">
            <p>{{ plan }}</p>
            <p>${{ cost }}/mo</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        plan: {
            type: String,
            required: true
        },
        cost: {
            type: String,
            required: true
        }
    }
}
</script>
<style></style>