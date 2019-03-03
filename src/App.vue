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

        data : function(){
            return {
                interval:'',
                isDay: true
            }
        },

        methods: {
            runUpdates: function () {
                this.interval = setInterval(() => {
                    const now = new Date().getHours();
                    this.isDay = (now > 4) && (now < 18);
                }, 3600000);
            }
        },

        mounted: function () {
            this.runUpdates()
        },

        beforeDestroy () {
            clearInterval(this.interval)
        },
    }
</script>

<style lang="scss">
    body {
        font-family: 'Open Sans', sans-serif;
        color: #212121;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
        transition: color .2s ease-in;
    }

    a:hover {
        color: grey;
    }

    .container {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;

        &.day {
            background-image: linear-gradient(#E8B175, rgba(0, 0, 0, 0.2));
        }

        &.night {
            background-image: linear-gradient(#585FAC, rgba(0, 0, 0, 0.2));
        }
    }
</style>
