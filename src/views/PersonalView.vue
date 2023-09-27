<template>
    <div class="mx-4 -my-20 p-6 rounded-md bg-white shadow-lg">
      <h1 class="font-semibold text-marine-blue text-2xl pb-2">Personal info</h1>
      <p class="font-normal text-cool-gray pb-6 text-lg leading-6">
        Please provide your name, email address, and phone number.
      </p>
      <div class="pb-3">
        <label class="block text-marine-blue text-sm" for="name">Name</label>
        <input
          class="border border-gray-300 py-2 px-4 rounded-md w-full"
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
        />
      </div>
      <div class="pb-3">
        <label class="block text-marine-blue text-sm" for="email">Email Address</label>
        <input
          class="border border-gray-300 py-2 px-4 rounded-md w-full"
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div class="pb-3">
        <label class="block text-marine-blue text-sm" for="phone">Phone Number</label>
        <input
          class="border border-gray-300 py-2 px-4 rounded-md w-full"
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </div>
    <navigation-component />
</template>
<script>
import NavigationComponent from '../components/NavigationComponent.vue';

export default {
  components: {
    NavigationComponent
  }
}
</script>
