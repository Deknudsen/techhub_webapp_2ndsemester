<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Date</th>
          <th scope="col">Description</th>
          <th scope="col">Place</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, title, date, description, place } in events" :key="id">
          <td>{{ title }}</td>
          <td>{{ date }}</td>
          <td>{{ description }}</td>
          <td>{{ place }}</td>
          <td>
            <!-- manually type action buttons -->
            <!-- :to will redirect the user to the edit URL with the id set to the event we are iterating -->
            <router-link :to="`/editevents/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <!-- use deleteevent and pass the id -->
            <button class="btn btn-danger btn-sm" @click="deleteEvent(id)">
              Delete
            </button>
             <!--  -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// useload hook + delete import 
import { useLoadEvents, deleteEvent  } from '@/firebase.js'

  export default {
    setup() {
      const events = useLoadEvents()

      return { events, deleteEvent }
    } 
  }
</script>

<style lang="scss" scoped>

</style>