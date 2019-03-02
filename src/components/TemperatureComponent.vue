<template>
    <section>

        <TemperatureDisplayComponent
                :isScaleCelsius="isScaleCelsius"
                :temperature="current"
        ></TemperatureDisplayComponent>

        <div>
            <div>
                <a href="#" @click.prevent="toggleTemperature">&deg;{{ label }}</a>
            </div>

            <TemperatureDisplayComponent
                    :isScaleCelsius="isScaleCelsius"
                    :temperature="max"
            ></TemperatureDisplayComponent>

            <TemperatureDisplayComponent
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

        data: function() {
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

<style scoped>

</style>