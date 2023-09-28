<template>
  <div class="mt-auto bg-white">
    <div class="flex justify-between items-center mx-4 py-5">
      <button class="text-cool-gray font-semibold">Go Back</button>
      <router-link :to="moveTo">
        <button
          class="text-white font-semibold py-3 px-4 rounded"
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
    }
  },
  computed: {
    label() {
      return this.moveTo === '/completed' ? 'Confirm' : 'Next Step'
    }
  }
}
</script>
