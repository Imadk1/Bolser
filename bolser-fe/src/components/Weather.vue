<template>
    <div class="flex flex-col justify-center items-center mt-2">
        <div class="flex md:flex-row flex-col justify-center items-center md:gap-12 gap-2 px-4">
            <h2 class="md:text-4xl text-2xl md:w-2/4 text-center md:text-start font-semibold">Whats the weather like at Bolser?</h2>
            <button type="button" @click="showWeather" class="md:text-3xl text-xl bg-white/30 px-5 py-1 rounded-sm border-2 border-white hover:scale-110 w-3/4 md:w-auto" >Show Me</button>
        </div>
        <div v-if="weather" class="flex md:flex-row flex-col justify-center items-center md:gap-10 mt-1">
            <div class="flex justify-start items-center">
                <div class="md:text-3xl text-2xl font-bold text-start">
                <p>Currently</p>
                <p>{{weather.weather[0].description}}</p>
            </div>
            <img class="w-[140px]" v-bind:src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`" />
            </div>
            <div class="flex md:flex-col flex-row gap-2">
                <div class="flex flex-col md:flex-row bg-grey/50 px-3 py-2 gap-3">
                    <span class="flex gap-3 text-xl">
                        <p>Temp:</p>
                        <p>{{Math.floor(weather.main.temp)}}&#xb0;c</p>
                    </span>
                    <span class="flex gap-3 text-xl">
                        <p>Visibility:</p>
                        <p>{{Math.floor(weather.visibility / 1000)}} km</p>
                    </span>
                    <span class="flex gap-3 text-xl">
                        <p>Rain:</p>
                        <p v-if="weather.rain">{{Math.floor(weather.rain["1h"])}}mm</p> <!-- title 1h -->
                        <p v-else>0mm</p> <!-- title 1h -->
                    </span>
                </div>
                <div class="flex flex-col md:flex-row bg-stone/50 px-3 py-1 gap-3 justify-center">
                    <span class="flex gap-3 text-xl">
                        <p>Wind:</p>
                        <p>{{Math.floor(weather.wind.speed)}} mph</p>
                    </span>
                    <span class="flex gap-3 text-xl">
                        <p>Wind Dir:</p>
                        <p>{{weather.wind.deg}}&#xb0;</p>
                    </span>
                    <span class="flex gap-3 text-xl">
                        <p>Humidity:</p>
                        <p>{{weather.main.humidity}}%</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                api_key: '583cec8e67023fadbbfc71f95265b103',
                url_base: 'https://api.openweathermap.org/data/2.5/',
                location: 'lon=-1.5434757619068575&lat=53.792218178144196',
                weather: null,
            }
        },
        methods: {
            showWeather(){
                console.log("Test");
                fetch(`${this.url_base}/weather?${this.location}&units=metric&appid=${this.api_key}`)
                .then(res => {
                    return res.json();
                    }).then(
                        this.setWeather)
            },
            setWeather(results) {
                this.weather = results;
                console.log(this.weather);
                console.log(this.isHidden)

            },
        },
    }
</script>

<style lang="scss" scoped>

</style>