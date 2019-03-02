<template>
    <section>
        {{weatherId}}
        <weather-icon v-if="(weatherId > 100) && (weatherId < 198)" icon="day-sunny" />
        <weather-icon v-if="(weatherId > 199) && (weatherId < 233)" icon="thunderstorm" />
        <weather-icon v-if="(weatherId > 299) && (weatherId < 322)" icon="cloudy" />
        <weather-icon v-if="(weatherId > 499) && (weatherId < 532)" icon="showers" />
        <weather-icon v-if="(weatherId > 599) && (weatherId < 623)" icon="snow" />
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