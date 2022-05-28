<template>
  <div class="card mt-4">
    <router-link :to="`/admin/createtestimonials`">
              <button class="btn btn-primary btn-sm me-2">
                Create
              </button>
    </router-link>
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Testimony</th>
          <th scope="col">Name</th>
          <th scope="col">Occupation</th>
          <th scope="col">Website</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, testimony, name, occupation, website } in testimonials" :key="id">
          <td>{{ testimony }}</td>
          <td>{{ name }}</td>
          <td>{{ occupation }}</td>
          <td>{{ website }}</td>
          <td>
            <!-- manually type action buttons -->
            <!-- :to will redirect the user to the edit URL with the id set to the testimonial we are iterating -->
            <router-link :to="`/admin/edittestimonials/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <!-- use deletetestimonial and pass the id -->
            <button class="btn btn-danger btn-sm" @click="deleteTestimonial(id)">
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
import { useLoadTestimonials, deleteTestimonial  } from '@/firebase.js'

  export default {
    setup() {
      const testimonials = useLoadTestimonials()

      return { testimonials, deleteTestimonial }
    } 
  }
</script>

<style lang="scss" scoped>

</style>