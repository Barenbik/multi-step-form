<template>
  <div class="bg-mobile-header-pattern bg-cover h-40 md:h-auto md:bg-desktop-header-pattern">
    <nav
      class="flex items-center justify-center h-20 md:h-auto md:justify-normal md:items-start md:flex-col md:py-6 md:pr-24 md:pl-6"
    >
      <div class="md:flex md:flex-row md:py-2 md:items-center">
        <div class="flex items-center justify-center m-3 h-8 w-8 rounded-full border border-solid border-white hover:bg-light-blue">
          <router-link to="/personal" class="text-white font-medium hover:text-marine-blue"
            >1</router-link
          >
        </div>
        <div class="hidden md:block">
          <div class="text-light-gray text-xs">STEP 1</div>
          <div class="text-white text-sm font-semibold">YOUR INFO</div>
        </div>
      </div>
      <div class="md:flex md:flex-row md:py-2 md:items-center">
        <div class="flex items-center justify-center m-3 h-8 w-8 rounded-full border border-solid border-white hover:bg-light-blue">
          <router-link to="/plans" class="text-white font-medium hover:text-marine-blue"
            >2</router-link
          >
        </div>
        <div class="hidden md:block">
          <div class="text-light-gray text-xs">STEP 2</div>
          <div class="text-white text-sm font-semibold">SELECT PLAN</div>
        </div>
      </div>
      <div class="md:flex md:flex-row md:py-2 md:items-center">
        <div class="flex items-center justify-center m-3 h-8 w-8 rounded-full border border-solid border-white hover:bg-light-blue">
          <router-link to="/addons" class="text-white font-medium hover:text-marine-blue"
            >3</router-link
          >
        </div>
        <div class="hidden md:block">
          <div class="text-light-gray text-xs">STEP 3</div>
          <div class="text-white text-sm font-semibold">ADD-ONS</div>
        </div>
      </div>
      <div class="md:flex md:flex-row md:py-2 md:items-center">
        <div class="flex items-center justify-center m-3 h-8 w-8 rounded-full border border-solid border-white hover:bg-light-blue">
          <router-link to="/finishingup" class="text-white font-medium hover:text-marine-blue"
            >4</router-link
          >
        </div>
        <div class="hidden md:block">
          <div class="text-light-gray text-xs">STEP 4</div>
          <div class="text-white text-sm font-semibold">SUMMARY</div>
        </div>
      </div>
      <div>
        <router-link to="/completed"></router-link>
      </div>
    </nav>
  </div>
</template>
