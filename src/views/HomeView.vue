<template>
  <div>
    <div class="events">
      <h2>Upcoming events</h2>
      <div class="singleEvent" v-for=" events in e " :key="events.id">
        <p> {{events.title}} </p>
        <p> {{events.eventDate}} </p>
        <p> {{events.place}} </p>

        <router-link class="redirectBtn" :to="{ name: 'event', params: {id : events.id}}" >Read More</router-link>
      </div>

      <router-link class="redirectBtn" to="/events">See all events</router-link>
    </div>
    <hr>
    <div class="aboutUs">
      <h2>Who are we?</h2>
      <p>We partner with inspirational leaders and tech entrepreneurs who have either built own venture or invested in startups.
        <br><br>
        They go on stage to hand out wisdom from the biggest success to various failures. This to tell the true story of building tech companies and to inspire others.
        <br><br>
        Want to learn more about us?</p>

      <router-link class="redirectBtn" to="/about" >Read More</router-link>
    </div>
    <hr>
    <div class="testimonials">
      <h2>What the people say</h2>
      <div class="container">
        <div class="testimony" v-for="{ id, testimony, name, occupation, firm, website } in testimonials" :key="id" >
          <img src="../assets/icons/quotationIcon.svg" alt="QuotationIcon">
          <p> {{ testimony }} </p>
          <h3> {{ name }} </h3>
          <p> {{ occupation }} </p>
          <p> {{ firm }} </p>
          <a :href="website" > {{ website }} </a>
        </div>               
      </div>
    </div>
  <NewsletterForm />
  </div>
</template>

<script>
import NewsletterForm from '../components/NewsletterForm.vue'
import { useLoadTestimonials } from '@/firebase.js'
import { useSortEvents } from '@/firebase.js'

export default {
  name: 'Home',
  components: {
    NewsletterForm
  },
  setup() {
    const testimonials = useLoadTestimonials()
    const e = useSortEvents()
    

    return { 
      testimonials,
      e
    
    }
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    font-family: 'Roboto Slab', serif;
    font-size: 48px;
    margin-bottom: 50px;
    color: #006699;
  }

  .redirectBtn {
    width: auto;
    height: auto;
    font-family: 'roboto', sans-serif;
    font-size: 24px;
    padding: 10px 15px 12px;
    color: #fff;
    background-color: #006699;
    border-radius: 3px;
    text-decoration: none;
    transition: 0.1s;

    &:hover {
      padding:13px 18px 15px;
      border-radius: 4px;
      margin: -3px;
    }
  }

  hr {
    width: 1200px;
    height: 2px;
    opacity: 1;
    color: #006699;
    margin: 0 auto;
  }

  .events {
    height: 700px;
    padding: 50px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .singleEvent {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 1120px;
      border-bottom: 1px solid #006699;
      height: 112px;
      padding:0 40px;
      font-family: 'Roboto', sans-serif;

      p {
        margin:0;
        font-size: 16px;
        text-align: left;
        width: 150px;

        &:first-of-type {
          color: #006699;
          font-size: 24px;
          width: 250px;
        }
        &::first-letter {
          text-transform: uppercase;
        }
      }

      .redirectBtn {
    
    padding: 5px 10px 7px;
    

    &:hover {
      padding:8px 13px 10px;
      
    }
  }

      &:first-of-type {
        border-top: 1px solid #006699;
      }

      &:last-of-type {
        margin-bottom: 80px;
      }
    }
  }

  .aboutUs {
    padding: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
      width: 810px;
      text-align: left;
      height: auto;
      font-family: 'Roboto', sans-serif;
      font-size: 24px;
      color: #333;

      &:last-of-type {
        margin-bottom: 50px;
      }
    }
  }

  .testimonials {
    padding: 50px 0;

    .container {
      display: flex;
      justify-content: center;
      gap: 50px;

      .testimony {
        width: 450px;
        display: flex;
        flex-direction: column;

        img {
          width: 30px;
          height: 30px;
          object-fit: fill;
        }

        h3 {
          text-align: left;
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          color: #cc6633;
          font-weight: bold;
          margin-bottom: 0;
        }

        p {
          text-align: left;
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          color: #333;
          margin-bottom: 0;

          &:first-of-type {
            margin-bottom: 15px;
          }
        }

        a {
          text-align: left;
          color: #333;
        }
      }
    }
  }
</style>