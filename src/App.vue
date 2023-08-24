<template>
  <div>
    <header>
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
    <router-view />
  </div>
</template>

<script>
export default {

};
</script>