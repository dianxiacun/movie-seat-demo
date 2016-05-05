<template>
	<div class="container">
		<header class="bar bar-nav">
    	    <a class="button button-link button-nav pull-left" href="" data-transition='slide-out'>
    		    <span class="icon icon-left"></span>
    	    </a>
    	    <button class="button button-link button-nav pull-right">上海<span class="icon icon-caret"></span></button>
    	    <div class="buttons-row">
	    		<a href="#now" class="tab-link button" v-bind:class="{'active': isNow}" v-on:click="changeStatus(0)">热映</a>
	    		<a href="#preview" class="tab-link button" v-bind:class="{'active': isPreview}" v-on:click="changeStatus(1)">待映</a>
	   			<a href="#cinema-list" class="tab-link button" v-bind:class="{'active': isCinema}" v-on:click="changeStatus(2)">影院</a>
  			</div>
        </header>
        <div class="content">
        	<div id="now" v-show="isNow">
                <div class="list-block">
                    <ul>
                        <li class="item-content" v-for="item in presentMovies">
                            <div class="item-title"><img class="movie-poster" src="http://image.tianjimedia.com/uploadImages/2012/110/FJ2OSE1E4NE4.jpg"></div>
                            <div class="item-main">
                                <ul>
                                    <li class="movie-name"><b>{{ item.movieName }}</b><button class="button pull-right" v-if="item.showType">{{ item.showType }}</button></li>
                                    <li class="movie-score"><rater :value.sync="item.score" slot="value" active-color="#FFB90F" disabled></rater> 7.0</li>
                                    <li class="movie-actor">{{ item.actors }}</li>
                                    <li class="movie-detail-other">{{ item.country }} {{ item.tags }} {{ item.duration }}分钟</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>   
            </div>
        	<div id="preview" v-show="isPreview">
                <div class="list-block">
                    <ul>
                        <li class="item-content" v-for="item in previewMovies">
                            <div class="item-title"><img class="movie-poster" src="http://image.tianjimedia.com/uploadImages/2012/110/FJ2OSE1E4NE4.jpg"></div>
                            <div class="item-main">
                                <ul>
                                    <li class="movie-name"><b>{{ item.movieName }}</b><button class="button pull-right" v-if="item.showType">{{ item.showType }}</button></li>
                                    <li class="movie-score"><rater :value.sync="item.score" slot="value" active-color="#FFB90F" disabled></rater> 7.0</li>
                                    <li class="movie-actor">{{ item.actors }}</li>
                                    <li class="movie-detail-other">{{ item.country }} {{ item.tags }} {{ item.duration }}分钟</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>  
            </div>
        	<div id="cinema-list" v-show="isCinema">
                <div class="row cinema-selector">
                    <div class="col-50">
                        <div class="cinema-all">全部<span class="icon icon-caret"></span></div>
                    </div>
                    <div class="col-50">
                        <div class="cinema-all">搜索<span class="icon icon-search"></span></div>
                    </div>
                </div>
                <div class="card-content cinema-detail" v-for="cinema in cinemas">
                    <div class="cinema-name"><b>{{ cinema.cinemaName }}</b></div>
                    <div class="cinema-supplier"><span class="cinema-supplier-detail">{{ cinema.supplierNum }}家服务</span></div>
                    <div class="cinema-addr">{{ cinema.addr }}</div>
                </div>
                <div id="geo-position">
                   <span class="icon icon-message"></span>
                   <span>{{ position }}</span>
                </div>   
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
                isNow: true,
                isPreview: false,
                isCinema: false,
                position: '上海市虹口区花园路128号',
                presentMovies: [{
                    score: 3.5,
                    movieName: '伦敦陷落',
                    tags: '动作/惊悚/犯罪',
                    duration: 99,
                    showType: '3D',
                    actors: '杰拉德/摩根弗里曼/安吉拉',
                    poster: 'poster.png',
                    country: '美国'
                }, {
                    score: 3.5,
                    movieName: '火锅英雄',
                    tags: '剧情',
                    duration: 95,
                    showType: '3D',
                    actors: '陈坤/白百合/秦昊',
                    poster: 'poster.png',
                    country: '中国'
                }],
                previewMovies: [{
                    score: 2.8,
                    movieName: '熊猫',
                    tags: '动作/惊悚/犯罪',
                    duration: 99,
                    showType: '3D',
                    actors: '杰拉德/摩根弗里曼/安吉拉',
                    poster: 'poster.png',
                    country: '美国'
                }, {
                    score: 4.2,
                    movieName: '吃货',
                    tags: '剧情',
                    duration: 95,
                    showType: '3D',
                    actors: '陈坤/白百合/秦昊',
                    poster: 'poster.png',
                    country: '中国'
                }],
                cinemas: [{
                    cinemaName: '上海曲阳影都',
                    addr: '上海市虹口区曲阳路570号(近玉田路)',
                    supplierNum: 2,
                    distance: '1.3km',
                }, {
                    cinemaName: '上海四平电影院',
                    addr: '上海市杨浦区四平路901号',
                    supplierNum: 2,
                    distance: '2.1km',
                }]
            }
        },
        methods: {
            changeStatus: function(n) {
                if (parseInt(n) === 0) {
                    this.isNow = true;
                    this.isPreview = false;
                    this.isCinema = false;
                }
                if (parseInt(n) === 1) {
                    this.isPreview = true;
                    this.isNow = false;
                    this.isCinema = false;
                }
                if (parseInt(n) === 2) {
                    this.isCinema = true;
                    this.isNow = false;
                    this.isPreview = false;
                }
            }
        }
    }
</script>

<style>
    #now, #preview, #cinema-list {
        width: 100%;
        height: 100%;
    }
    .list-block {
        height: 50%;
    }
    .list-block ul {
        height: 90%;
    }
    .list-block li {
        height: 50%;
    }
    .item-title {
        height: 80%;
        width: 70%;
    }
    .movie-poster {
        width: 100%;
    }
    .item-main {
        white-space: nowrap;
        color: #5f646e;
        -webkit-flex-shrink: 0;
        -ms-flex: 0 0 auto;
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        margin-left: .25rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        height: 80%;
        width: 70%;
        border-bottom: 1px solid #eee;
    }
    .item-main li {
        width: 90%;
        margin-bottom: .3rem;
        height: 20%;
    }
    .movie-poster {

    }
    .cinema-selector {
        height: 6%;
        text-align: center;
    }
    .cinema-all {
        text-align: center;
    }
    .cinema-detail {
        height: 15%;
        background: #fff;
        border-top: 1px solid #eee;
    }
    .cinema-name {
        float: left;
        width: 80%;
        height: 50%;
        margin-top: 2%;
        font-size: 1rem;
        text-align: left;
    }
    .cinema-supplier {
        width: 20%;
        height: 50%;
        margin-top: 2%;
        float: right;
        text-align: center;
    }
    .cinema-supplier-detail {
        border: 1px solid green;
        border-radius: 5px;
        color: green;
    }
    #geo-position {
        position: fixed;
        background: white;
        text-align: center;
        bottom: 0;
        height: 5%;
        width: 100%;
    }
</style>