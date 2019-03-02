<template>
    <section>
        {{weatherId}}
        <weather-icon v-if="(weatherId > 100) && (weatherId < 198)" icon="day-sunny" />
        <weather-icon v-if="(weatherId > 199) && (weatherId < 233)" icon="thunderstorm" />
        <weather-icon v-if="(weatherId > 299) && (weatherId < 322)" icon="cloudy" />
        <weather-icon v-if="(weatherId > 499) && (weatherId < 532)" icon="showers" />
        <weather-icon v-if="(weatherId > 599) && (weatherId < 623)" icon="snow" />



        clear sky 800 // 01
        <weather-icon icon="night-clear" />
        <weather-icon icon="day-sunny" />


        few clouds 801 // 02
        <weather-icon icon="night-alt-cloudy" />
        <weather-icon icon="day-cloudy" />


        scattered clouds 802 // 03
        <weather-icon icon="night-alt-cloudy" />
        <weather-icon icon="day-cloudy" />


        broken clouds 803 // 04
        <weather-icon icon="cloudy" />
        <weather-icon icon="cloudy" />



        shower rain 300 321 // 09
        <weather-icon icon="showers" />
        <weather-icon icon="showers" />


        rain 500 504 // 10
        <weather-icon icon="rain" />
        <weather-icon icon="rain" />

        thunderstorm 200 232 // 11
        <weather-icon icon="night-thunderstorm" />
        <weather-icon icon="day-thunderstorm" />


        snow 600 622 // 13
        <weather-icon icon="night-alt-snow" />
        <weather-icon icon="day-snow" />


        mist 701 781 // 50
        <weather-icon icon="night-fog" />
        <weather-icon icon="day-fog" />







    </section>
</template>

<script>
    import WeatherIcon from 'vue-weathericons';
    export default {
        name: "WeatherIconComponent",

        props: {
            weatherId: {
                type: Number,
                required: true
            }
        },

        components: {
            WeatherIcon
        },
    }
</script>

<style scoped>
    i {
        font-size: 100px;
    }
</style>