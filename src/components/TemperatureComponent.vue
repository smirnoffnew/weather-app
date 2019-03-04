<template>
    <section>

        <TemperatureDisplayComponent
                :_type="'current'"
                :isScaleCelsius="isScaleCelsius"
                :temperature="current"
        ></TemperatureDisplayComponent>

        <div class="info-container">
            <div class="temperature-clicker">
                <span>&deg;</span>
                <a href="#" @click.prevent="toggleTemperature">{{ label }}</a>
            </div>

            <TemperatureDisplayComponent
                    :_type="'max'"
                    :isScaleCelsius="isScaleCelsius"
                    :temperature="max"
            ></TemperatureDisplayComponent>

            <TemperatureDisplayComponent
                    :_type="'min'"
                    :isScaleCelsius="isScaleCelsius"
                    :temperature="min"
            ></TemperatureDisplayComponent>
        </div>

    </section>
</template>

<script>
    import TemperatureDisplayComponent from './TemperatureDisplayComponent'

    export default {
        name: "TemperatureComponent",

        components: {
            TemperatureDisplayComponent
        },

        props: {
            current: {
                type: Number,
                required: true
            },
            max: {
                type: Number,
                required: true
            },
            min: {
                type: Number,
                required: true
            }
        },

        data: function () {
            return {
                isScaleCelsius: true,
                label: 'C'
            }
        },

        methods: {
            toggleTemperature() {
                this.isScaleCelsius = !this.isScaleCelsius;
                this.label = this.isScaleCelsius ? 'C' : 'F'
            }
        }
    }
</script>

<style lang="scss" scoped>
    section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 25px;
    }

    .info-container {
        margin-top: 20px;
        margin-left: 10px;
    }

    .temperature-clicker {
        padding-top: 5px;
        font-size: 2em;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.75);

        text-shadow: 0px 1px 0px #e3e3e3,
        0px 5px 10px rgba(0,0,0,0.15),
        0px 10px 2px rgba(0,0,0,0.1),
        0px 15px 30px rgba(0,0,0,0.1);

        &  a {
            padding-left: 5px;
        }
    }
</style>