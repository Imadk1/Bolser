<template>
    <div class="flex gap-6 flex-col justify-center items-center">
        <h2 class="text-4xl w-3/4 text-center font-semibold">{{age}}</h2>
        <div class="flex md:flex-row flex-col gap-6">
            <input type="phone" label="age" v-model="age" class="py-2 px-8 text-4xl border-2 bg-transparent border-white placeholder:text-stone rounded-sm focus-visible:outline-blue-300" placeholder="Your Age" />
            <button type="button" @click="calculate" class="text-4xl bg-white/30 px-5 py-3 md:py-2 rounded-sm border-2 border-white hover:scale-110" >Calculate</button>
         </div>
    </div>
      
</template>

<script>
    export default {
        data() {
            return {
                age: null,
                showValues: false
            }
        },
        methods: {
            calculate() {
                this.showValues = !showValues
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>