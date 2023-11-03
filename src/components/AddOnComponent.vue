<template>
  <div class="pb-2 md:pb-3">
    <div
      class="border-solid border border-gray-200 rounded-md flex hover:border-indigo-600 hover:bg-alabaster"
      :class="this.isSelected ? 'border-indigo-600 bg-alabaster' : ''"
    >
      <div class="p-3 flex items-center w-full justify-stretch md:p-5">
        <input
          class="h-5 w-5 text-purplish-blue rounded focus:outline-none focus:ring-transparent"
          type="checkbox"
          name="addon"
          id="addon"
          @input="updateSelectedAddOns(this.addon)"
          v-model="checked"
        />
        <div class="pl-4 flex-grow md:pl-6">
          <p class="font-semibold text-marine-blue">{{ addon }}</p>
          <p class="font-normal text-cool-gray text-sm">{{ description }}</p>
        </div>
        <div class="flex justify-end">
          <p v-if="!isYearly" class="font-normal text-sm text-purplish-blue">
            +${{ monthlyCost }}/mo
          </p>
          <p v-else class="font-normal text-sm text-purplish-blue">+${{ yearlyCost }}/yr</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { useStore } from '@/stores/store.js'

export default {
  props: {
    addon: {
      type: String,
      required: true
    },
    description: {
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
    },
    isSelected: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapState(useStore, ['isYearly']),
    checked() {
      return this.isSelected
    }
  },
  methods: {
    ...mapActions(useStore, ['updateSelectedAddOns'])
  }
}
</script>
