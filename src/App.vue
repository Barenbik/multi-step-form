<template>
  <div class="flex flex-col bg-light-gray h-screen">
    <stage-component class="xl:hidden" />
    <router-view />
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
