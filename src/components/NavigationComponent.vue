<template>
  <div class="mt-auto bg-white">
    <div
      class="flex items-center mx-4 py-5 md:mx-0 md:pt-20 md:pb-2"
      :class="{ 'justify-between': backTo, 'justify-end': !backTo }"
    >
      <router-link v-if="backTo" :to="backTo">
        <button class="text-cool-gray font-semibold">Go Back</button>
      </router-link>
      <router-link :to="moveTo">
        <button
          class="text-white font-semibold py-3.5 rounded-lg w-[7.6rem]"
          :class="moveTo === '/completed' ? 'bg-purplish-blue' : 'bg-marine-blue'"
        >
          {{ label }}
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    moveTo: {
      type: String,
      required: true
    },
    backTo: {
      type: String
    }
  },
  computed: {
    label() {
      return this.moveTo === '/completed' ? 'Confirm' : 'Next Step'
    }
  }
}
</script>
