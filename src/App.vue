<template>
  <div class="flex flex-col bg-light-gray h-screen">
    <header class="bg-header-pattern bg-cover h-40">
      <nav class="flex items-center justify-center h-20">
        <div class="m-2 rounded-full border border-solid border-white hover:bg-light-blue">
          <router-link to="/personal" class="p-2 text-white font-medium hover:text-marine-blue"
            >1</router-link
          >
        </div>
        <div class="hidden xl:block">
          <div class="text-light-gray text-sm">STEP 1</div>
          <div class="text-white">YOUR INFO</div>
        </div>
        <div class="m-2 rounded-full border border-solid border-white hover:bg-light-blue">
          <router-link to="/plans" class="text-white p-2 font-medium hover:text-marine-blue"
            >2</router-link
          >
        </div>
        <div class="hidden xl:block">
          <div class="text-light-gray text-sm">STEP 2</div>
          <div class="text-white">SELECT PLAN</div>
        </div>
        <div class="m-2 rounded-full border border-solid border-white hover:bg-light-blue">
          <router-link to="/addons" class="text-white p-2 font-medium hover:text-marine-blue"
            >3</router-link
          >
        </div>
        <div class="hidden xl:block">
          <div class="text-light-gray text-sm">STEP 3</div>
          <div class="text-white">ADD-ONS</div>
        </div>
        <div class="m-2 rounded-full border border-solid border-white hover:bg-light-blue">
          <router-link to="/finishingup" class="text-white p-2 font-medium hover:text-marine-blue"
            >4</router-link
          >
        </div>
        <div class="hidden xl:block">
          <div class="text-light-gray text-sm">STEP 4</div>
          <div class="text-white">SUMMARY</div>
        </div>
        <div>
          <router-link to="/completed"></router-link>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>
