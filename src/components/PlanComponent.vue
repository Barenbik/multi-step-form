<template>
  <div class="pb-2 cursor-pointer">
    <div
      @click="updateSelectedPlan(this.plan)"
      class="border-solid border border-gray-200 rounded-md flex hover:border-indigo-600 hover:bg-alabaster md:flex-col md:w-32 md:h-40"
      :class="isActive ? 'border-indigo-600 bg-alabaster' : ''"
    >
      <img
        class="p-3"
        width="60"
        height="60"
        :src="`../src/assets/images/${icon}.svg`"
        :alt="`${icon}`"
      />
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
import { mapState, mapActions } from 'pinia'
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
      type: Number,
      required: true
    },
    yearlyCost: {
      type: Number,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapState(useStore, ['isYearly']),
    cost() {
      return this.isYearly ? this.yearlyCost : this.monthlyCost
    }
  },
  methods: {
    ...mapActions(useStore, ['updateSelectedPlan'])
  }
}
</script>
<style></style>
