<template>
  <div class="footerWrap">
    <ul>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
    </ul>
  </div>
</template>

<script>
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../commons/stylus/mix.styl"
  $rem = 23.4rem
  .footerWrap
    width 100%
    height (45/$rem)
    position absolute
    background white
    bottom -1px
    left 0
    ul
      height (45/$rem)
      li
        width 25%
        height 100%
        float left
        text-align center
        &:nth-child(1)
          a
            bottomBg("home")
            background-position (10/$rem) (4/$rem)
        &:nth-child(2)
          a
            bottomBg("classify")
            background-position -3.57265rem (4/$rem)
        &:nth-child(3)
          a
            bottomBg("shopCart")
            background-position (-100/$rem) (4/$rem)
        &:nth-child(4)
          a
            bottomBg("myCart")
            background-position (-100/$rem) (4/$rem)

</style>
