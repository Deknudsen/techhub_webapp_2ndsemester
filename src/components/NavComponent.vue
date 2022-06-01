<template>
  <nav>
    <label for="checkboxDropdown" class="burgerMenuCircle"  @click="closeNav()">
     <i class="icon-reorder icon-3x"></i>
   </label>
    <input type="checkbox" id="checkboxDropdown" :checked="checkedbox">
   <div class="hiddenMenu" for="burgerMenuCircle" >
     <div>
       <router-link to="/">Home</router-link>
     </div>
     <div>
       <router-link to="/events">Events</router-link>
     </div>
     <div>
       <router-link to="/startups">For startups</router-link>
     </div>
     <div>
       <router-link to="/about">About us</router-link>
     </div>
     <div>
       <router-link to="/contact">Contact</router-link>
     </div>
      <div>
     <router-link to="/login"> login </router-link>
      </div>
        <div v-if="userLocal">
       <router-link to="/admin">Admin</router-link>
     </div>

    <div @click="closeNav()">checkcheck </div>     
   </div>

    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/events">Events</router-link> |
    <router-link to="/startups">For startups</router-link> |
    <router-link to="/about">About us</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/admin/events">Event List</router-link> |
    <router-link to="/admin/testimonials">testimomy List</router-link> -->
  </nav>
</template>


<script>
//Stuff for Login (Auth)
// import firebase from 'firebase'
// import { ref, onBeforeMount } from 'vue'

    export default {
        setup() {        
            let userLocal = localStorage.loggedIn
            let checkedbox = false

            let closeNav = () => {
              checkedbox = !checkedbox;
              console.log("test", checkedbox)
            }
            //const route = useRoute()

            // const name = ref("")

            // const isLoggedIn = ref("")

            // onBeforeMount(() => {
            //     const user = firebase.auth().currentUser // checking for the user info and store it in 'user'
            //     //console.log("testUser: ", user.email)
            //     if (user) {
            //         name.value = user.email.split('@')[0] // check for @ and split it there. so stuff before the @ sign.

            //         isLoggedIn.value = true
            //     }
            //     else {
            //         isLoggedIn.value = false
            //     }
            // });

          return{ 
            // isLoggedIn
              userLocal,
              closeNav
            }
        }
    }
</script>

<style lang="scss" scoped>

nav {
  padding-top:0px;
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  position: fixed;
  z-index: 99;
  
  .burgerMenuCircle {
    width: 200px;
    height: 200px;
    background-color: #006699;
    border-radius: 100px;
    margin-left: -40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      width: 210px;
      height: 210px;
      margin-left: -45px;
      margin-top: -5px;
      margin-bottom: -5px;
    }

    i {
      color: #fff;
    }
  }

  #checkboxDropdown {
    display: none;

    &:checked ~ .hiddenMenu {
      margin-left: 0;
    }
  }

  .hiddenMenu {
    width: 300px;
    height: 100vh;
    background-color: #006699;
    margin-top: -29px;
    margin-left: -300px;
    padding-top: 30px;
    padding-left: 15px;
    transition: 0.3s;

    div {
      text-align: left;
      width: 270px;
      border-bottom: 2px solid #fff;
      height: 55px;
      padding-top: 7px;

      a {
        color: #fff;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        width: 240px;
        padding: 15px;
        font-weight: 400;
        margin:0;

        &:hover {
          text-decoration: underline;
        }

        &.router-link-exact-active {
          color: #cc6633;
        }
      }

      &:first-of-type {
        border-top: 2px solid #fff;
      }
    }    
  }
}

@media screen and (max-width: 915px) {
  nav {
    .burgerMenuCircle {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      margin-left: 10px;
      margin-top: 60px;

      &:hover {
        width: 100px;
        height: 100px;
        margin-left: 10px;
        margin-top: 60px;
        margin-bottom: 0px;
      }
    }

    .hiddenMenu {
      margin-top: 10px;
    }
  }
}
</style>