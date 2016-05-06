<template>
	<div class="container">
		<header class="bar bar-nav">
    	  <a class="button button-link button-nav pull-left" href="" data-transition='slide-out' @click="goback">
    		  <span class="icon icon-left"></span>
    	  </a>
    	  <h1 class="title">电影详情</h1>
        </header>
        <div class="content">
        	<div class="movie-detail-header">
        		<img class="movie-detail-poster" src="http://image.tianjimedia.com/uploadImages/2012/110/FJ2OSE1E4NE4.jpg">
        		<div class="movie-detail-main">
        			<ul>
        			    <li><b>{{ movieName }}</b></li>
        			    <li><rater :value.sync="score" slot="value" active-color="#FFB90F" disabled></rater> 7.0</li>
        			    <li>{{ tags }}</li>
        			    <li>{{ showTime }}上映</li>
        			    <li>{{ showType }}</li>
        			</ul>
        		</div>
        	</div>
        	<div class="movie-detail-other">
        		<div class="movie-director"><b>导演: </b>{{ director }}</div>
        		<div class="movie-actors"><b>主演: </b>{{ actors }}</div>
        		<div class="movie-plot"><b>剧情: </b><br/>{{ plot }}</div>
        	</div>
        </div>
    </div>    
</template>

<script>
	import Rater from './rater'

	export default {
		components: {
			Rater
		},
		data() {
			return {
				score: 3.5,
				movieName: '伦敦陷落',
				tags: '动作/惊悚/犯罪',
				showTime: '2016-04-08',
				showType: '2D,3D',
				director: '巴巴克',
				actors: '杰拉德/摩根弗里曼/安吉拉',
				plot: '是否为市委时候覅我饿哦个任务读书氛围hi给我饿哦日是为给我'
			}
		},
		created() {
			$.showPreloader();
		    setTimeout(function () {
		        $.hidePreloader();
		    }, 300);
		},
		methods: {
			goback: function() {
				this.$route.router.go(window.history.back());
			}
		}
	}
</script>

<style>
	@import './rater/style.css';

	.movie-detail-header {
		width: 100%;
		height: 40%;
		background-image: url(http://image.tianjimedia.com/uploadImages/2012/110/FJ2OSE1E4NE4.jpg);
/*		-webkit-filter: blur(20px);
    	filter: url('/media/blur.svg#blur');*/
	}
	.movie-detail-poster {
		width: 40%;
		height: 90%;
		margin-left: 1.2rem; 
		margin-right: 0.5rem; 
		float: left;
	}
	.movie-detail-main {
	}
	.movie-detail-main ul{
		list-style: none;
	}
	.movie-detail-main ul li {
		margin-bottom: .5rem;
	}
	.movie-detail-other {
		width: 100%;
		height: 45%;
	}
	.movie-director {
		margin-top: .5rem;
		margin-left: 1rem;
	}
	.movie-actors {
		margin-top: .5rem;
		margin-left: 1rem;
	}
	.movie-plot {
		margin-top: .5rem;
		margin-left: 1rem;
	}
</style>