import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import ElementUI from "./plugin/element-ui-import.js";
import router from "./router/index"
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
