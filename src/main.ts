import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import i18n from './plugins/ការបកប្រែ';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueI18n);

new Vue({
  vuetify,
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app');
