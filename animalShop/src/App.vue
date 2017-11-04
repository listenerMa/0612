<template>
  <div>
    <ele_header></ele_header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/firstPage">首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/suitShop">服饰城</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/dogFoods">狗狗主粮</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/medical">医疗保健</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/toy">零食玩物</router-link>
      </div>
      <div class="bottomLine"></div>
    </div>
    <router-view ></router-view>
  </div>

</template>

<script>
  import header from './components/header/header.vue'
  export default {
    date(){
      return {}
    },
    components:{
      ele_header:header
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./commons/stylus/base.styl"
  $rem = 23.4rem
  .tab
    width 100%
    background greenyellow
    height (35.5/$rem)
    position relative
    .tab-item
      width 20%
      height 100%
      text-align center
      float left
      font-size 0
      a
        width 100%
        height 100%
        font-size (14/$rem)
        display inline-block
        box-sizing border-box
        padding-top (10/$rem)
    .bottomLine
      height 1px
      width (30/$rem)
      background #459d36
      position absolute
      bottom 0
      left  (22/$rem)
</style>
