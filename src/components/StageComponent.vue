<template>
  <div class="bg-mobile-header-pattern bg-cover h-40 xl:h-auto xl:bg-desktop-header-pattern">
    <nav
      class="flex items-center justify-center h-20 xl:h-auto xl:justify-normal xl:items-start xl:flex-col xl:py-12 xl:pr-12 xl:pl-6"
    >
      <div class="xl:flex xl:flex-row xl:py-2 xl:items-center">
        <div class="flex items-center justify-center m-3 h-8 w-8 rounded-full border border-solid border-white hover:bg-light-blue">
          <router-link to="/personal" class="text-white font-medium hover:text-marine-blue"
            >1</router-link
          >
        </div>
        <div class="hidden xl:block">
          <div class="text-light-gray text-sm">STEP 1</div>
          <div class="text-white">YOUR INFO</div>
        </div>
      </div>
      <div class="xl:flex xl:flex-row xl:py-2 xl:items-center">
        <div class="flex items-center justify-center m-3 h-8 w-8 rounded-full border border-solid border-white hover:bg-light-blue">
          <router-link to="/plans" class="text-white font-medium hover:text-marine-blue"
            >2</router-link
          >
        </div>
        <div class="hidden xl:block">
          <div class="text-light-gray text-sm">STEP 2</div>
          <div class="text-white">SELECT PLAN</div>
        </div>
      </div>
      <div class="xl:flex xl:flex-row xl:py-2 xl:items-center">
        <div class="flex items-center justify-center m-3 h-8 w-8 rounded-full border border-solid border-white hover:bg-light-blue">
          <router-link to="/addons" class="text-white font-medium hover:text-marine-blue"
            >3</router-link
          >
        </div>
        <div class="hidden xl:block">
          <div class="text-light-gray text-sm">STEP 3</div>
          <div class="text-white">ADD-ONS</div>
        </div>
      </div>
      <div class="xl:flex xl:flex-row xl:py-2 xl:items-center">
        <div class="flex items-center justify-center m-3 h-8 w-8 rounded-full border border-solid border-white hover:bg-light-blue">
          <router-link to="/finishingup" class="text-white font-medium hover:text-marine-blue"
            >4</router-link
          >
        </div>
        <div class="hidden xl:block">
          <div class="text-light-gray text-sm">STEP 4</div>
          <div class="text-white">SUMMARY</div>
        </div>
      </div>
      <div>
        <router-link to="/completed"></router-link>
      </div>
    </nav>
  </div>
</template>
