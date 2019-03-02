<template>
    <section>
        {{weatherId}}

        <!--clear sky 800 // 01-->
        <weather-icon v-if="(weatherId === 800)" icon="night-clear" />
        <weather-icon v-if="(weatherId === 800)" icon="day-sunny" />

        <!--few clouds 801 // 02-->
        <weather-icon v-if="(weatherId === 801)" icon="night-alt-cloudy" />
        <weather-icon v-if="(weatherId === 801)" icon="day-cloudy" />

        <!--scattered clouds 802 // 03-->
        <weather-icon v-if="(weatherId === 802)" icon="night-alt-cloudy" />
        <weather-icon v-if="(weatherId === 802)" icon="day-cloudy" />

        <!--broken clouds 803 // 04-->
        <weather-icon v-if="(weatherId === 803)" icon="cloudy" />
        <weather-icon v-if="(weatherId === 803)" icon="cloudy" />

        <!--shower rain 300 321 // 09-->
        <weather-icon v-if="(weatherId > 300) && (weatherId < 321)" icon="showers" />
        <weather-icon v-if="(weatherId > 300) && (weatherId < 321)" icon="showers" />

        <!--rain 500 504 // 10-->
        <weather-icon v-if="(weatherId > 500) && (weatherId < 504)" icon="rain" />
        <weather-icon v-if="(weatherId > 500) && (weatherId < 504)" icon="rain" />

        <!--thunderstorm 200 232 // 11-->
        <weather-icon v-if="(weatherId > 200) && (weatherId < 232)" icon="night-thunderstorm" />
        <weather-icon v-if="(weatherId > 200) && (weatherId < 232)" icon="day-thunderstorm" />

        <!--snow 600 622 // 13-->
        <weather-icon v-if="(weatherId > 600) && (weatherId < 622)" icon="night-alt-snow" />
        <weather-icon v-if="(weatherId > 600) && (weatherId < 622)" icon="day-snow" />

        <!--mist 701 781 // 50-->
        <weather-icon v-if="(weatherId > 701) && (weatherId < 781)" icon="night-fog" />
        <weather-icon v-if="(weatherId > 701) && (weatherId < 781)" icon="day-fog" />

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