<template>
  <div class="CarouselWrap">
    <Swipe :auto="2000">
      <SwipeItem><a href="#"><img class="Carouse" src="./Carousel4.jpg"/></a></SwipeItem>
      <SwipeItem><a href="#"><img class="Carouse" src="./Carousel4.jpg"/></a></SwipeItem>
      <SwipeItem><a href="#"><img class="Carouse" src="./Carousel4.jpg"/></a></SwipeItem>
      <SwipeItem><a href="#"><img class="Carouse" src="./Carousel4.jpg"/></a></SwipeItem>
    </Swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  export default {
    components:{
      Swipe:Swipe,
      SwipeItem:SwipeItem
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem = 23.4rem
  .CarouselWrap
    position relative
    height (160/$rem)
    width 100%
    .mint-swipe
      .mint-swipe-items-wrap
        .Carouse
          width 100%
      .mint-swipe-indicators
        .mint-swipe-indicator
          width (5/$rem)
          height (5/$rem)
          background white
          opacity 1
          border-radius (6/$rem)
          &.is-active
            width (15/$rem)
            transition 1s width


</style>
