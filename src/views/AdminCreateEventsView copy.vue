<template>
    <div>
        <p>Hej</p>
        <form @submit.prevent="onSubmit">    
            <div>
                <label>Name</label>
                <input 
                    type="text" 
                    v-model="form.title"
                    required 
                />
            </div>

            <div>
                <label>Task</label>
                <input 
                    type="text"
                    v-model="form.date"
                    required
                />
            </div>

            <div>
                <label>Task</label>
                <input 
                    type="text"
                    v-model="form.description"
                    required
                />
            </div>
            
            <div>
                <label>Task</label>
                <input 
                    type="text"
                    v-model="form.place"
                    required
                />
            </div>

            <button type="submit">
                Create Project
            </button>
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { createEvent } from '@/firebase.js'

    export default {
        setup() {
            const form = reactive({
                title: '',
                date: '',
                description: '',
                place: ''
            })

            const onSubmit = async () => {
                await createEvent({ ...form })
                
                form.title = '',
                form.date = '',
                form.description = '',
                form.place = ''
            }

            return { form, onSubmit }
        }
    }
</script>

<style lang="scss" scoped>

</style>