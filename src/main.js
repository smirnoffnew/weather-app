import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.filter('toFahrenheit', function (value) {
  return Math.floor((value * 1.8) + 32);
});

new Vue({
  render: h => h(App),
})
.$mount('#app');
