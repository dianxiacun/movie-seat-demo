<template>
  <div id="islider"></div>
</template>

<script>
import iSlider from '../assets/js/iSlider'
// import '../assets/js/iSlider-animate.js'

export default {
  data () {
    return {
      slider: null
    }
  },
  ready () {
    let imgs = [{'content':'src/assets/img/1.jpg'}, {'content':'src/assets/img/1.jpg'}]
    let self = this
    this.slider = new iSlider({
      dom: self.$el,
      data: imgs,
      animateType: 'flow',
      isVertical: false,
      isLooping: true,
      isDebug: false,
      isAutoplay: true
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
  }
}
</script>

<style lang="sass">
#islider {
  height: 30%;
  width: 100%;
  overflow: hidden;
  position: relative;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
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
    -webkit-filter: blur(20px);
    filter: url('/media/blur.svg#blur');

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
