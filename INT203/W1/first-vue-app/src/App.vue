<script setup>
import { ref } from 'vue';
const count = ref(0)
const decreaseCount =()=>{
  count.value === 0 ? count.value : --count.value
}
const isBlack = ref(false)
</script>
 
<template>
<div class="min-h-screen" :class="isDark ? 'bg-black' : 'bg-white'">
<div class="flex justify-end p-2">
    <input type="checkbox" class="toggle" @click="isBlack = !isBlack"/>
  </div>
  <div>
    <h1 class="text-green-500 text-2xl font-semibold tracking-widest">
      My First Counter Application
    </h1>
  </div>
  <div class="flex p-4 space-x-2">
    <button @click="decreaseCount" class="px-3 py-1 bg-red-600 rounded-lg text-white">-</button>
    <p class="text-xl font-semibold">Counter: {{ count }}</p>
    <button @click="++count" class="px-3 py-1 text-white bg-green-500 rounded-lg">+</button>
  </div>
</div>
</template>
 
<style scoped>

</style>