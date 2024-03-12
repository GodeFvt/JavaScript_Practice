<script setup>
import BaseCard from "./BaseCard.vue";
import ListModel from "./ListModel.vue";

defineEmits(["deleteTodo", "editMode"]);
defineProps({
  todos: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <ListModel :items="todos">
      <template #header>TODO List</template>
      <template #default="slotProps">
        <BaseCard size="sm" variant="outlined">
          <template v-slot:title>{{ slotProps.item.id }}</template>
          <template v-slot:subtitle>{{ slotProps.item.category }} </template>
          <template v-slot:content>{{ slotProps.item.description }}</template>
          <template v-slot:action>
            <button
              @click="$emit('editMode', slotProps.item)"
              class="text-sm text-purple-600 hover:text-purple-400"
            >
              Edit
            </button>
            <button
              @click="$emit('deleteTodo', slotProps.item.id)"
              class="text-sm text-red-600 hover:text-red-400"
            >
              Delete
            </button>
          </template>
        </BaseCard>
      </template>
    </ListModel>
    <!-- One Slot and Not Destructuring -->
    <!-- <ListModel :items="todos" v-slot="slotProps">
      <BaseCard size="sm" variant="flat">
        <template v-slot:title>{{ slotProps.item.id }}</template>
        <template v-slot:subtitle>{{ slotProps.item.category }} </template>
        <template v-slot:content>{{ slotProps.item.description }}</template>
      </BaseCard>
    </ListModel> -->
    <!-- One Slot and Destructuring -->
    <!-- <ListModel :items="todos" v-slot="{ item }">
      <BaseCard size="sm" variant="flat">
        <template v-slot:title>{{ item.id }}</template>
        <template v-slot:subtitle>{{ item.category }} </template>
        <template v-slot:content>{{ item.description }}</template>
      </BaseCard>
    </ListModel> -->
  </div>
</template>

<style scoped></style>
