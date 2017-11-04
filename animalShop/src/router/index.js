import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '../components/firstPage/firstPage.vue'
import suitShop from '../components/suitShop/suitShop.vue'
import dogFoods from '../components/dogFoods/dogFoods.vue'
import medical from '../components/medical/medical.vue'
import toy from '../components/toy/toy.vue'


Vue.use(Router)

export default new Router(
  {
    routes: [
      {
        path: '/',
        redirect: '/firstPage'
      },
      {
        path: '/firstPage',
        component: firstPage
      },
      {
        path: '/suitShop',
        component:suitShop
      },
      {
        path: '/dogFoods',
        component:dogFoods
      },
      {
        path: '/medical',
        component:medical
      },
      {
        path: '/toy',
        component:toy
      }
    ]
  }
)

