<template>
	<div class="container">
		<header class="bar bar-nav">
    	    <a class="button button-link button-nav pull-left" href="" data-transition='slide-out'>
    		    <span class="icon icon-left"></span>
    	    </a>
    	    <button class="button button-link button-nav pull-right" @click="goposition">上海<span class="icon icon-caret"></span></button>
    	    <div class="buttons-row">
	    		<a href="#now" class="tab-link button" v-bind:class="{'active': isNow}" v-on:click="changeStatus(0)">热映</a>
	    		<a href="#preview" class="tab-link button" v-bind:class="{'active': isPreview}" v-on:click="changeStatus(1)">待映</a>
	   			<a href="#cinema-list" class="tab-link button" v-bind:class="{'active': isCinema}" v-on:click="changeStatus(2)">影院</a>
  			</div>
        </header>
        <div class="content">
        	<div id="now" v-show="isNow" @click="gomoviedetail">
                <div class="list-block">
                    <ul>
                        <li class="item-content" v-for="item in presentMovies">
                            <img class="movie-poster" src="http://image.tianjimedia.com/uploadImages/2012/110/FJ2OSE1E4NE4.jpg">
                            <div class="item-main">
                                <ul>
                                    <li><b>{{ item.movieName }}</b><button class="button pull-right" v-if="item.showType">{{ item.showType }}</button></li>
                                    <li><rater :value.sync="item.score" slot="value" active-color="#FFB90F" disabled></rater> 7.0</li>
                                    <li>{{ item.actors }}</li>
                                    <li>{{ item.country }} {{ item.tags }} {{ item.duration }}分钟</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>   
            </div>
        	<div id="preview" v-show="isPreview" @click="gopremoviedetail">
                <div class="list-block">
                    <ul>
                        <li class="item-content" v-for="item in previewMovies">
                            <img class="movie-poster" src="http://image.tianjimedia.com/uploadImages/2012/110/FJ2OSE1E4NE4.jpg">
                            <div class="item-main">
                                <ul>
                                    <li><b>{{ item.movieName }}</b><button class="button pull-right" v-if="item.showType">{{ item.showType }}</button></li>
                                    <li><rater :value.sync="item.score" slot="value" active-color="#FFB90F" disabled></rater> 7.0</li>
                                    <li>{{ item.actors }}</li>
                                    <li>{{ item.country }} {{ item.tags }} {{ item.duration }}分钟</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>  
            </div>
        	<div id="cinema-list" v-show="isCinema">
                <div class="row cinema-selector">
                    <div class="col-50" @click="showcounty">
                        <div class="cinema-all">{{ area }}<span class="icon icon-caret"></span></div>
                    </div>
                    <div class="col-50">
                        <div class="cinema-all"><a href="#" class="open-popup">搜索<span class="icon icon-search"></span></a></div>
                    </div>
                </div>
                <div class="area-county" v-show="showCounty">
                    <div class="card city" v-for="county in counties">
                        <div class="card-content">
                            <div class="card-content-inner city-name">{{ county }}</div>
                        </div>
                    </div>
                </div>
                <div class="card-content cinema-detail" v-for="cinema in cinemas" @click="gocinemaschedule">
                    <div class="cinema-name"><b>{{ cinema.cinemaName }}</b></div>
                    <div class="cinema-supplier"><span class="cinema-supplier-detail">{{ cinema.supplierNum }}家服务</span></div>
                    <div class="cinema-addr">{{ cinema.addr }}</div>
                </div> 
                <div id="geo-position" v-show="isCinema">
                    <span class="icon icon-message"></span>
                    <span>{{ position }}</span>
                </div>
                
            </div>                         
        </div>
        <!-- Search Popup -->
        <div class="popup popup-search">
            <div class="content-block">
                <div class="searchbar row">
                    <div class="search-input col-80">
                        <label class="icon icon-search" for="search"></label>
                        <input type="search" id="search" placeholder="影院名称或地址关键字"/>
                    </div>
                    <a href="#" class="button button-fill button-primary col-20 close-popup">取消</a>
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
                area: '全部',
                counties: ['长宁', '虹口', '静安', '松江'],
                showCounty: false,
                presentMovies: [{
                    score: 3.5,
                    movieName: '伦敦陷落',
                    tags: '动作/惊悚',
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
                    tags: '动作/犯罪',
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
            },
            gomoviedetail: function() {
                this.$route.router.go({ path: '/moviedetail' });
            },
            gopremoviedetail: function() {
                this.$route.router.go({ path: '/premoviedetail' });
            },
            goposition: function() {
                this.$route.router.go({ path: '/city' });
            },
            gocinemaschedule: function() {
                this.$route.router.go({ path: '/cinemaschedule' });
            },
            showcounty: function() {
                console.log('showcounty: ' + this.showCounty);
                this.showCounty = true;
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
        width: 30%;
        height: 80%;
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
        height: 20%;
        float: left;
        margin-bottom: .3rem;
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