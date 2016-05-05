import Vue from 'vue'
import App from './App.vue'
import Seat from './components/Seat.vue'
import CinemaSchedule from './components/CinemaSchedule.vue'
import City from './components/City.vue'
import CityDemo from './components/CityDemo.vue'
import MovieDetail from './components/MovieDetail.vue'
import Movie from './components/Movie.vue'
import ConfirmOrder from './components/ConfirmOrder.vue'
import Payment from './components/Payment.vue'
// import './assets/js/iSlider-animate.js'

Vue.component('seat', Seat)
// Vue.component('vue-toast', VueToast)
Vue.component('cinema-schedule', CinemaSchedule)
Vue.component('city', City)
Vue.component('city-demo', CityDemo)
Vue.component('movie-detail', MovieDetail)
Vue.component('movie', Movie)
Vue.component('confirm-order', ConfirmOrder)
Vue.component('payment', Payment)
new Vue({
  el: 'body',
  components: { Seat, CinemaSchedule, City, CityDemo, MovieDetail, Movie, ConfirmOrder, Payment }
})

