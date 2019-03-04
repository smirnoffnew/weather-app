<template>
    <main :class="isDay ? 'day' : 'night'">
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

        <IconComponent
                :isDay="isDay"
                :weatherId="this.weather.weatherId"
        ></IconComponent>

        <TimeComponent></TimeComponent>
    </main>
</template>

<script>
    import WeatherService from '../services/WeatherService';
    import MeasurementsComponent from "./MeasurementsComponent";
    import TemperatureComponent from './TemperatureComponent';
    import LocationComponent from "./LocationComponent";
    import IconComponent from "./IconComponent";
    import TimeComponent from "./TimeComponent";

    export default {
        name: 'WeatherApp',

        props: {
            isDay: {
                type: Boolean,
                required: true
            }
        },

        components: {
            MeasurementsComponent,
            TemperatureComponent,
            LocationComponent,
            IconComponent,
            TimeComponent
        },

        data() {
            return {
                interval: '',
                weather: new WeatherService
            }
        },

        methods: {
            runUpdates: function () {
                this.interval = setInterval(() => {
                    this.weather.getData();
                }, 600000);
            }
        },

        mounted: function () {
            this.runUpdates()
        },

        beforeDestroy() {
            clearInterval(this.interval)
        },

    }
</script>

<style lang="scss" scoped>
    main {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);

        &.day {
            background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('../assets/images/day.png');
        }

        &.night {
            background-image: url('../assets/images/night.png');
        }
    }


    @media screen and (min-width: 450px) {
        main {
            width: 330px;
            height: 600px;
            border-radius: 5px;
        }
    }
</style>