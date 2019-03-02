<template>
  <div id="app">
    <div class="container">
      <WeatherApp
          :isDay="isDay"
      ></WeatherApp>
    </div>
  </div>
</template>

<script>
import WeatherApp from './components/WeatherApp.vue'

export default {
  name: 'app',

  components: {
    WeatherApp
  },

  computed: {
    isDay: function () {
      const now = new Date().getHours();
      return  (now > 4) && (now < 18);
    }
  }
}
</script>

<style>
   body {
     margin: 0;
     padding: 0;
   }
  .container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
