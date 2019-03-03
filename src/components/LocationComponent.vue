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

<style lang="scss" scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;

        & .location {
            margin-bottom: 5px;
            text-transform: uppercase;
            font-weight: bold;
        }

        & .description {
            text-transform: capitalize;
            text-align: center;
        }
    }
</style>