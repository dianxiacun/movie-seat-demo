<template>
	<div class="container">
		<header class="bar bar-nav">
    	  <a class="button button-link button-nav pull-left" href="" data-transition='slide-out' @click="goback">
    		  <span class="icon icon-left"></span>
    	  </a>
    	  <h1 class="title">{{ cinemaName }}</h1>
        </header>
        <div class="content home">
        	<bar class="home-bar">
        		<div class="cinema-info">{{ cinemaName }}</div>
        		<div class="cinema-info">{{ cinemaAddr }}</div>
        	</bar>
        	<slider></slider>
        	<bar class="home-bar">
        		<div class="movie-name"><span>{{ movieName[posternum] }}</span></div>
        		<div class="movie-tag"><span>{{ tags[posternum] }}</span></div>
        	</bar>
        	<div class="show-time">
        		<div class="show-time-date">
        			<div class="show-date" v-for="item in moviesInfo[posternum].schedule" @click="select($index)" v-bind:style="isSelected === $index ? selectStyle : defaultStyle">{{ moviesInfo[posternum].schedule[$index].date }}</div>
        		</div>
        	</div>
        	<bar class="schedule-bar">
        		<div class="show-schedule" v-for="item in moviesInfo[posternum].schedule[posternum].shows" v-on:click="showSuppliers($index + 1, item.suppliers.length)">
        			<div class="row show-detail">
        				<div class="col-33"><b>{{ item.startTime }}</b></div>
        				<div class="col-33"><b>{{ item.hallType }}</b></div>
        				<div class="col-33 show-detail-right show-detail-price"><b>¥ {{ item.price }}</b></div>
        			</div>
        			<div class="row show-detail">
        				<div class="col-33 show-detail-light">{{ item.endTime }}散场</div>
        				<div class="col-33 show-detail-light">{{ item.hallName }}</div>
        				<div class="col-33 show-detail-light show-detail-right" v-if="item.suppliers.length > 1"><span class="show-detail-supplier">{{ item.suppliers.length }}家服务</span></div>
        			</div>
        			<div class="supplier-container">
	        			<div class="row supplier-detail" v-if="($index + 1) == showIndex" transition="expand" v-for="sItem in item.suppliers" @click="goseat">
	        				<div class="col-50">
	        					<div class="col-50 supplier-logo">{{ sItem.supplierLogo }}</div>
	        					<div class="col-50 supplier-name">{{ sItem.supplier}}</div>
	        				</div>
	        				<div class="col-50">
	        					<div class="col-50 original-price">{{ sItem.originalPrice }}</div>
	        					<div class="col-50 present-price">{{ sItem.presentPrice }}</div>
	        				</div>
	        			</div>
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
			posternum: 0,
			cinemaName: '金逸国际影城-虹口龙之梦IMAX店',
			cinemaAddr: '上海市虹口区西江湾路388号凯德龙之梦B座6F-7F',
			movieName: ['奇幻森林', '美国队长'],
			tags: ['剧情/奇幻/冒险', '动作/剧情'],
			defaultStyle: 'background-color:white',
			selectStyle: 'background-color:#ed8e07',
			isSelected: 0,
			showIndex: 0,
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
							supplier: '蜘蛛网a111',
							supplierLogo: 'spider.png',
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
							supplier: '蜘蛛网a121',
							supplierLogo: 'spider.png',
							originalPrice: 120,
							presentPrice: 73
						},
						{
							supplier: '抠电影a122',
							supplierLogo: 'koco.png',
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
							supplier: '蜘蛛网a211',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 121,
							presentPrice: 49
						},
						{
							supplier: '抠电影a212',
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
							supplier: '抠电影a221',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 121,
							presentPrice: 74
						},
						{
							supplier: '蜘蛛网a222',
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
					date: '2016-04-29',
					shows: [{
						startTime: '9:00',
						endTime: '10:46',
						hallType: '3D',
						hallName: '9号厅',
						price: 48,
						suppliers: [{
							supplier: '蜘蛛网b111',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 120,
							presentPrice: 48
						},
						{
							supplier: '抠电影b112',
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
							supplier: '蜘蛛网b121',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 120,
							presentPrice: 73
						},
						{
							supplier: '抠电影b122',
							supplierLogo: 'path/logo_koco.png',
							originalPrice: 120,
							presentPrice: 73
						}]
					}]
				},
				{
					date: '2016-04-30',
					shows: [{
						startTime: '10:00',
						endTime: '11:46',
						hallType: '3D',
						hallName: '2号厅',
						price: 49,
						suppliers: [{
							supplier: '蜘蛛网b211',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 121,
							presentPrice: 49
						},
						{
							supplier: '抠电影b212',
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
							supplier: '蜘蛛网b221',
							supplierLogo: 'path/logo_spider.png',
							originalPrice: 121,
							presentPrice: 74
						},
						{
							supplier: '抠电影b222',
							supplierLogo: 'path/logo_koco.png',
							originalPrice: 121,
							presentPrice: 74
						}]
					}]
				}]
			}]
		}
	},
	created() {
		$.showPreloader();
		setTimeout(function () {
		    $.hidePreloader();
		}, 300);
	},
	methods: {
		select: function(n) {
			this.isSelected = parseInt(n);
			this.showIndex = 0;
		},
		showSuppliers: function(index, supplierNum) {
			if ((parseInt(index) !== this.showIndex) && (parseInt(supplierNum) > 1)) {
				this.showIndex = parseInt(index);
			} else {
				this.showIndex = 0;
			}
		},
		changeImgNum: function() {
			if (this.imgNum == false) {
				this.imgNum = true;
			} else {
				this.imgNum = false;
			}
		},
		goback: function() {
			this.$route.router.go(window.history.back());
		},
		goseat: function() {
			this.$route.router.go({ path: '/seat' });
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
.show-schedule {
	height: 3rem;
	border-bottom: 1px solid #eee;
}
.show-detail {
	margin-left: 1%;
}
.show-detail-right {
	text-align: center;
}
.show-detail-light {
	color: grey;
	font-size: .8rem;
}
.show-detail-price {
	color: #ed8e07;
}
.show-detail-supplier {
	color: #3ad8bb;
	border: 1px solid;
	border-radius: 5px;
}
.expand-transition {
	transition: all .3s ease;
	background-color: #f7f7f8;
	display: block; 
	overflow: hidden;
}
.expand-enter,.expand-leave {
	height: 0;
	opacity: 0;
}
.supplier-container {
	background-color: #f7f7f8;
	display: block; 
}
.supplier-detail {
	background-color: #f7f7f8;
	display: block;
}
.supplier-logo {
	float: left;
}
.supplier-name {
	float: left;
}
.original-price {
	float: left;
}
.present-price {
	float: left;
}
</style>