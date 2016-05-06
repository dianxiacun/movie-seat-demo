import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './App.vue'
import Seat from './components/Seat.vue'
import CinemaSchedule from './components/CinemaSchedule.vue'
import City from './components/City.vue'
import CityDemo from './components/CityDemo.vue'
import MovieDetail from './components/MovieDetail.vue'
import PreMovieDetail from './components/PreMovieDetail.vue'
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
Vue.component('pre-movie-detail', PreMovieDetail)
Vue.component('movie', Movie)
Vue.component('confirm-order', ConfirmOrder)
Vue.component('payment', Payment)

Vue.use(VueRouter)
var router = new VueRouter({
	hashbang: true,
	history: true,
	saveScrollPosition: true,
	suppressTransitionError: true
})

router.map({
'*': {
  component: Movie
},
'/': {
  component: Movie
},
'/moviedetail': {
  component: MovieDetail
},
'/premoviedetail': {
  component: PreMovieDetail
},
'/cinemaschedule': {
  component: CinemaSchedule
},
'/city': {
  component: City
},
'/order': {
  component: ConfirmOrder
},
'/payment': {
  component: Payment
},
'/seat': {
  component: Seat
}
})

var App = Vue.extend({})

router.start(App, '#app')

// new Vue({
//   el: 'body',
//   components: { Seat, CinemaSchedule, City, CityDemo, MovieDetail, Movie, ConfirmOrder, Payment }
// })

