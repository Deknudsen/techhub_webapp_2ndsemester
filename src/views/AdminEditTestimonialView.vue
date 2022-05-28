<template>
  <div class="card card-body mt-4">
    <h3>Edit Testimonial</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Testimony</label>
        <input v-model="form.testimony" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Name</label>
        <input
          v-model="form.name"
          class="form-control"
          type="text"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Occupation</label>
        <input
          v-model="form.occupation"
          class="form-control"
          type="text"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Website</label>
        <input
          v-model="form.website"
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
import { getTestimonial, updateTestimonial } from '@/firebase.js'

export default {
  setup() {

    const router = useRouter()
    // grab the user ID from the URL by calling the useRoute hook + using the computed 
    // to store the route.param.id
    const route = useRoute()
    // Sometimes we need state that depends on other state - in Vue this is 
    // handled with component computed properties.
    const testimonialId = computed(() => route.params.id)

    const form = reactive({
      testimony: '',
      name: '',
      occupation: '',
      website: ''
    })
    // show information about the current(click) testimonial in the edit form
    // add an onMounted life-hook that will get the user, based on router id 
    // pull the testimonial from firebase and then assign the values to the fields
    onMounted(async () => {
      const testimonial = await getTestimonial(testimonialId.value)
      form.testimony = testimonial.testimony
      form.name = testimonial.name
      form.occupation = testimonial.occupation
      form.website = testimonial.website
    })

    const update = async () => {
      // once user clicks submit, redirect them to home page or '/'
      await updateTestimonial(testimonialId.value, {...form})
      router.push('/admin/testimonials')
      // after create - empty input field
      form.testimony = ''
      form.name = ''
      form.occupation = ''
      form.website = ''
    }

    return { form, update }
  }
}
</script>

<style lang="scss" scoped>

</style>