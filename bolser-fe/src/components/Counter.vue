<template>
    <div>
        <div class="text-center text-white lg:text-8xl md:text-7xl text-6xl font-bold flex flex-col">
            <div class="flex md:gap-10 flex-col md:flex-row">
                 <h1>
                {{displayDays}} days,
                </h1>
                <h1>
                    {{displayHours}} hours
                </h1>
            </div>
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