<template>
    <section>
        <div class="cloudiness">
            <weather-icon icon="cloud" />
            <span>{{ cloudiness }}</span>
            <span>&percnt;</span>
        </div>
        <div class="wind-speed">
            <weather-icon icon="strong-wind" />
            <span>{{ windSpeed }}</span>
            <span>m/s</span>
        </div>
        <div class="humidity">
            <weather-icon icon="humidity" />
            <span>{{ humidity }}</span>
            <span>&percnt;</span>
        </div>
    </section>
</template>

<script>
    import WeatherIcon from 'vue-weathericons';

    export default {
        name: "MeasurementsComponent",

        props: {
            cloudiness: {
                type: Number,
                required: true
            },
            windSpeed: {
                type: Number,
                required: true
            },
            humidity: {
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

</style>