import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import messages from './plugins/ការបកប្រែ';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ខ្មែរ', // Defina uma localidade
  messages, // Defina as mensagens
});

new Vue({
  vuetify,
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app');
