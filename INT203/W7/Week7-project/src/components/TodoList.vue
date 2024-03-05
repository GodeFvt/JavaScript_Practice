<script setup>
import { ref } from "vue";
import BaseCard from "./BaseCard.vue";
import ListModal from "./ListModal.vue";
import todos from "../../data/todos.json";
</script>

<template>
  <ListModal :items="todos">
    <template #headerToDo> TODO List </template>
    <template #default="slotProps">
      <BaseCard size="sm" variant="outline">
        <template #title>{{ slotProps.item.id }}</template>
        <template #subtitle>{{ slotProps.item.category }}</template>
        <template #content>{{ slotProps.item.description }}</template>
      </BaseCard>
    </template>
  </ListModal>
</template>

<style scoped></style>
./ListModal.vue./ListModal.vue
