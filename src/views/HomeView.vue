<template>
  <div>
    <div class="home">
    <h1>Willkommen to Home</h1>

    <img alt="Vue logo" src="../assets/logo.png">

    <ProjectListUsers />
  </div>
  </div>
</template>

<script>

import ProjectListUsers from '@/components/ProjectListUsers.vue'

export default {
  name: 'Home',
  components: {
    ProjectListUsers
  }
}
</script>
