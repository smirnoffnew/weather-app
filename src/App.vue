<template>
    <div id="app">
        <div :class="isDay ? 'container day' : 'container night'">
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
                // const now = new Date().getHours();
                // return (now > 4) && (now < 18);
                return true;
            }
        }
    }
</script>

<style lang="scss">
    body {
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }

    .container {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;

        &.day {
            background-image: linear-gradient(#E8B175, rgba(0, 0, 0, 0.2)) ;
        }

        &.night {
            background-image: linear-gradient(#585FAC, rgba(0, 0, 0, 0.2)) ;
        }
    }
</style>
