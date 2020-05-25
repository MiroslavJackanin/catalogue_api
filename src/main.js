import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Category from "@/components/Category";
import Page from "@/components/Page";
import Item from "@/components/Item";

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path: '/', component: Category},
    {path: '/:category', component: Page},
    {path: '/:category/:item', component: Item}
  ],
  mode: 'history',
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
