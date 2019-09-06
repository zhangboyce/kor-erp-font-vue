import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import menus from './menus_config';
import  'animate.css'
import 'ant-design-vue/dist/antd.less';
import Antd from 'ant-design-vue'
import Main from './components/layout/Main'
import Login from './components/layout/Login'
import * as http  from './http';
import Alert from './components/common/alert';

import mock from './mock/mock';
if (process.env.NODE_ENV === 'development') {
    mock();
}

Vue.prototype.$http = http;
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(VueRouter);
Vue.use(Alert);

const segments = menus.map(it => it.children).flat(Infinity);
let routes = [
    {
        path: '/',
        components: {
            page: Main,
        },
        children: segments
    },
    {
        path: '/login',
        components: {
            page: Login,
        },
    }
];
const router = new VueRouter({ routes });

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
