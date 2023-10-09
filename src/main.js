import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import store from './store/store'
import VueRouter from 'vue-router'
import Routes from './routes/routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'
import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'; // Add CSS
import './assets/sass/styles/common.scss'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";



Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueSidebarMenu)


const  router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')