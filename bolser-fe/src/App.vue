<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Counter from './components/Counter.vue'
import Main from './components/Main.vue'
</script>

<template>
  <div class="font-NYCD text-stone">
    <div class="fixed top-6 flex justify-between w-full px-10 z-50">
       <img src="./assets/logo.svg">
       <img src="./assets/facebook-icon.svg">
    </div>
    <div class="h-screen w-screen flex flex-col justify-center items-center bg-hero-bg bg-cover bg-no-repeat bg-center px-5">
      <Counter />
    </div>
    <div class="h-screen w-screen flex flex-col justify-center items-center bg-body-bg bg-cover bg-center p-5">
      <Main />
    </div>
  </div>
  
</template>
