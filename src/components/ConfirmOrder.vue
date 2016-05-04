<template>
	<div class="container">
		<header class="bar bar-nav">
    	    <a class="button button-link button-nav pull-left" href="" data-transition='slide-out'>
    		    <span class="icon icon-left"></span>
    	    </a>
    	    <button class="button button-link button-nav pull-right">取消</button>
    	    <h1 class="title">确认订单</h1>
        </header>
        <div class="content">
        	<div class="content-block">
                <div class="order-detail">
                    <ul>
                        <li class="movie-name"><b>{{ movieName }}</b></li>
                        <li class="cinema-name">{{ cinemaName }}</li>
                        <li class="show-detail">{{ date }} {{ startTime }} {{ showType }} {{showHall}}</li>
                        <li class="seat">{{ seat }}</li>
                    </ul>
                </div>
                <div class="poster-block"><img class="movie-poster" src="http://image.tianjimedia.com/uploadImages/2012/110/FJ2OSE1E4NE4.jpg"></div>                        
            </div>
        </div>
    </div>
</template>

<script>

	export default {
		data() {
			return {
				movieName: '美国队长',
				cinemaName: '上海曲阳影都',
				date: '明天 05月06日',
				startTime: '10:30',
				showType: '3D',
				showHall: '9号厅',
				seat: '6排5号',
				poster: '',
				phone: '138 8888 8888',
				coupon: '0',
				supplier: '蜘蛛网',
				ticketNum: 1,
				price: 40,
				discount: 5
			}
		}
	}
</script>

<style>
	.order-detail {
		width: 70%;
		float: left;
	}
	.order-detail ul {
		list-style: none;
	}
	.poster-block {
		width: 30%;
	}
</style>