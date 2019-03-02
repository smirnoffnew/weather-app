<template>
    <button @click="getw"> get </button>
</template>

<script>
    import WeatherService from '../services/WeatherService'

    export default {
        name: 'WeatherApp',

        components: {

        },

        data() {
            return {
                forecast: new WeatherService
            }
        },

        methods: {
            getw: function () {
                console.log('this.forecast', this.forecast);
                console.log('aaaaaaaaaaaaaaaa');
            }
        }
    }
</script>

<style scoped>

</style>