<template>
  <div class="bg-mobile-header-pattern bg-cover h-40 md:h-auto md:bg-desktop-header-pattern">
    <nav
      class="flex items-center justify-center h-20 md:h-auto md:justify-normal md:items-start md:flex-col md:py-6 md:pr-24 md:pl-6"
    >
      <div class="md:flex md:flex-row md:py-2 md:items-center">
        <div
          class="flex items-center justify-center m-3 h-8 w-8 rounded-full border border-solid border-white"
          :class="this.$route.name === 'personal' ? 'bg-light-blue border-none' : ''"
        >
          <router-link
            to="/personal"
            class="font-medium"
            :class="this.$route.name === 'personal' ? 'text-marine-blue' : 'text-white'"
            >1</router-link
          >
        </div>
        <div class="hidden md:block">
          <div class="text-light-gray text-xs min-w-98">STEP 1</div>
          <div class="text-white text-sm font-semibold min-w-98">YOUR INFO</div>
        </div>
      </div>
      <div class="md:flex md:flex-row md:py-2 md:items-center">
        <div
          class="flex items-center justify-center m-3 h-8 w-8 rounded-full border border-solid border-white"
          :class="this.$route.name === 'plans' ? 'bg-light-blue border-none' : ''"
        >
          <router-link
            to="/plans"
            class="font-medium"
            :class="this.$route.name === 'plans' ? 'text-marine-blue' : 'text-white'"
            >2</router-link
          >
        </div>
        <div class="hidden md:block">
          <div class="text-light-gray text-xs min-w-98">STEP 2</div>
          <div class="text-white text-sm font-semibold min-w-98">SELECT PLAN</div>
        </div>
      </div>
      <div class="md:flex md:flex-row md:py-2 md:items-center">
        <div
          class="flex items-center justify-center m-3 h-8 w-8 rounded-full border border-solid border-white"
          :class="this.$route.name === 'addons' ? 'bg-light-blue border-none' : ''"
        >
          <router-link
            to="/addons"
            class="font-medium"
            :class="this.$route.name === 'addons' ? 'text-marine-blue' : 'text-white'"
            >3</router-link
          >
        </div>
        <div class="hidden md:block">
          <div class="text-light-gray text-xs min-w-98">STEP 3</div>
          <div class="text-white text-sm font-semibold min-w-98">ADD-ONS</div>
        </div>
      </div>
      <div class="md:flex md:flex-row md:py-2 md:items-center">
        <div
          class="flex items-center justify-center m-3 h-8 w-8 rounded-full border border-solid border-white"
          :class="this.$route.name === 'finishingup' ? 'bg-light-blue border-none' : ''"
        >
          <router-link
            to="/finishingup"
            class="font-medium"
            :class="this.$route.name === 'finishingup' ? 'text-marine-blue' : 'text-white'"
            >4</router-link
          >
        </div>
        <div class="hidden md:block">
          <div class="text-light-gray text-xs min-w-98">STEP 4</div>
          <div class="text-white text-sm font-semibold min-w-98">SUMMARY</div>
        </div>
      </div>
      <div>
        <router-link to="/completed"></router-link>
      </div>
    </nav>
  </div>
</template>
