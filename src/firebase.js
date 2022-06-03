import firebase from 'firebase'
import { ref, onUnmounted } from 'vue' // 1: Will be used in our CRUD functions

const config = {
  apiKey: "AIzaSyAWB_omh54gskmyrnRFPiT9mEufn5lB1CI",
  authDomain: "techhub-2ndsemester-2022.firebaseapp.com",
  databaseURL: "https://techhub-2ndsemester-2022-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "techhub-2ndsemester-2022",
  storageBucket: "techhub-2ndsemester-2022.appspot.com",
  messagingSenderId: "1069010667414",
  appId: "1:1069010667414:web:8142fcf6e9c008a945bfb7"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()   // 1:  saving into a const variable
const projectCollection = db.collection('projects') // 1:  grab the collection from firestore
const eventCollection = db.collection('events')
const testimonialCollection = db.collection('testimonials')

// 2 : Make our CRUD functions and exporting them for use in other components

// create project by using the add prototype from firebase
// Add a project to the project collection
export const createProject = project => {
  return projectCollection.add(project)
}

// accept project id and return the documentation if it exist in the project collection
export const getProject = async id => {
  const project = await projectCollection.doc(id).get()
  // ternary : condition ? ifTrue : ifFalse
  return project.exists ? project.data() : null  // firebase exist method (like include/contains) 
  // Link: https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#exists
}

// accepts project + id (through the v-for) and updates the correct project based in id
export const updateProject = (id, project) => {
  return projectCollection.doc(id).update(project)
}

// accepts id => deletes
export const deleteProject = id => {
  return projectCollection.doc(id).delete()
}

// composition hook, that will return a ref to an array of projects from the database
// to do this we add a listener(onSnapshot) on projectCollections so 
// it updates whenever a change is detected


export const useLoadProjects = () => {
  const projects = ref([])
  const close = projectCollection.onSnapshot(snapshot => {
    projects.value = snapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }))
  })
  // Creating this listener, will return us a clean-up function(onUnmounted, 
  // which we will call on the onUnmounted lifecycle(test with onUpdate)
  onUnmounted(close)
  return projects
}

// 2 : Make our CRUD functions and exporting them for use in other components

// create event by using the add prototype from firebase
// Add a event to the event collection
export const createEvent = event => {
  return eventCollection.add(event)
}

// accept event id and return the documentation if it exist in the event collection
export const getEvent = async id => {
  const event = await eventCollection.doc(id).get()
  // ternary : condition ? ifTrue : ifFalse
  return event.exists ? event.data() : null  // firebase exist method (like include/contains) 
  // Link: https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#exists
}

// accepts event + id (through the v-for) and updates the correct event based in id
export const updateEvent = (id, event) => {
  return eventCollection.doc(id).update(event)
}

// accepts id => deletes
export const deleteEvent = id => {
  return eventCollection.doc(id).delete()
}

// composition hook, that will return a ref to an array of events from the database
// to do this we add a listener(onSnapshot) on eventCollections so 
// it updates whenever a change is detected


export const useLoadEvents = () => {
  const events = ref([])
  const close = eventCollection.onSnapshot(snapshot => {
    events.value = snapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }))
  })
  // Creating this listener, will return us a clean-up function(onUnmounted, 
  // which we will call on the onUnmounted lifecycle(test with onUpdate)
  onUnmounted(close)
  return events
}

export const useSortEvents = () => {
  const events = ref([])
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  
  const closed = eventCollection.orderBy("eventDate").startAt(today).limit(3).onSnapshot(snapshot => {
    events.value = snapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }))
  })
  // Creating this listener, will return us a clean-up function(onUnmounted, 
  // which we will call on the onUnmounted lifecycle(test with onUpdate)
  onUnmounted(closed)
  return events
}

export const useUpcomingEvents = () => {
  const events = ref([])
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  
  const upcoming = eventCollection.orderBy("eventDate").startAt(today).limit(5).onSnapshot(snapshot => {
    events.value = snapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }))
  })
  // Creating this listener, will return us a clean-up function(onUnmounted, 
  // which we will call on the onUnmounted lifecycle(test with onUpdate)
  onUnmounted(upcoming)
  return events
}

export const usePriorEvents = () => {
  const events = ref([])
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  
  const prior = eventCollection.orderBy("eventDate", "desc").startAt(today).limit(5).onSnapshot(snapshot => {
    events.value = snapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }))
  })
  // Creating this listener, will return us a clean-up function(onUnmounted, 
  // which we will call on the onUnmounted lifecycle(test with onUpdate)
  onUnmounted(prior)
  return events
}

// 2 : Make our CRUD functions and exporting them for use in other components

// create testimonial by using the add prototype from firebase
// Add a testimonial to the testimonial collection
export const createTestimonial = testimonial => {
  return testimonialCollection.add(testimonial)
}

// accept testimonial id and return the documentation if it exist in the testimonial collection
export const getTestimonial = async id => {
  const testimonial = await testimonialCollection.doc(id).get()
  // ternary : condition ? ifTrue : ifFalse
  return testimonial.exists ? testimonial.data() : null  // firebase exist method (like include/contains) 
  // Link: https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#exists
}

// accepts testimonial + id (through the v-for) and updates the correct testimonial based in id
export const updateTestimonial = (id, testimonial) => {
  return testimonialCollection.doc(id).update(testimonial)
}

// accepts id => deletes
export const deleteTestimonial = id => {
  return testimonialCollection.doc(id).delete()
}

// composition hook, that will return a ref to an array of testimonials from the database
// to do this we add a listener(onSnapshot) on testimonialCollections so 
// it updates whenever a change is detected


export const useLoadTestimonials = () => {
  const testimonials = ref([])
  const close = testimonialCollection.onSnapshot(snapshot => {
    testimonials.value = snapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }))
  })
  // Creating this listener, will return us a clean-up function(onUnmounted, 
  // which we will call on the onUnmounted lifecycle(test with onUpdate)
  onUnmounted(close)
  return testimonials
}
