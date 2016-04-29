<template>
	<div class="container">
		<header class="bar bar-nav">
    	  <a class="button button-link button-nav pull-left" href="" data-transition='slide-out'>
    		  <span class="icon icon-left"></span>
    	  </a>
    	  <h1 class="title">{{ cinemaName }}</h1>
        </header>
        <div class="content home">
        	<bar class="home-bar">
        		<div class="cinema-info">{{ cinemaName }}</div>
        		<div class="cinema-info">{{ cinemaAddr }}</div>
        	</bar>
        	<slider :banner="banner"></slider>
        	<bar class="home-bar">
        		<div class="movie-name"><span>{{ movieName }}</span></div>
        		<div class="movie-tag"><span>{{ tags }}</span></div>
        	</bar>
        	<div class="show-time">
        		<div class="show-time-date">
	        		<div class="show-date" v-on:click="select(1)" v-bind:style="isSelected === 1 ? selectStyle : defaultStyle">{{ moviesInfo[0].schedule[0].date }}</div>
	        		<div class="show-date" v-on:click="select(2)" v-bind:style="isSelected === 2 ? selectStyle : defaultStyle">{{ moviesInfo[0].schedule[1].date }}</div>
	        		<div class="show-date" v-on:click="select(3)" v-bind:style="isSelected === 3? selectStyle : defaultStyle">{{ moviesInfo[0].schedule[1].date }}</div>
        		</div>
        	</div>
        	<bar class="schedule-bar">
        		<div class="show-schedule" v-for="item in moviesInfo[0].schedule[0].shows">
        			<div class="row">
        				<div class="col-33">{{ item.startTime }}</div>
        				<div class="col-33">{{ item.hallType }}</div>
        				<div class="col-33">{{ item.price }}</div>
        			</div>
        			<div class="row">
        				<div class="col-33">{{ item.showTime }}散场</div>
        				<div class="col-33">{{ item.hallType }}</div>
        				<div class="col-33">{{ item.price }}</div>
        			</div>
        		</div>
        	</bar>
        </div>
	</div>
</template>

<script>
import Slider from './Slider.vue'
import Bar from './Bar.vue'

export default {
	data() {
		return {
			cinemaName: '金逸国际影城-虹口龙之梦IMAX店',
			cinemaAddr: '上海市虹口区西江湾路388号凯德龙之梦B座6F-7F',
			movieName: '奇幻森林',
			tags: '剧情/奇幻/冒险',
			defaultStyle: 'background-color:white',
			selectStyle: 'background-color:#ed8e07',
			isSelected: 1,
			moviesInfo: [{
				movieId: 1001,
				poster: 'img001',
				movieName: '奇幻森林',
				tags: ['剧情', '奇幻','冒险'],
				schedule: [{
					date: '2016-04-28',
					shows: [{
						startTime: '10:00',
						endTime: '11:46',
						hallType: '3D',
						hallName: '9号厅',
						price: 48,
						suppliers: [{
							supplier: '蜘蛛网',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 120,
							presentPrice: 48
						},
						{
							supplier: '抠电影',
							supplierLogo: 'path/logo_koco.png',
							originalPrice: 120,
							presentPrice: 48
						}]
					},
					{
						startTime: '11:00',
						endTime: '12:46',
						hallType: 'IMAX3D',
						hallName: '5号IMAX厅',
						price: 73,
						suppliers: [{
							supplier: '蜘蛛网',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 120,
							presentPrice: 73
						},
						{
							supplier: '抠电影',
							supplierLogo: 'path/logo_koco.png',
							originalPrice: 120,
							presentPrice: 73
						}]
					}]
				},
				{
					date: '2016-04-29',
					shows: [{
						startTime: '10:00',
						endTime: '11:46',
						hallType: '3D',
						hallName: '8号厅',
						price: 49,
						suppliers: [{
							supplier: '蜘蛛网',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 121,
							presentPrice: 49
						},
						{
							supplier: '抠电影',
							supplierLogo: 'path/logo_koco.png',
							originalPrice: 121,
							presentPrice: 49
						}]
					},
					{
						startTime: '11:00',
						endTime: '12:46',
						hallType: 'IMAX3D',
						hallName: '6号IMAX厅',
						price: 73,
						suppliers: [{
							supplier: '蜘蛛网',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 121,
							presentPrice: 74
						},
						{
							supplier: '抠电影',
							supplierLogo: 'path/logo_koco.png',
							originalPrice: 121,
							presentPrice: 74
						}]
					}]
				}]
			},
			{
				movieId: 1002,
				poster: 'img002',
				movieName: '疯狂动物城',
				tags: ['动画', '奇幻'],
				schedule: [{
					date: '2016-04-28',
					shows: [{
						startTime: '9:00',
						endTime: '10:46',
						hallType: '3D',
						hallName: '9号厅',
						price: 48,
						suppliers: [{
							supplier: '蜘蛛网',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 120,
							presentPrice: 48
						},
						{
							supplier: '抠电影',
							supplierLogo: 'path/logo_koco.png',
							originalPrice: 120,
							presentPrice: 48
						}]
					},
					{
						startTime: '10:00',
						endTime: '11:46',
						hallType: 'IMAX3D',
						hallName: '5号IMAX厅',
						price: 73,
						suppliers: [{
							supplier: '蜘蛛网',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 120,
							presentPrice: 73
						},
						{
							supplier: '抠电影',
							supplierLogo: 'path/logo_koco.png',
							originalPrice: 120,
							presentPrice: 73
						}]
					}]
				},
				{
					date: '2016-04-29',
					shows: [{
						startTime: '10:00',
						endTime: '11:46',
						hallType: '3D',
						hallName: '2号厅',
						price: 49,
						suppliers: [{
							supplier: '蜘蛛网',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 121,
							presentPrice: 49
						},
						{
							supplier: '抠电影',
							supplierLogo: 'path/logo_koco.png',
							originalPrice: 121,
							presentPrice: 49
						}]
					},
					{
						startTime: '11:00',
						endTime: '12:46',
						hallType: 'IMAX3D',
						hallName: '3号IMAX厅',
						price: 73,
						suppliers: [{
							supplier: '蜘蛛网',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 121,
							presentPrice: 74
						},
						{
							supplier: '抠电影',
							supplierLogo: 'path/logo_koco.png',
							originalPrice: 121,
							presentPrice: 74
						}]
					}]
				}]
			}]
		}
	},
	methods: {
		select: function(n) {
			this.isSelected = parseInt(n);
		}
	},
	computed: {

	},
	components: {
		Slider,
		Bar
	}
}
</script>

<style>
.container {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
.home {
	top: 2.2rem !important;
}
.home-bar {
	background: #f7f7f8;
	height: 2.8rem;
	position: relative;
	box-shadow: 0 .01rem .05rem rgba(0,0,0,.3);
}
.cinema-info {
	position: relative;
	height: 1.4rem;
	margin-left: .5rem;
	overflow: hidden;
}
.movie-name {
	position: relative;
	width: 100%;
	height: 1.4rem;
	font: bold;
	font-size: 1.0rem;
	text-align: center;
	display: block;
}
.movie-tag {
	position: relative;
	width: 100%;
	height: 1.4rem;
	font-size: .85rem;
	text-align: center;
	overflow: auto;
	display: block;
}
.show-time {
	position: relative;
	width: 100%;
	height: 2.0rem;
	margin-top: auto;
	margin-bottom: auto;
	overflow-x: scroll;
	display: inline-block;
}
.show-time-date {
	width: 100%;
	height: 100%;
	margin-top: .2rem;
	margin-bottom: auto;
}
.show-date {
  display: inline-block;
  width: 30%;
  height: 1.8rem;
  border-radius: 8px;
  text-align: center;
  line-height: 1.8rem;
  color: #000;
  font-size: .9rem;
  background-color: #ed8e07;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 3%;
  float: left;
}
.schedule-bar{
	background: #f7f7f8;
	position: relative;
	min-height: 13.6rem;
	overflow: visible;
}
</style>