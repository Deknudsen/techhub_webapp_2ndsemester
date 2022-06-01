<template>
  <div>
    <div class="home">
    <h1>Willkommen to Home</h1>

    <img alt="Vue logo" src="../assets/logo.png">

  </div>
  <NewsletterForm />
  </div>
</template>

<script>
import NewsletterForm from '../components/NewsletterForm.vue'

export default {
  name: 'Home',
  components: {
    NewsletterForm
  }
}
</script>
