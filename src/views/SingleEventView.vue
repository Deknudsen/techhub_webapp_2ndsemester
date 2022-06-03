<template>
    <div>
        <div v-for="events in event" :key="events.id">
            <h2> {{events.title}} </h2>

        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getEvent } from '@/firebase.js'
    export default {
        setup() {
            const route = useRoute()
            const eventId = computed(() => route.params.id)

            const event = getEvent(eventId)


            console.log(event)
            
            return { event }
        }
    }
</script>

<style lang="scss" scoped>

</style>