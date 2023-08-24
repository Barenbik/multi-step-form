<template>
  <div>
    <header>
      <div>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/personal">Personal</router-link>
          <router-link to="/plans">Plans</router-link>
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