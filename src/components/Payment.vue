<template>
	<div class="container">
		<header class="bar bar-nav">
    	    <a class="button button-link button-nav pull-left" href="" data-transition='slide-out' @click="goback">
    		    <span class="icon icon-left"></span>
    	    </a>
    	    <h1 class="title">付款</h1>
        </header>
    </div>
    <div class="content">
    	<div class="payment-detail">
    		<div class="payment-movie-detail">
    			<div class="movie-name"><b>{{ movieName }}</b></div>
    			<div class="payment-total"><b>订单金额 <span class="payment-num">¥{{ total }}</span></b></div>
    		</div>
    		<div class="payment-timer">
    			<div class="payment-timer-detail">付款剩余   {{ timer }}</div>
    		</div>
    	</div>
    	<div class="payment-method">
    		<ul>
				<li>  
    			    <label class="label-checkbox item-content">    			        
    			        <div class="item-inner">
    			            <div class="item-subtitle"><span class="icon icon-emoji"></span></div>
    			            <div class="item-text"><b>余额</b>       <span class="item-balance">当前余额{{ balance }}元</span></div>
    			            
    			        </div>
    			        <input type="radio" name="my-radio">
    			        <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
    			    </label>
			    </li>
			    <li>
			        <label class="label-checkbox item-content">			        	
			        	<div class="item-inner">
			          		<div class="item-subtitle"><span class="icon icon-emoji"></span></div>
			          		<div class="item-text"><b>支付宝</b></div>
			        	</div>
			        	<input type="radio" name="my-radio">
			        	<div class="item-media"><i class="icon icon-form-checkbox"></i></div>
			        </label>
			    </li>
			    <li>
			        <label class="label-checkbox item-content">			        	
			        	<div class="item-inner">
			          		<div class="item-subtitle"><span class="icon icon-emoji"></span></div>
			          		<div class="item-text"><b>微信支付</b></div>
			        	</div>
			        	<input type="radio" name="my-radio">
			        	<div class="item-media"><i class="icon icon-form-checkbox"></i></div>
			        </label>
			    </li>
			</ul>
    	</div>
    	<div class="payment-block">
    		<div class="payment-button">立即付款</div>
    	</div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				movieName: '美国队长',
				total: 43,
				balance: 1.2,
				timer: '10:28',
				time: 68,
				interval: null,
				index: 0
			}
		},
		ready() {
			if (this.time > 0) {
				this.tick();
			}
		},
		methods: {
			goback: function() {
				this.$route.router.go(window.history.back());
			},
			tick: function() {
				let _this = this;
				this.interval = setInterval(function() {
					let min = 0;
					let sec = 0;
					if (_this.time > 0) {
						min = parseInt(_this.time/60);
						sec = _this.time%60;
						if (min < 10) {
							min = '0' + min;
						}
						if (sec < 10) {
							sec = '0' + sec;
						}
						_this.timer = min + ':' + sec; 
						_this.time--;
					} else {
						_this.stop();
						_this.timer = '00:00';
						_this.index++;
						_this.$dispatch('on-finish', _this.index);
					}
				}, 1000);
			},
			stop: function() {
				clearInterval(this.interval);
			}
		},
		watch: {
			start: function(newVal, oldVal) {
				if (newVal === true && oldVal === false && this.time > 0) {
					this.tick();
				}
				if (newVal === false && oldVal === true) {
					this.stop();
				}
			}
		}
	}
</script>

<style>
	.payment-detail {
		width: 100%;
		height: 25%;
		margin-top: 2.2rem;
		font-size: 1.1rem;
		background: #f7f7f8;
		border-bottom: 4px dotted #bbb;
	}
	.payment-movie-detail {
		width: 100%;
		height: 60%;
	}
	.movie-name {
		width: 90%;
		height: 50%;
		margin-left: 5%;
	}
	.payment-total {
		width: 90%;
		height: 50%;
		margin-left: 5%;
		border-bottom: 1px dashed #bbb;
	}
	.payment-num {
		color: #d86363;
	}
	.payment-timer {
		width: 100%;
		height: 40%;
	}
	.payment-timer-detail {
		width: 50%;
		height: 50%;
		float: right;
		margin-top: 6%;
	}
	.payment-method {
		width: 100%;
		height: 35%;
		font-size: 1.1rem;
		background: #f7f7f8;
	}
	.payment-method ul {
		width: 100%;
		height: 100%;
		list-style: none;
	}
	.payment-method li {
		width: 90%;
		height: 33.3%;
		line-height: 320%;
		border-bottom: 1px solid #eee;
	}
	.item-inner {
		width: 90%;
		float: left;
	}
	.item-subtitle {
		float: left;
		width: 15%;
	}
	.item-subtitle, .item-text {
		float: left;
	}
	.item-balance {
		font-size: .9rem;
		color: #777;
	}
	.payment-block {
		width: 100%;
		height: 10%;
		margin-top: 5%;
		text-align: center;
	}
	.payment-button {
		height: 100%;
		width: 90%;
		margin-left: auto;
		margin-right: auto;
		font-size: 1.5rem;
		line-height: 3.5rem;
		color: #fff;
		border-radius: 10px;
		background: orange;
	}
</style>

