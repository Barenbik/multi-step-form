<template>
  <vee-form :validation-schema="schema" @submit="handleSubmit">
    <div
      class="mx-4 -my-20 p-6 rounded-md bg-white shadow-lg md:my-4 md:p-4 md:shadow-none md:flex md:flex-row md:h-custom md:min-h-custom"
    >
      <stage-component class="rounded-md hidden md:block" />
      <div class="flex flex-col md:px-20 md:pt-10 md:h-full md:w-full">
        <div>
          <h1 class="font-semibold text-marine-blue text-3xl pb-2">Personal info</h1>
          <p class="font-normal text-cool-gray pb-8 leading-6">
            Please provide your name, email address, and phone number.
          </p>
          <div class="pb-5">
            <div class="flex justify-between">
              <label class="block text-marine-blue text-sm pb-1" for="name">Name</label>
              <ErrorMessage class="text-red-600 text-sm pb-1" name="name" />
            </div>
            <vee-field
              class="border border-gray-300 py-2 px-4 rounded-md w-full"
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Stephen King"
            />
          </div>
          <div class="pb-5">
            <div class="flex justify-between">
              <label class="block text-marine-blue text-sm pb-1" for="email">Email Address</label>
              <ErrorMessage class="text-red-600 text-sm pb-1" name="email" />
            </div>
            <vee-field
              class="border border-gray-300 py-2 px-4 rounded-md w-full"
              type="email"
              name="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div class="pb-5">
            <div class="flex justify-between">
              <label class="block text-marine-blue text-sm pb-1" for="phone">Phone Number</label>
              <ErrorMessage class="text-red-600 text-sm pb-1" name="phone" />
            </div>
            <vee-field
              class="border border-gray-300 py-2 px-4 rounded-md w-full"
              type="tel"
              name="phone"
              id="phone"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </div>
        <button
          @click="validateForm"
          type="submit"
          class="text-white bg-marine-blue font-semibold py-3.5 rounded-lg w-[7.6rem] hover:brightness-150 mt-auto ml-auto md:mb-2 hidden md:block"
        >
          Next Step
        </button>
      </div>
    </div>
    <button
      @click="validateForm"
      type="submit"
      class="text-white bg-marine-blue font-semibold py-3.5 rounded-lg w-[7.6rem] hover:brightness-150 mt-auto ml-auto md:mb-2 md:hidden"
    >
      Next Step
    </button>
    <!-- <navigation-component moveTo="/plans" class="md:hidden" /> -->
  </vee-form>
</template>
<script>
// import NavigationComponent from '../components/NavigationComponentWithValidation.vue'
import StageComponent from '../components/StageComponent.vue'

export default {
  data() {
    return {
      schema: {
        name: 'required|alpha_spaces',
        email: 'required|email',
        phone: 'required|integer'
      }
    }
  },
  components: {
    // NavigationComponent,
    StageComponent
  },
  methods: {
    handleSubmit() {
      this.$router.push('/plans')
    }
  }
}
</script>
