// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from "axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import App from "./App";
import router from "./router";
import userApi from "@/api/userApi.js";
import downloadApi from "@/api/downloadApi.js";
import itemApi from "@/api/itemApi.js";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$userApi = userApi;
Vue.prototype.$downloadApi = downloadApi;
Vue.prototype.$itemApi = itemApi;

/* eslint-disable no-new */

Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Vue.use(BootstrapVueIcons);

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
