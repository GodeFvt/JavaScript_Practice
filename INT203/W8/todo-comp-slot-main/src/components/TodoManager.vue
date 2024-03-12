<script setup>
// Add, Edit, Delete, Read todo here
import AddEditTodo from './AddEditTodo.vue'
import TodoList from './TodoList.vue'
import todos from '../../data/todos.json'
import { ref } from 'vue'
const showModal = ref(false)
const clearModal = (flagModal) => {
  showModal.value = flagModal
}
const editingTodo = ref({ id: undefined, category: '', description: '' })
const openModalToEdit = (todo) => {
  showModal.value = true
  editingTodo.value = todo
}
</script>

<template>
  <div>
    <div class="flex justify-end">
      <button
        @click="openModalToEdit"
        class="px-2 py-0.5 text-green-600 rounded-lg hover:text-green-500"
      >
        Add New Todo
      </button>
    </div>
    <TodoList :todos="todos" @editMode="openModalToEdit" />
    <Teleport to="#addEditModal">
      <div
        v-show="showModal"
        class="absolute left-0 right-0 top-1/3 m-auto bg-slate-50 h-48 w-72 shadow-lg rounded-md"
      >
        <AddEditTodo @closeModal="clearModal" :todo="editingTodo" />
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>