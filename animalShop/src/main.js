import Vue from "vue"
import app from "./App.vue"
import router from  "./router"
import "./commons/stylus/index.styl"


var vue =new Vue({
  el: "#app",
  router,
  render: h => h(app)
})

