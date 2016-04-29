<template>
	<div class="container">
		<header class="bar bar-nav">
    	  <a class="button button-link button-nav pull-left" href="" data-transition='slide-out'>
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
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				presentCity: '',
				historyCity: '',
				hotCity: '',
			}
		},
		ready: function() {
			this.presentCity = remote_ip_info['city'];
			// alert(city);
		}
	}
</script>