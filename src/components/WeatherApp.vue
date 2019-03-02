<template>
    <main>
        <TemperatureComponent
                :current="weather.currentTemperature"
                :max="weather.maxTemperature"
                :min="weather.minTemperature"
        ></TemperatureComponent>

        <LocationComponent
                :location="this.weather.location"
                :description="this.weather.description"
        ></LocationComponent>
    </main>
</template>

<script>
    import WeatherService from '../services/WeatherService';
    import TemperatureComponent from './TemperatureComponent';
    import LocationComponent from "./LocationComponent";

    export default {
        name: 'WeatherApp',

        components: {
            TemperatureComponent,
            LocationComponent
        },

        data() {
            return {
                weather: new WeatherService
            }
        }
    }
</script>

<style scoped>

</style>