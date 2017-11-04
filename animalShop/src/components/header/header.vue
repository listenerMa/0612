<template>
  <div class="header">
    <div class="innerHeader">
      <div class="search">
        <a href="https://wap.epet.com/place.html?pet_type=dog&amp;fw=0">
          <span class="localName">狗狗站</span>
          <span class="line">|</span>
          <span class="local">重庆</span>
          <i></i>
        </a>
      </div>
      <p class="search-text">
        <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
          <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          <span class="serachIcon"></span>
        </a>
      </p>
      <a class="epetCategory" href="https://wap.epet.com/wappms/pms.html?fw=0" >
        <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
      </a>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem = 23.4rem
  .header
    width (375/$rem)
    height (41/$rem)
    background pink
    padding (5/$rem) (10/$rem)
    .innerHeader
      padding (8/$rem) 0
      width 100%
      height (31/$rem)
      .search
        width (80/$rem)
        height (22/$rem)
        margin-right (20/$rem)
        a
          width 100%
          font-size (12/$rem)
          i
            position: absolute;
            top: (27/$rem);
            left: (81/$rem);
            border-width: (4/$rem);
            font-size: 0;
            line-height: 0;
            border-style: solid solid dotted;
            border-color: #898989 transparent transparent;

    .search-text
      display block
      height (24/$rem)
      width (230/$rem)
      position relative
      font-size (12/$rem)
      left (85/$rem)
      top (-17/$rem)
      input
        height 23px
        width 100%
        padding 0 0 0 (5/$rem)
        border-radius (5/$rem)
      .serachIcon
        width: (11/$rem)
        height: (11/$rem)
        position: absolute
        right: (5/$rem)
        top: (6/$rem)
        background url("./search.png") no-repeat
        background-size 100%


    .epetCategory
      height  (21/$rem)
      width  (35/$rem)
      position absolute
      right   (4/$rem)
      top (20/$rem)
      padding 0 0 0 (6/$rem)
      img
        width 70%
        height 100%

</style>
