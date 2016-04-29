import Vue from 'vue'
import App from './App.vue'
import Seat from './components/Seat.vue'
import VueToast from 'vue-toast'
import CinemaSchedule from './components/CinemaSchedule.vue'
import City from './components/City.vue'
// import './assets/js/iSlider-animate.js'

Vue.component('seat', Seat)
Vue.component('vue-toast', VueToast)
Vue.component('cinema-schedule', CinemaSchedule)
Vue.component('city', City)
new Vue({
  el: 'body',
  components: { Seat, VueToast, CinemaSchedule, City }
})
