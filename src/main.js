import Vue from 'vue'
import App from './App.vue'
import Seat from './components/Seat.vue'
import VueToast from 'vue-toast'
import CinemaSchedule from './components/CinemaSchedule.vue'
// import './assets/js/iSlider-animate.js'

Vue.component('seat', Seat)
Vue.component('vue-toast', VueToast)
Vue.component('cinema-schedule', CinemaSchedule)
new Vue({
  el: 'body',
  components: { Seat, VueToast, CinemaSchedule }
})
