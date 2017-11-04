<template>
  <div class="firstPageWrap">
    <ul class="firstList">
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
    </ul>
    <div class="CarouselWrap">
      <ul class="Carousel">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="discountE">
      <a href="#">
        <img src="./discountE.jpg"/>
      </a>
    </div>
    <ul class="columnNavLi">
      <li class="fl" >
        <a href="http://wap.epet.com/group/main.html?pet_type=dog&amp;fw=0">
          <img src="./columnLi1.jpg" lazy="loaded">
        </a>
      </li>
      <li class="fl">
        <a href="http://wap.epet.com/brandsale.html?pet_type=dog&amp;fw=0">
          <img src="./columnLi2.jpg" lazy="loaded">
        </a>
      </li>
      <li class="fl" >
        <a href="http://wap.epetht.com/guide.html?pet_type=dog&amp;fw=0&amp;pet_type=dog">
          <img src="./columnLi3.jpg" lazy="loaded">
        </a>
      </li>
      <li class="fl" >
        <a href="http://wap.epet.com/trial/?pet_type=dog&amp;fw=0">
          <img src="./columnLi4.jpg" lazy="loaded">
        </a>
      </li>
    </ul>
    <ul class="columnNavLi">
      <li class="fl" >
        <a href="http://wap.epet.com/activity/cleargoods.html?pet_type=dog&amp;fw=0">
          <img src="./columnLi5.jpg" lazy="loaded">
        </a>
      </li>
      <li class="fl" >
        <a href="https://wap.epet.com/main.html?menu_param=121&amp;is_single=1&amp;pet_type=dog&amp;fw=0">
          <img src="./columnLi6.jpg" lazy="loaded">
        </a>
      </li>
      <li class="fl" >
        <a href="https://wap.epet.com/main.html?menu_param=4&amp;is_single=1&amp;pet_type=dog&amp;fw=0">
          <img src="./columnLi7.jpg" lazy="loaded">
        </a>
      </li>
      <li class="fl" >
        <a href="https://sale.epet.com/m/mould/activity/ztMjQ5Mw%3D%3D.html?tid=2493&amp;version=356&amp;fw=2&amp;pet_type=dog">
          <img src="./columnLi8.jpg" lazy="loaded">
        </a>
      </li>
    </ul>
    <div class="discountRobWrap">
      <img src="./doubol11.jpg"/>
      <img src="./discountPlus11.jpg">
    </div>
    <div class="everyDayRob">
      <div class="RobHeader">
        <img src="./everyDayRob.png"/>
        <div class="distanceNext">距离下一场</div>
        <div class="currentTime">
          <span class="time1-1">07</span>
          <span class="time-zi ft12">:</span>
          <span class="time1-1">59</span>
          <span class="time-zi ft12">:</span>
          <span class="time1-1">37</span>
        </div>
        <img class="more" src="./more.png"/>
      </div>
      <div class="liWrap">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../commons/stylus/mix.styl"
  $rem = 23.4rem
  .firstPageWrap
    .firstList
      display flex
      height  (50/$rem)
      width 100%
      background gold
      li:nth-child(1)
        firstBg1-image(1)
      li:nth-child(2)
        firstBg1-image(2)
      li:nth-child(3)
        firstBg1-image(3)
    .CarouselWrap
      position relative
      height (160/$rem)
      width 100%
      .Carousel
        height 100%
        width 400%
        position absolute
        li
          height 100%
          width 25%
          float left
        li:nth-child(1)
          background url("Carousel1.jpg") no-repeat
          background-size 100% 100%
        li:nth-child(2)
          background url("Carousel1.jpg") no-repeat
          background-size 100% 100%
        li:nth-child(3)
          background url("Carousel1.jpg") no-repeat
          background-size 100% 100%


    .discountE
      height (288/$rem)
      a
        display block
        height 100%
        width 100%
        img
          width 100%
          height 100%


    .columnNavLi
      display  -webkit-box
      display  flex
      height (94/$rem)
      width 100%
      li
        width  0
        -webkit-box-flex 1
        flex  1;
        a
          height 100%
          width 100%
          display inline-block
          img
            height 100%
            width 100%



    .discountRobWrap
      font-size 0
      img:nth-of-type(1)
        height (50/$rem)
        width 100%
      img:nth-of-type(2)
        height (150/$rem)
        width 100%
    .everyDayRob
      .RobHeader
        width 100%
        height (30/$rem)
        overflow height
        padding-bottom (10/$rem)
        img:nth-child(1)
          height (24/$rem)
          width (105/$rem)
          margin-top (10/$rem)
          margin-left (-10/$rem)

        .distanceNext
          height (20/$rem)
          width (70/$rem)
          font-size (14/$rem)
          display inline-block
          vertical-align middle

        .currentTime
          height (20/$rem)
          width (82/$rem)
          font-size (12/$rem)
          display inline-block
          vertical-align middle
        .more
          height 100%
          width (67/$rem)
          margin-left (39/$rem)
          vertical-align bottom


      .liWrap
        width 200%
        height (130/$rem)
</style>
