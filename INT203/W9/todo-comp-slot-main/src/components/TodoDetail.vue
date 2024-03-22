<script setup>
import { useRoute, useRouter } from "vue-router";
const { params } = useRoute();
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
console.log(params.todoId);
</script>

<template>
  <div>
    <img
      :src="`../../imgs/groupImages/pic-${params.todoId}.jpg`"
      class="h-64"
    />
    <button @click="goBack">&lt;&lt;Back</button>
  </div>
</template>

<style scoped></style>
