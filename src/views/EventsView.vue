<template>
    <div>
        <section>
            <div class="banner">
                <h2>Upcoming Events</h2>
            </div>
            <div class="events">
                <div class="singleEvent" v-for="events in comingEvents" :key="events.id">
                    <p> {{events.title}} </p>
                    <p> {{events.eventDate}} </p>
                    <p> {{events.place}} </p>
            
                    <router-link class="redirectBtn" :to="{ name: 'event', params: {id : events.id}}" >Read More</router-link>
                </div>
            </div>
        </section>
        <section>
            <div class="banner">
                <h2>Prior Event</h2>
            </div>
            <div class="events">
                <div class="singleEvent prior" v-for="events in priorEvents" :key="events.id">
                    <p> {{events.title}} </p>
                    <p> {{events.eventDate}} </p>
                    <p> {{events.place}} </p>
            
                    <router-link class="redirectBtn" :to="{ name: 'event', params: {id : events.id}}" >Read More</router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { useUpcomingEvents } from '@/firebase.js'
import { usePriorEvents } from '@/firebase.js'

    export default {
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
  }
</style>