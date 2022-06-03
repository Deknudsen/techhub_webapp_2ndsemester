<template>
    <div>
        <div v-for="{ id, title} in eventData" :key="id">
            <h2> {{title}} </h2>

        </div>
    </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getEvent } from '@/firebase.js'
    export default {
        setup() {
            const route = useRoute()
            const eventId = computed(() => route.params.id)


            //const event = getEvent(eventId.value)
            const eventData = reactive({
                title: '',
                eventDate: '',
                description: '',
                place: ''
            })

            onMounted(async () => {
                const event = await getEvent(eventId.value)
                eventData.title = event.title
                eventData.eventDate = event.eventDate
                eventData.description = event.description
                eventData.place = event.place
            })

            console.log(eventData)
            
            return { eventData }
        }
    }
</script>

<style lang="scss" scoped>

</style>