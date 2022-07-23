<template>
    <div 
        class="h-screen w-screen flex flex-col justify-center items-center"
        style="background-image:linear-gradient(rgba(212, 202, 88, 0.5), rgba(225, 113, 66, 0.5)), url(../assets/hero-background.jpg)"
    >
        <div class="counter_text text-stone text-7xl">
            <h1>
                {{displayDays}} days
                {{displayHours}} hours
            </h1>
            <h1>of summer to go!</h1>
        </div>
        
    </div>
</template>

<script>
    export default {
        data: () => ({
            displayDays: 0,
            displayHours: 0
        }),
        computed: {
            _seconds: () => 1000,
            _minutes(){
                return this._seconds * 60;
            },
            _hours(){
                return this._minutes * 60;
            },
            _days(){
                return this._hours * 24;
            } 
        },
        mounted() {
            this.showRemaining();
        },
        methods: {
            showRemaining() {
                const timer = setInterval(() => {
                    const now = new Date();
                    const end = new Date("21 September 2022 00:00:00");
                    const distance = end.getTime() - now.getTime();

                    if (distance < 0) {
                        clearInterval(timer);
                        return;
                    }

                    const days = Math.floor((distance / this._days));
                    const hours = Math.floor((distance % this._days) / this._hours);
                    this.displayHours  = hours < 10 ? "0" + hours : hours;
                    this.displayDays  = days < 10 ? "0" + days : days;
                }, 1000);
            }
        },
    };
</script>

<style lang="scss" scoped>

</style>