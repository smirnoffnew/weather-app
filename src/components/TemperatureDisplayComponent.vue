<template>
    <div :class="`${_type} info`">
        <weather-icon v-if="(_type === 'max')" icon="direction-up"/>
        <weather-icon v-if="(_type === 'min')" icon="direction-down"/>

        <span v-if="isScaleCelsius">{{ temperature }}
            <span v-if="(_type === 'min' || _type === 'max')">&deg;</span>
        </span>

        <span v-else>{{ temperature | toFahrenheit }}
            <span v-if="(_type === 'min' || _type === 'max')">&deg;</span>
        </span>
    </div>
</template>

<script>
    import WeatherIcon from 'vue-weathericons';

    export default {
        name: "TemperatureDisplayComponent",
        props: {
            isScaleCelsius: {
                type: Boolean,
                required: true
            },
            temperature: {
                type: Number,
                required: true
            },
            _type: {
                type: String,
                required: true
            }
        },
        components: {
            WeatherIcon
        }
    }
</script>

<style lang="scss" scoped>
    .info {

    }

    .current {
        font-size: 9em;
        color: rgba(255, 255, 255, 0.75);
    }

    .min, .max {
        padding-top: 5px;
        font-size: 28px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.75);

        & i {
            padding-right: 5px;
            transform: translateY(2px);
            font-size: 1em;
        }
    }
</style>