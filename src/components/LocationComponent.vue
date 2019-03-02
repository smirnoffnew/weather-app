<template>
    <section>
        <div class="location">{{ location }}</div>
        <div class="description">{{ description }}</div>
    </section>
</template>

<script>
    export default {
        name: "LocationComponent",
        props: {
            location: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>