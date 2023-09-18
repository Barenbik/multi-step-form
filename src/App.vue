<template>
  <div class="bg-light-blue h-screen">
    <header class="bg-header-pattern bg-cover h-40">
      <div>
        <nav>
          <router-link to="/personal">Personal</router-link>
          <router-link to="/plans">Plans</router-link>
          <router-link to="/addons">Add-ons</router-link>
          <router-link to="/finishingup">Finishing Up</router-link>
          <router-link to="/completed">Completed</router-link>
        </nav>
      </div>
    </header>
    <router-view class="mx-4 -my-20"/>
  </div>
</template>

<script>
export default {

};
</script>