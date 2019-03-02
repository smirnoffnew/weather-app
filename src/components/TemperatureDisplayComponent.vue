<template>
    <div>
        <span v-if="isScaleCelsius">{{ temperature }}&deg;</span>
        <span v-else>{{ temperature | toFahrenheit }}&deg;</span>
    </div>
</template>

<script>
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
            }
        },
    }
</script>

<style scoped>

</style>