<template>
    <div class="flex flex-col justify-center items-center mt-2">
        <h2 v-if="displayMonths === 0" class="md:text-4xl text-2xl md:w-3/4 text-center font-semibold mb-5"> How many months of summer have you lived through?</h2>
        <h2 v-else class="md:text-4xl text-2xl md:w-3/4 text-center font-semibold mb-5"> You have lived through {{displayMonths}} months of summer</h2>
        <div class="flex md:flex-row flex-col md:gap-10 items-center justify-center">
            <input type="phone" label="age" v-model="age" class="text-2xl py-1 px-8 md:text-3xl border-2 bg-transparent border-white placeholder:text-stone rounded-sm focus-visible:outline-blue-300 mb-4 w-3/4 md:mb-0" placeholder="Your Age" />
            <button type="button" @click="showMonths" class="md:text-3xl text-xl bg-white/30 px-5 py-1 rounded-sm border-2 border-white hover:scale-110 w-3/4" >Calculate</button>
         </div>
    </div>
      
</template>

<script>
    export default {
        data: () => ({
            displayMonths: 0,
        }),
        methods: {
            showMonths() {
                this.displayMonths = this.age * 3;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>