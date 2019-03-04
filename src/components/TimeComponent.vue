<template>
    <section id="app" class="section">
        <p class="date shadow"> {{getDate}}</p>
        <p class="time shadow" v-text="currentTime"></p>
    </section>
</template>

<script>
    import moment from 'moment';
    export default {
        name: "TimeComponent",

        data() {
            return {
                currentTime: null,
                today: null
            }
        },

        methods: {
            updateCurrentTime(){
                this.currentTime = moment().format('LTS');
            }
        },

        computed: {
            getDate(){
                const today = new Date();
                let dd = today.getDate();
                let mm = today.getMonth() + 1; //January is 0!
                let yyyy = today.getFullYear();
                (dd < 10) && (dd = '0' + dd);
                (mm < 10) && (mm = '0' + mm);
                return mm + '.' + dd + '.' + yyyy;
            }
        },

        created() {
            this.currentTime = moment().format('LTS');
            setInterval(() => this.updateCurrentTime(), 1 * 1000);
        }
    }
</script>

<style scoped>
    section.section {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: transparent;
    }

    h3.is-3, p.time {
        color: white;
    }

    h3.is-3:not(:last-child) {
        margin: 0;
        padding: 0;
    }

    .date {
        font-size: 25px;
    }

    .time {
        font-size: 1em;
        margin-top: -20px;
    }

    .shadow {
        text-shadow: 0px 0.5px 0px #000,
        0px 2px 4px rgba(0,0,0,0.1),
        0px 4px 1px rgba(0,0,0,0.1),
        0px 4px 4px rgba(0,0,0,0.1);
    }

</style>