<template>
    <div>
        <div class="text-center text-white lg:text-8xl md:text-7xl text-5xl font-bold flex flex-col px-10" data-aos="zoom-in">
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
        <div class=" flex justify-center items-end absolute -bottom-10 left-14 md:-bottom-32 md:left-80 lg:left-auto">
            <div class="lg:w-[200px] lg:h-[200px] w-[70px] h-[70px] bg-grey"></div>
            <div class="lg:w-[200px] lg:h-[200px] w-[70px] h-[70px] bg-stone"></div>
            <div class="lg:w-[200px] lg:h-[200px] w-[70px] h-[70px] bg-grey"></div>
            <div class="lg:w-[200px] lg:h-[200px] w-[70px] h-[70px] bg-stone"></div>
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