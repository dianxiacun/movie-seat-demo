!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxRater=e():t.vuxRater=e()}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var i=o[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={ready:function(){for(var t=0;t<this.max;t++)this.colors.push("#ccc");this.value&&this.handleClick(this.value-1,!0)},props:{max:{type:Number,"default":5},value:{type:Number,"default":0,twoWay:!0},disabled:{type:Boolean,"default":!1},star:{type:String,"default":"★"},activeColor:{type:String,"default":"#fc6"},margin:{type:Number,"default":2},fontSize:{type:Number,"default":25}},computed:{sliceValue:function(){var t=this.value.toString().split(".");return 1===t.length?[t[0],0]:t},cutIndex:function(){return 1*this.sliceValue[0]},cutPercent:function(){return 10*this.sliceValue[1]}},methods:{handleClick:function(t,e){if(!this.disabled||e){this.value=t+1;for(var o=0;o<this.max;o++)t>=o?this.colors.$set(o,this.activeColor):this.colors.$set(o,"#ccc")}}},data:function(){return{colors:[],cutIndex:-1,cutPercent:0}},watch:{value:function(t){this.handleClick(t-1)}}}},function(t,e){},function(t,e){t.exports="<div class=vux-rater> <a class=vux-rater-box v-for=\"i in max\" @click=handleClick(i) :class=\"{'is-active':value > i}\" :style=\"{color:colors[i],marginRight:margin+'px',fontSize: fontSize + 'px', width: fontSize + 'px', height: fontSize + 'px'}\"> <span class=vux-rater-inner>{{star}}<span class=vux-rater-outer :style=\"{color: activeColor, width: cutPercent + '%'}\" v-if=\"cutPercent > 0 && cutIndex === i\">{{star}}</span></span> </a> </div>"},function(t,e,o){var r,i;o(2),r=o(1),i=o(3),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});
