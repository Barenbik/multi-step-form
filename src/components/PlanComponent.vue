<template>
  <div class="pb-2 md:p-2">
    <div
      class="border-solid border border-gray-200 rounded-md flex hover:border-indigo-600 hover:bg-alabaster md:flex-col md:w-36 md:h-40"
    >   
      <img class="p-3" width="60" height="60" :src="`../src/assets/images/${icon}.svg`" :alt="`${icon}`" />
      <div class="p-4 pl-0 md:pl-4 md:mt-auto">
        <p class="font-semibold text-marine-blue">{{ plan }}</p>
        <p v-if="!isYearly" class="font-normal text-cool-gray text-sm">${{ monthlyCost }}/mo</p>
        <p v-if="isYearly" class="font-normal text-cool-gray text-sm">${{ yearlyCost }}/yr</p>
        <p v-if="isYearly" class="text-marine-blue text-sm">2 months free</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'pinia'
import { useStore } from '@/stores/store.js'

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
    monthlyCost: {
      type: String,
      required: true
    },
    yearlyCost: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(useStore, ['isYearly'])
  }
}
</script>
<style></style>
