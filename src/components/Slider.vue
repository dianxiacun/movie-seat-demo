<template>
  <div id="islider"></div>
</template>

<script>
import iSlider from '../assets/js/iSlider'
// import '../assets/js/background-blur.js'
// import '../assets/js/iSlider-animate.js'

export default {
  data () {
    return {
      posternum: 567
    }
  },
  props: ['imgNum'],
  ready () {
    console.log('posternum: ' + this.posternum);
    let imgs = [{'content':'src/assets/img/1.jpg'}, {'content':'src/assets/img/2.jpg'}]
    let self = this
    this.slider = new iSlider({
      dom: self.$el,
      wrap: '.wrap',
      data: imgs,
      animateType: 'flow',
      isVertical: false,
      isLooping: false,
      isDebug: false,
      isAutoplay: false,
      onrendercomplete: function(index, ele) {
        var bg = '<img class="bg-poster" src="' + this.data[0]['content'] + '">';
        $('#islider').prepend(bg);
        self.posternum = 0;
      },
      onslidechange: function(index, ele) {
        console.log('index: ' + index);
        self.posternum = index;
        console.log('poster after change: ' + self.posternum);
        console.log('enter, index: ' + this.data[index]['content']);
        // var bg = 'url(' + this.data[index]['content'] + ')';
        var bg = '<div class="bg-poster"><img src="' + this.data[index]['content'] + '"></div>';
        // $('#islider').css("background-image", bg);
        $('.bg-poster').remove();
        $('#islider').prepend(bg);
        // $('#islider').backgroundBlur({
        //   imageURL: this.data[index]['content'],
        //   blurAmount: 10,
        //   imageClass: 'bg-blur'
        // });

        // this.setStyle(this.wrap, 'background-image', this.data[index]);
      }
    })
    // this.$http.get('banner.json')
    // .then(({data: {code, message, data}})=>{
    //   let imgs = []
    //   for (let i = 0 ; i < data.length; i++) {
    //     imgs.push(data[i])
    //   }
    //   let self = this
    //   this.slider = new ISlider({
    //     dom: self.$el,
    //     data: imgs,
    //     isVertical: false,
    //     isLooping: true,
    //     isDebug: false,
    //     isAutoplay: true
    //   })
    // })
    // 
    // 图片高斯处理
    // -webkit-filter: blur(20px);
    // filter: url('/media/blur.svg#blur'); 
  }
}
</script>

<style lang="sass">
#islider {
  height: 30%;
  width: 100%;
  overflow: hidden;
  position: relative;
  top: 0rem;

  bg-poster {
    position: absolute;
    z-index: 1;
    -webkit-filter: blur(30px);
    filter: url('/media/blur.svg#blur'); 
    top: 0rem;
    left: 0;

    img {
      width: 100%;
      height: auto;
    }
  }

  ul {
    position: absolute;
    width: 100%;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    top: 0rem;
    left: 0;
    z-index: 99;
  }

  li {
    position: absolute;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-pack: start;
    list-style: none;
    z-index: 99;

    img {
      width: 100%;
      height: auto;
    }
  }
}

</style>
