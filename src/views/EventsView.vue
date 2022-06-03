<template>
    <div>
        <section>
        <div class="bannerbox"><img src="../assets/events.png" alt="events"> 
        <div class="bannertext">Upcoming Events</div>
        </div>

            <div class="events">
                <div class="singleEvent" v-for="events in comingEvents" :key="events.id">
                    <div>
                        <p> {{events.title}} </p>
                        <div> 
                            <p> {{events.eventDate}} </p>
                            <p> {{events.place}} </p>
                        </div>
                    </div>
                    <router-link class="redirectBtn" :to="{ name: 'event', params: {id : events.id}}" >Read More</router-link>
                </div>
            </div>
        </section>
        <section>
            <div class="banner">
                <h2>Prior Event</h2>
            </div>
            <div class="subheader">
                Are you interested in what prior events TECHHUB facilitated? See the list down below
            </div>
            <div class="events">
                <div class="singleEvent prior" v-for="events in priorEvents" :key="events.id">
                    <div>
                        <p> {{events.title}} </p>
                        <div> 
                            <p> {{events.eventDate}} </p>
                            <p> {{events.place}} </p>
                        </div>
                    </div>
                    <router-link class="redirectBtn" :to="{ name: 'event', params: {id : events.id}}" >Read More</router-link>
                </div>
            </div>
        </section>
        <NewsletterForm />
    </div>
</template>

<script>
import { useUpcomingEvents } from '@/firebase.js'
import { usePriorEvents } from '@/firebase.js'
import NewsletterForm from '@/components/Newsletterchimp.vue'

    export default {
        components: {
            NewsletterForm
        },
        setup() {
            const comingEvents = useUpcomingEvents()
            const priorEvents = usePriorEvents()

            return {
                comingEvents,
                priorEvents
            }
            
        }
    }
</script>

<style lang="scss" scoped>

img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: 0 35%;
}

.bannerbox {
  text-align: center;
  position: relative;
  margin-bottom: 70px;
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
}


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
    
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            margin:0;
            text-align: left;
            color: #006699;
            font-size: 24px;
            width: 250px;

        

            &::first-letter {
                text-transform: uppercase;
            }
        }

        div {
            display: flex;
            width: 400px;
            
                p {
                width: 150px;
                font-size: 16px;
                color: #333333;
            }
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

        .prior {
            p {
                color: #333;

                &:first-of-type {
                    color:#333;
                }
            }
            .redirectBtn {
                background-color: #333;
            }
        }

        .subheader {
            font-size: 24px;
            font-family: 'Roboto', sans-serif;
        }
  }

@media only screen and (max-width: 915px) {

img {
  height: 150px;
}

.bannerbox {
  text-align: center;
  position: relative;
  margin-bottom: 40px;
}

.bannertext {
  font-size: 36px;
}

h2 {
    font-size: 24px;
}

.events {

    .singleEvent{
        width: 600px;
        display: flex;
        
        div {
            flex-direction: column;
            align-items: flex-start;

            div {
                display: flex;
                justify-content: flex-start;
                flex-direction: row;
                p {
                    width: 175px;
                }
            }
        }
    }
}

.redirectBtn {
    width: 200px;
    font-size: 16px;
}

.subheader {
    width: 240px;
    display: flex;
    margin: 0 auto;
    font-size: 16px;
}

}

</style>