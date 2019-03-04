<template>
    <section>
        <div class="cloudiness">
            <weather-icon icon="cloud"/>
            <span>{{ cloudiness }}</span>
            <span>&percnt;</span>
        </div>
        <div class="wind-speed">
            <weather-icon icon="strong-wind"/>
            <span>{{ windSpeed }}</span>
            <span>m/s</span>
        </div>
        <div class="humidity">
            <weather-icon icon="humidity"/>
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

<style lang="scss" scoped>
    section {
        font-size: 25px;
        font-weight: bold;
        width: 100%;
        padding-top: 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        text-shadow: 0px 0.5px 0px #000,
        0px 2px 4px rgba(0,0,0,0.15),
        0px 4px 1px rgba(0,0,0,0.1),
        0px 4px 4px rgba(0,0,0,0.1);

        & i {
            margin-right: 5px;
        }
    }
</style>