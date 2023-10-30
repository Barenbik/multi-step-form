<template>
  <div
    class="mx-4 -my-20 p-6 rounded-md bg-white shadow-lg md:my-4 md:shadow-none md:flex md:flex-row md:h-3/4 md:min-h-custom"
  >
    <stage-component class="rounded-md hidden md:block" />
    <div class="md:px-20 md:py-20">
      <div class="flex flex-col items-center py-10 px-8">
        <img src="../assets/images/icon-thank-you.svg" alt="Thank you" class="py-4 img-max" />
        <h1 class="font-semibold text-marine-blue text-3xl py-2 md:py-4">Thank you!</h1>
        <p class="text-center text-cool-gray md:pb-10">
          Thanks for confirming your subscription! We hope you have<br class="hidden md:block" />
          fun using our platform. If you ever need support, please feel<br
            class="hidden md:block"
          />
          free to email us at support@loremgaming.com
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import StageComponent from '../components/StageComponent.vue'

export default {
  components: {
    StageComponent
  }
}
</script>
