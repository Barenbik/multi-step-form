<template>
    <div class="pb-2">
        <div class="border-solid border border-gray-200 rounded-md flex hover:border-indigo-600 hover:bg-alabaster">
            <img class="p-3" :src="`../src/assets/images/${icon}.svg`" :alt="`${icon}`">
            <div class="p-4 pl-0">
                <p class="font-semibold text-marine-blue">{{ plan }}</p>
                <p class="font-normal text-cool-gray text-sm">${{ cost }}/mo</p>
            </div>
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