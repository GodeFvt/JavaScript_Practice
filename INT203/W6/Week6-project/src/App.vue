<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from "vue";
import PageHeader from "./components/Header.vue";
</script>

<template>
  <div class="specialText w-full">
    <PageHeader>
      <template #icon><img src="./assets/icon.ico" class="h-24" /></template>
      <template #title>SUPERIDOL</template>
      <template #subtitle>Math Raining</template>
      <template #search>.</template>
    </PageHeader>
  </div>
</template>

<style scoped></style>
