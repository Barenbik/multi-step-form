<template>
  <div
    class="mx-4 -my-20 p-6 rounded-md bg-white shadow-lg md:my-4 md:p-4 md:shadow-none md:flex md:flex-row"
  >
    <stage-component class="rounded-md hidden md:block" />
    <div class="md:px-20 md:pt-10">
      <h1 class="font-semibold text-marine-blue text-3xl pb-2">Personal info</h1>
      <p class="font-normal text-cool-gray pb-8 leading-6">
        Please provide your name, email address, and phone number.
      </p>
      <div class="pb-5">
        <label class="block text-marine-blue text-sm pb-1" for="name">Name</label>
        <input
          class="border border-gray-300 py-2 px-4 rounded-md w-full"
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
        />
      </div>
      <div class="pb-5">
        <label class="block text-marine-blue text-sm pb-1" for="email">Email Address</label>
        <input
          class="border border-gray-300 py-2 px-4 rounded-md w-full"
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div class="pb-5">
        <label class="block text-marine-blue text-sm pb-1" for="phone">Phone Number</label>
        <input
          class="border border-gray-300 py-2 px-4 rounded-md w-full"
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
      <navigation-component moveTo="/plans" class="hidden md:block" />
    </div>
  </div>
  <navigation-component moveTo="/plans" class="md:hidden" />
</template>
<script>
import NavigationComponent from '../components/NavigationComponent.vue'
import StageComponent from '../components/StageComponent.vue'

export default {
  components: {
    NavigationComponent,
    StageComponent
  }
}
</script>
