<template>
  <div class="bg-light-gray md:flex md:justify-center">
    <div class="flex flex-col h-screen md:w-screen md:max-w-976">
      <stage-component class="md:hidden" />
      <router-view />
    </div>
  </div>
</template>
<script>
import StageComponent from './components/StageComponent.vue'

export default {
  components: {
    StageComponent
  }
}
</script>
