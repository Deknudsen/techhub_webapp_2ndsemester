<template>
    <div>
        <p>Hej</p>
        <form @submit.prevent="onSubmit">    
            <div>
                <label>Testimony</label>
                <input 
                    type="text" 
                    v-model="form.testimony"
                    required 
                />
            </div>

            <div>
                <label>Name</label>
                <input 
                    type="text"
                    v-model="form.name"
                    required
                />
            </div>

            <div>
                <label>Occupation</label>
                <input 
                    type="text"
                    v-model="form.occupation"
                    required
                />
            </div>
            <div>
                <label>Website</label>
                <input 
                    type="text"
                    v-model="form.website"
                    required
                />
            </div>

            <button type="submit">
                Create Testimony
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
import { createTestimonial } from '@/firebase.js'

    export default {
        setup() {
            const router = useRouter()
            //const route = useRoute()

            const name = ref("")

            const form = reactive({
                testimony: '',
                name: '',
                occupation: '',
                website: ''
            })

            const onSubmit = async () => {
                await createTestimonial({ ...form })
                router.push('/admin/testimonials')
                
                form.testimony = '',
                form.name = '',
                form.occupation = '',
                form.website = ''   
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