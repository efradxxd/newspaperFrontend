import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import VueRouter from "vue-router";
//components for router
import view from "@/components/view.vue";
import home from "@/components/home.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);
var router = new VueRouter({
  //configuracion de las rutas
  routes: [
    {
      path: "/home",
      component: home
    },
    {
      path: "/view",
      component: view
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
