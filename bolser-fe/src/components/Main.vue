<template>
   <div class="flex flex-col justify-center items-center gap-5" data-aos="fade-up" data-aos-delay="300" data-aos-duration=500>
        <age-calc />
        <span class="w-3/4 border border-white"></span>
        <weather />
   </div>
  
</template>

<script>
    import AgeCalc from './AgeCalc.vue';
    import Weather from './Weather.vue';
    export default {
    components: { AgeCalc, Weather },
        
    }
</script>

<style lang="scss" scoped>

</style>