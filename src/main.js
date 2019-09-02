import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import menus from './menus_config';
import  'animate.css'

import 'ant-design-vue/dist/antd.less';
import Antd from 'ant-design-vue'
Vue.use(Antd);

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = menus.map(it => it.children).flat(Infinity);
const router = new VueRouter({ routes });

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
