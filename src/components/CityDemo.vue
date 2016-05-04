<template>
	<header class="fixed">
	<div class="header">
		通讯录
	</div>
</header>
<div id="letter" ></div>
<div class="sort_box">
	<div class="sort_list">
      <div class="num_logo"></div>
		<div class="num_name">北京市</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">天津市</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">上海市</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">重庆市</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">安徽省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">福建省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">广东省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">广西省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">甘肃省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">贵州省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">湖北省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">湖南省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">河北省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">黑龙江</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">海南省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">河南省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">吉林省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">江苏省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">江西省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">辽宁省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">青海省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">四川省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">山东省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">陕西省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">山西省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">台湾</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">云南省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">浙江省</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">内蒙古</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">宁夏</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">西藏</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">新疆</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">香港</div>
	</div>
    <div class="sort_list">
		<div class="num_logo"></div>
		<div class="num_name">澳门</div>
	</div>
</div>
<div class="initials">
	<ul>
		<li><img src=""></li>
	</ul>
</div>
</template>

<script>
	
</script>

<style>
	header{
    width:100%;
    height: 45px;
    background: #ececea;
    border-bottom: 1px solid #ddd;
}
header.fixed{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
}
.header{
    margin:0 20px;
    text-align: center;
    color: #4e4a49;
    font-size: 1em;
    height: 45px;
    line-height: 45px;
    position: relative;
}
#letter{
    width: 100px;
    height: 100px;
    border-radius: 5px;
    font-size: 75px;
    color: #555;
    text-align: center;
    line-height: 100px;
    background: rgba(145,145,145,0.6);
    position: fixed;
    left: 50%;
    top: 50%;
    margin:-50px 0px 0px -50px;
    z-index: 99;
    display: none;
}
#letter img{
    width: 50px;
    height: 50px;
    float: left;
    margin:25px 0px 0px 25px;
}
.sort_box{
    width: 100%;
    padding-top: 45px;
    overflow: hidden;
}
.sort_list{
    padding:10px 60px 10px 80px;
    position: relative;
    height: 40px;
    line-height: 40px;
    border-bottom:1px solid #ddd;
}

.sort_list .num_logo{
    width: 50px;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    top: 5px;
    left: 20px;
}
.sort_list .num_logo img{
    width: 50px;
    height: 50px;
}
.sort_list .num_name{
    color: #000;
}

.sort_letter{
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    color:#787878;
    font-size: 14px;
    border-bottom:1px solid #ddd;
}
.initials{
    position: fixed;
    top: 47px;
    right: 0px;
    height: 100%;
    width: 15px;
    padding-right: 10px;
    text-align: center;
    font-size: 12px;
    z-index: 99;
    background: rgba(145,145,145,0);
}
.initials li img{
    width: 14px;
}
</style>