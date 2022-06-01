<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" /> 
      <input type="submit" value="login">
      <p>Need an account? 
        <router-link to="/register">Register here</router-link>
      </p>
      <button  @submit.prevent="logout">    
          logout
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router'

  export default {
    setup() {
      const router = useRouter()

      const email = ref("")
      const password = ref("")
      const userLocal = ref()

      const login = async () => {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          .then(() => {})
          .catch(err => alert(err.message)); // just to check if we want
          router.replace('/admin')
          
          let userLocal = localStorage.setItem("loggedIn", email.value)
          console.log(userLocal)
       //   console.log("loggedIn", loggedIn )
      }

  //    import { getAuth, signOut } from "firebase/auth";

      
    const logout = async () => {
      await firebase
      .auth()
      .signOut()
      .then(() => {
      // Sign-out successful.
      }).catch((error) => {
        console.log("err", error.message)
      // An error happened.
      });
    }
    
      return { login, email, password, userLocal, logout } // remember me!
      // test - email badly formatted - No user existing at all
    }    
  }
</script>

<style lang="scss" scoped>

</style>