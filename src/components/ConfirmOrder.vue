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
        	<div class="content-block order-content">
                <div class="order-detail">
                    <ul>
                        <li class="order-movie-name"><b>{{ movieName }}</b></li>
                        <li class="order-cinema-name">{{ cinemaName }}</li>
                        <li class="order-show-detail">{{ date }} {{ startTime }} {{ showType }} {{showHall}}</li>
                        <li class="order-seat">{{ seat }}</li>
                    </ul>
                </div>
                <div class="order-poster"><div class="order-poster-block"></div></div>                        
            </div>
            <div class="list-block phone-detail">
			    <ul>
			        <li class="item-content">
  			            <div class="item-media"></div>
  			            <div class="item-inner">
  			          		<div class="item-title phone-title">手机号</div>
  			          		<div class="item-after phone-num"><div class="phone-num-detail">{{ phone }} </div><div class="phone-card"><i class="icon icon-card"></i></div></div>
  			        	</div>
  			        </li>
			    </ul>
			</div>            
            <div class="list-block coupon-detail">
			    <ul>
			        <li class="item-content item-link">
  			            <div class="item-media"><i class="icon icon-f7"></i></div>
  			            <div class="item-inner">
  			          		<div class="item-title">优惠券</div>
  			          		<div class="item-after">{{ coupon }}张可用</div>
  			        	</div>
  			        </li>
			    </ul>
			</div>
            <div class="list-block ticket-detail">
			    <ul>
			    	<li class="item-content">
  			            <div class="item-media"></div>
  			            <div class="item-inner">
  			            	<div class="item-title phone-title"><b>{{ supplier }}出票</b></div>
  			        	</div>
  			        </li>
			        <li class="item-content">
  			            <div class="item-media"></div>
  			            <div class="item-inner">
  			          		<div class="item-title phone-title">票数</div>
  			          		<div class="item-after phone-num">
  			          			<div class="ticket-num-detail">{{ ticketNum }}</div>
  			          			<div class="phone-card">¥{{ price }}</div>
  			          		</div>
  			        	</div>
  			        </li>
  			        <li class="item-content">
  			            <div class="item-media"></div>
  			            <div class="item-inner">
  			          		<div class="item-title phone-title">优惠减免</div>
  			          		<div class="item-after phone-num">
  			          			<div class="ticket-num-detail"></div>
  			          			<div class="phone-card">¥{{ total }}</div>
  			          		</div>
  			        	</div>
  			        </li>
			    </ul>
			</div>
			<div class="order-tip">
				<div class="order-tip-content">请核对订单信息，电影票售出后不可退换哦~</div>
			</div>
			<div class="order-submit-detail">
				<div class="order-total-price">
					<div class="total-price-num">¥{{ total }}</div>
				</div>
				<div class="order-submit"><div class="submit-button">立即下单</div></div>
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
				showHall: '9号厅dsfwefwefwefwef',
				seat: '6排5号',
				poster: '',
				phone: '138 8888 8888',
				coupon: '0',
				supplier: '蜘蛛网',
				ticketNum: 1,
				price: 40.0,
				total: 40.0,
				discount: 5.0
			}
		}
	}
</script>

<style>
    .order-content {
    	margin-top: 0;
    	margin-bottom: 0;
    	width: 100%;
    	height: 30%;
    	background: #fff;
    	border-bottom: 5px dashed #ddd;
    }
	.order-detail {
		width: 70%;
		float: left;
	}
	.order-detail ul {
		width: 100%;
		list-style: none;
		display: inline;
	}
	.order-detail li {
		height: 1rem;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.poster-block {
		width: 30%;
		float: right;
	}
	.order-poster {
		width: 30%;
		height: 100%;
		float: right;
	}
	.order-poster-block {
		width: 100%;
		height: 95%;
		margin-top: 10%;
		background: url(http://i3.sinaimg.cn/ent/v/u/2011-11-04/U4099P28T3D3470245F326DT20111104151235.jpg) no-repeat;
		background-size: 100% auto;
	}
	.phone-detail {
		margin: .8rem 0;
		height: 8%;
	}
	.phone-title {
		width: 40%;
	}
	.phone-num {
		width: 60%;
		float: left;
	}
	.phone-num-detail {
		width: 80%;
		float: left;
		border-right: 1px solid #eee;
	}
	.phone-card {
		width: 20%;
		float: right;
	}
	.coupon-detail {
		margin: .8rem 0;
		height: 8%;
	}
	.ticket-detail {
		margin: .8rem 0;
		height: 26%;
	}
	.ticket-detail li {
		height: 1rem;
	}
	.ticket-num-detail {
		width: 80%;
		float: left;
	}
	.order-tip {
		width: 100%;
		height: 8%;
		margin-top: .8rem;
		text-align: center;
	}
	.order-tip-content {
		font-size: .8rem;
	}
	.order-submit-detail {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 10%;
	}
	.order-total-price {
		width: 70%;
		height: 100%;
		background: #fff;
		font-size: 1.2rem;
		color: orange;
		float: left;
	}
	.total-price-num {
		height: 50%;
		width: 15%;
		margin-top: 6%;
		margin-left: 3%;
	}
	.order-submit {
		width: 30%;
		height: 100%;
		float: right;
		font-size: 1.2rem;
		color: #fff;
		background: orange;
		text-align: center;
	}
	.submit-button {
		height: 50%;
		width: 100%;
		margin-top: 14%;
	}

</style>