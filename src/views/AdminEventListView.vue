<template>
    <div>
        <h1>This is an admin page</h1>
        <h1>Welcome {{ name }}</h1>
        <button  @click="logout">  <!-- v-if="user"  -->
        Logout
        </button>
        
        <EventList />
    </div>
</template>

<script>

// Stuff for Login (Auth)
import firebase from 'firebase'
import { ref, onBeforeMount } from 'vue'
import { /*useRoute,*/ useRouter } from 'vue-router'

import EventList from '@/components/AdminEventList.vue'

    export default {
      components: {
 
    EventList

  },
        setup() {
    const router = useRouter()
    //const route = useRoute()

    const name = ref("")
    
    onBeforeMount(() => {
      const user = firebase.auth().currentUser // checking for the user info and store it in 'user'
      //console.log("testUser: ", user.email)
      if (user) {
        name.value = user.email.split('@')[0] // check for @ and split it there. so stuff before the @ sign.
      }
      else {
        router.push('/login') 
      }
    });
    
    const logout = () => {
      firebase
      .auth()
      .signOut()
      .then(() => {
      // Sign-out successful.
      }).catch((error) => {
        console.log("err", error.message)
      // An error happened.
      });
    }

    return { name, logout }  
    }

    }

</script>


<style lang="scss" scoped>

</style>