import Vue from 'vue';
import App from './App.vue';

import KaimoUI from 'kaimo-ui';
Vue.use(KaimoUI);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App)
}).$mount('#app');
