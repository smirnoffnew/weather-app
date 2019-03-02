<template>
    <main>
        <MeasurementsComponent
                :cloudiness="weather.cloudiness"
                :windSpeed="weather.windSpeed"
                :humidity="weather.humidity"
        ></MeasurementsComponent>

        <TemperatureComponent
                :current="weather.currentTemperature"
                :max="weather.maxTemperature"
                :min="weather.minTemperature"
        ></TemperatureComponent>

        <LocationComponent
                :location="this.weather.location"
                :description="this.weather.description"
        ></LocationComponent>

        <WeatherIconComponent
            :weatherId="this.weather.weatherId"
        ></WeatherIconComponent>
    </main>
</template>

<script>
    import WeatherService from '../services/WeatherService';
    import MeasurementsComponent from "./MeasurementsComponent";
    import TemperatureComponent from './TemperatureComponent';
    import LocationComponent from "./LocationComponent";
    import WeatherIconComponent from "./WeatherIconComponent";

    export default {
        name: 'WeatherApp',

        components: {
            MeasurementsComponent,
            TemperatureComponent,
            LocationComponent,
            WeatherIconComponent
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