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
            letter-spacing: 1px;

            font-size: 25px;
            margin-bottom: 15px;
            text-transform: uppercase;
            font-weight: bold;

            color:white;
            text-shadow: 0px 1px 0px #e3e3e3,
            0px 5px 8px rgba(0,0,0,0.15),
            0px 10px 2px rgba(0,0,0,0.1),
            0px 10px 10px rgba(0,0,0,0.1);
        }

        & .description {
            font-size: 1em;
            text-transform: capitalize;
            text-align: center;

            text-shadow: 0px 1px 0px #000;
        }
    }
</style>