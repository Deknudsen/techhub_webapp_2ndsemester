<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/admin/events">Event List</router-link> |
    <router-link to="/admin/testimonials">testimomy List</router-link>
  </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>