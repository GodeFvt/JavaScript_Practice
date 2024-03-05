<script setup>
import { ref } from "vue";
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col ">
    <div class="flex">
      <slot name="headerToDo"> </slot>
    </div>
    <div class="flex">
      <slot v-for="(item, index) in items" :key="index" :item="item"></slot>
    </div>
  </div>
</template>

<style scoped></style>
