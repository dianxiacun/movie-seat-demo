<template>
	<div class="container">
		<header class="bar bar-nav">
    	  <a class="button button-link button-nav pull-left" href="" data-transition='slide-out' @click="goback">
    		  <span class="icon icon-left"></span>
    	  </a>
    	  <h1 class="title">选择城市</h1>
        </header>
        <div class="content">
        	<div class="bar">
			    <div class="searchbar">
			        <a class="searchbar-cancel">取消</a>
			        <div class="search-input">
			          <label class="icon icon-search" for="search"></label>
			          <input type="search" id='search' placeholder='输入城市或者行政区'/>
			        </div>
			    </div>
			</div>
			<div id="location" class="content-block-title">定位</div>
			<div class="card city">
				<div class="card-content">
					<div class="card-content-inner city-name">{{ presentCity }}</div>
				</div>
			</div>
			<div id="history" class="content-block-title">历史</div>
			<div class="card city">
				<div class="card-content">
					<div class="card-content-inner city-name">{{ historyCity }}</div>
				</div>
			</div>
			<div id="hot" class="content-block-title">热门</div>
			<div class="card city" v-for="city in hotCities">
				<div class="card-content">
					<div class="card-content-inner city-name">{{ city }}</div>
				</div>
			</div>
			<div id="b-city" class="content-block-title letter-anchor"><font>B</font></div>
			<div class="card city" v-for="bcity in bCities">
				<div class="card-content">
					<div class="card-content-inner city-name">{{ bcity }}</div>
				</div>
			</div>
			<div id="c-city" class="content-block-title letter-anchor">C</div>
			<div class="card city" v-for="ccity in cCities">
				<div class="card-content">
					<div class="card-content-inner city-name">{{ ccity }}</div>
				</div>
			</div>
			<div id="d-city" class="content-block-title letter-anchor">D</div>
			<div class="card city" v-for="dcity in dCities">
				<div class="card-content">
					<div class="card-content-inner city-name">{{ dcity }}</div>
				</div>
			</div>
        </div>        
    </div>
    <div id="menu">
	   	<ul>
	   	    <li><a href="#location">定位</a></li>
	   	    <li><a href="#history">历史</a></li>
	   	    <li><a href="#hot">热门</a></li>
	   	    <li><a href="#b-city">B</a></li>
	   	    <li><a href="#c-city">C</a></li>
	   	    <li><a href="#d-city">D</a></li>
	   	</ul>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				presentCity: '上海',
				historyCity: '南京',
				hotCities: ['上海', '北京', '广州', '南京', '厦门', '三亚'],
				cities: ['上海', '北京', '广州', '南京', '武汉', '福州'],
				bCities: ['北京', '包头'],
				cCities: ['长春', '长沙'],
				dCities: ['大连', '大理']
			}
		},
		created() {
			$.showPreloader();
		    setTimeout(function () {
		        $.hidePreloader();
		    }, 300);
		},
		ready: function() {
			this.presentCity = remote_ip_info['city'];
			// alert(city);
		},
		methods: {
			goback: function() {
				this.$route.router.go(window.history.back());
			}
		}
	}
</script>

<style>
.content-block-title {
	clear: both;
}
#location {
	margin-top: 17%; 
}
.city {
	width: 25%;
	float: left;
}
.city-name {
	text-align: center;
}
.letter-anchor {
	font-color: orange;
}
#menu { 
	position: fixed;
	top: 25%;
	right: 2%;
	width: 20%;
}
#menu ul {
	list-style: none;
}
#menu li a { 
	display: block;
	font-size: .5em;
	font-weight: bold;
	color: orange;
	text-align: center;
}
#menu ul li a:hover,
#menu ul li a .current {
    color: #fff; background: #0088bb;
}
</style>