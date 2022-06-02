<template>
  <div class="card card-body mt-4">
    <h3>Edit Enent</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Title</label>
        <input v-model="form.title" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Date</label>
        <input
          v-model="form.eventDate"
          class="form-control"
          type="date"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Description</label>
        <input
          v-model="form.description"
          class="form-control"
          type="text"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Place</label>
        <input
          v-model="form.place"
          class="form-control"
          type="text"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getEvent, updateEvent } from '@/firebase.js'

export default {
  setup() {

    const router = useRouter()
    // grab the user ID from the URL by calling the useRoute hook + using the computed 
    // to store the route.param.id
    const route = useRoute()
    // Sometimes we need state that depends on other state - in Vue this is 
    // handled with component computed properties.
    const eventId = computed(() => route.params.id)

    const form = reactive({
      title: '',
      eventDate: '',
      description: '',
      place: ''
    })
    // show information about the current(click) event in the edit form
    // add an onMounted life-hook that will get the user, based on router id 
    // pull the event from firebase and then assign the values to the fields
    onMounted(async () => {
      const event = await getEvent(eventId.value)
      form.title = event.title
      form.eventDate = event.eventDate
      form.description = event.description
      form.place = event.place
    })

    const update = async () => {
      // once user clicks submit, redirect them to home page or '/'
      await updateEvent(eventId.value, {...form})
      router.push('/admin/events')
      // after create - empty input field
      form.title = ''
      form.eventDate = ''
      form.description = ''
      form.place = ''
    }

    return { form, update }
  }
}
</script>

<style lang="scss" scoped>

</style>