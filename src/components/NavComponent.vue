<template>
  <nav>
   


    <router-link to="/">Home</router-link> |
    <router-link to="/events">Events</router-link> |
    <router-link to="/startups">For startups</router-link> |
    <router-link to="/about">About us</router-link> |
    <router-link to="/contact">Contact</router-link> |
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