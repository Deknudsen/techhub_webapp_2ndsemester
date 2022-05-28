<template>
    <div>
        <p>Hej</p>
        <form @submit.prevent="onSubmit">    
            <div>
                <label>Title</label>
                <input 
                    type="text" 
                    v-model="form.title"
                    required 
                />
            </div>

            <div>
                <label>Date</label>
                <input 
                    type="text"
                    v-model="form.date"
                    required
                />
            </div>

            <div>
                <label>Description</label>
                <input 
                    type="text"
                    v-model="form.description"
                    required
                />
            </div>
            <div>
                <label>Place</label>
                <input 
                    type="text"
                    v-model="form.place"
                    required
                />
            </div>

            <button type="submit">
                Create Event
            </button>
        </form>
    </div>
</template>

<script>
// Stuff for Login (Auth)
import firebase from 'firebase'
import { ref, onBeforeMount } from 'vue'
import { /*useRoute,*/ useRouter } from 'vue-router'

import { reactive } from 'vue'
import { createEvent } from '@/firebase.js'

    export default {
        setup() {
            const router = useRouter()
            //const route = useRoute()

            const name = ref("")

            const form = reactive({
                title: '',
                date: '',
                description: '',
                place: ''
            })

            const onSubmit = async () => {
                await createEvent({ ...form })
                router.push('/admin/events')
                
                form.title = '',
                form.date = '',
                form.description = '',
                form.place = ''   
            }
            
    
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
                firebase.auth().signOut().then(() => {
                    // Sign-out successful.
                }).catch((error) => {
                console.log("err", error.message)
                    // An error happened.
                });
            }

            return { form, onSubmit, name, logout }
        }
    }
</script>

<style lang="scss" scoped>

</style>