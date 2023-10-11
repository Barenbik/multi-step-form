<template>
  <div class="bg-light-gray md:flex md:justify-center">
    <div class="flex flex-col h-screen md:max-w-5xl">
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
