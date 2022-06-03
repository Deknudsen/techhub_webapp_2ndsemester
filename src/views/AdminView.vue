<template>
  <div class="adminPage">

    <div class="adminMenu">
      <router-link to="/admin/events" >Events</router-link>
      <router-link to="/admin/testimonials" >Testimonials</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.adminPage {
  min-height: 720px;
}

  .adminMenu {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
</style>