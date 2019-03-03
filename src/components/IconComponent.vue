<template>
    <section>
        <!--clear sky 800 // 01-->
        <weather-icon v-if="(weatherId === 800 && !isDay)" icon="night-clear"/>
        <weather-icon v-if="(weatherId === 800 && isDay)" icon="day-sunny"/>

        <!--few clouds 801 // 02-->
        <weather-icon v-if="(weatherId === 801 && !isDay)" icon="night-alt-cloudy"/>
        <weather-icon v-if="(weatherId === 801 && isDay)" icon="day-cloudy"/>

        <!--scattered clouds 802 // 03-->
        <weather-icon v-if="(weatherId === 802 && !isDay)" icon="night-alt-cloudy"/>
        <weather-icon v-if="(weatherId === 802 && isDay)" icon="day-cloudy"/>

        <!--broken clouds 803 // 04-->
        <weather-icon v-if="( (weatherId === 803 || weatherId === 804) && !isDay)" icon="cloudy"/>
        <weather-icon v-if="( (weatherId === 803 || weatherId === 804) && isDay)" icon="cloudy"/>

        <!--shower rain 300 321 // 09-->
        <weather-icon v-if="(weatherId > 300) && (weatherId < 321) && !isDay" icon="showers"/>
        <weather-icon v-if="(weatherId > 300) && (weatherId < 321) && isDay" icon="showers"/>

        <!--rain 500 504 // 10-->
        <weather-icon v-if="(weatherId > 500) && (weatherId < 504)" icon="rain"/>

        <!--thunderstorm 200 232 // 11-->
        <weather-icon v-if="(weatherId > 200) && (weatherId < 232) && !isDay" icon="night-thunderstorm"/>
        <weather-icon v-if="(weatherId > 200) && (weatherId < 232) && isDay" icon="day-thunderstorm"/>

        <!--snow 600 622 // 13-->
        <weather-icon v-if="(weatherId > 600) && (weatherId < 622) && !isDay" icon="night-alt-snow"/>
        <weather-icon v-if="(weatherId > 600) && (weatherId < 622) && isDay" icon="day-snow"/>

        <!--mist 701 781 // 50-->
        <weather-icon v-if="(weatherId > 701) && (weatherId < 781) && !isDay" icon="night-fog"/>
        <weather-icon v-if="(weatherId > 701) && (weatherId < 781) && isDay" icon="day-fog"/>

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
            },
            isDay: {
                type: Boolean,
                required: true
            }
        },

        components: {
            WeatherIcon
        },
    }
</script>

<style scoped>
    section {
        margin-bottom: -45px;
    }

    i {
        font-size: 100px;
    }
</style>