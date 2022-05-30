<template>
  <HeaderComponent />
  <router-view/>

  <FooterComponent />
</template>

<script>
import firebase from 'firebase' // firebase general stuff
import {} from '@/firebase.js' // all from firebase.js file

import { onBeforeMount} from 'vue' // lifecycle hook
import { useRouter, useRoute } from 'vue-router' // able to use methods from vue-router (replace etc)

import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  
  setup() {
    const router = useRouter(); // just declaring them
    const route = useRoute();

    onBeforeMount(() => { // 
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) { // dont have a user - not logged in)
          router.replace('/login') // send them to this place
        }
        else if (route.path == '/login' || route.path == '/register') { // if logged in on this page, send us to home
          router.replace('/'); // test: go to frontpage, should redirect
        }
      })
    })
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
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
