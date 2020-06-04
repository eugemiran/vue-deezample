import Vue from "vue";
import PortalVue from "portal-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/styles.scss";

Vue.config.productionTip = false;
Vue.use(PortalVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
