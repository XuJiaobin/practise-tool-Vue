import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import ElementUI from "./plugin/element-ui-import.js";
import resetMessage from './plugin/resetMessage';
import router from "./router/index"
import plugins from './plugin/plugins'
Vue.config.productionTip = false;
// 应用插件
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(plugins);
Vue.prototype.$message = resetMessage
new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
