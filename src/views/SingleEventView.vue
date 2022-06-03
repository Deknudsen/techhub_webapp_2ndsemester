<template>
    <div>
        <!--
        <div v-for="events in eventData" :key="events.id">
            <h2> {{events.title}} </h2>

        </div> -->
        <div>
            <div class="bannerbox">
                <img src="../assets/aboutus.jpg" alt="about us"> 
                <h2 class="bannertext">{{eventData.title}}</h2>
            </div>
        </div>
        <div class="eventContainer">
        

        <div class="eventText">
            <div class="description">
                <p>{{eventData.description}}</p>
            </div>
            <div class="info">
                <h3>The event will be held on</h3>
                <h3>{{eventData.eventDate}}</h3>
                <h3>At</h3>
                <h3>{{eventData.place}}</h3>
            </div>
        </div>
        <a :href="eventData.ticketSale">Get your ticket</a>
        </div>
        <NewsletterForm />
    </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getEvent } from '@/firebase.js'
import NewsletterForm from '@/components/Newsletterchimp.vue'


    export default {
        components: {
            NewsletterForm,
        },

        setup() {
            const route = useRoute()
            const eventId = computed(() => route.params.id)


            //const event = getEvent(eventId.value)
            const eventData = reactive({
                title: '',
                eventDate: '',
                description: '',
                place: '',
                ticketSale: ''
            })

            onMounted(async () => {
                const event = await getEvent(eventId.value)
                eventData.title = event.title
                eventData.eventDate = event.eventDate
                eventData.description = event.description
                eventData.place = event.place
                eventData.ticketSale = event.ticketSale
            })

            console.log(eventData)
            
            return { eventData }
        }
    }
</script>

<style lang="scss" scoped>
.bannerbox {
  text-align: center;
  position: relative;
  margin-bottom: 40px;

  img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: 0 70%;
  }

  .bannertext {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: white;
  font-family: 'Roboto Slab', serif;
  font-weight: 600;

  &::first-letter {
      text-transform: uppercase;
  }
  }
}

h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
}

p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
}
.eventContainer{
    padding:20px 0 50px;
    .eventText {
        display: flex;
        justify-content: center;
        gap: 50px;

        .description {
            width: 650px;
            text-align: left;
            min-height: 500px;
        }
        .info {
            width: 400px;
            min-height: 500px;
        }
    }

    a {
        width: auto;
        height: auto;
        font-family: 'roboto', sans-serif;
        font-size: 24px;
        padding: 10px 15px 12px;
        margin-bottom: 50px;
        color: #fff!important;
        background-color: #006699;
        border-radius: 3px;
        text-decoration: none;
        transition: 0.1s;
        cursor: pointer;

        &:hover {
            padding:13px 18px 15px;
            border-radius: 4px;
            margin: -3px;
        }
    }
}
</style>