<script setup>
// Add, Edit, Delete, Read todo here
import AddEditTodo from "./AddEditTodo.vue";
import TodoList from "./TodoList.vue";
import todos from "../../data/todos.json";
import { ref, onMounted } from "vue";
import {
  getItems,
  getItemById,
  deleteItemById,
  addItem,
  editItem,
} from "../libs/fetchUtils.js";
import { TodoManagement } from "../libs/TodoManagement.js";

const myTodo = ref(new TodoManagement());
const showModal = ref(false);
const clearModal = (flagModal) => {
  showModal.value = flagModal;
};
const editingTodo = ref({ id: undefined, category: "", description: "" });
const openModalToEdit = (todo) => {
  showModal.value = true;
  editingTodo.value = todo;
};
onMounted(async () => {
  const item = await getItems(import.meta.env.VITE_BASE_URL);
  myTodo.value.addTodos(item);
});

const removeTodo = async (removeId) => {
  const removeStatus = await deleteItemById(
    import.meta.env.VITE_BASE_URL,
    removeId
  );
  if (removeStatus == 200) {
    myTodo.value.removeTodo(removeId);
  }
};

//add
const updateTodo = async (newTodo) => {
  if (newTodo.id === undefined) {
    const addedItem = await addItem(import.meta.env.VITE_BASE_URL, {
      category: newTodo.category,
      description: newTodo.description,
    });
    myTodo.value.addTodo(
      addedItem.id,
      addedItem.category,
      addedItem.description
    );
  } else {
    const editedItem = await editItem(
      import.meta.env.VITE_BASE_URL,
      newTodo.id,
      newTodo
    );
    myTodo.value.updateTodo(
      editedItem.id,
      editedItem.category,
      editedItem.description
    );
  }
  showModal.value = false;
  editingTodo.value = { id: undefined, category: "", description: "" };
};
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
    <TodoList
      :todos="myTodo.getTodos()"
      @editMode="openModalToEdit"
      @deleteTodo="removeTodo"
    />
    <Teleport to="#addEditModal">
      <div
        v-show="showModal"
        class="absolute left-0 right-0 top-1/3 m-auto bg-slate-50 h-48 w-72 shadow-lg rounded-md"
      >
        <AddEditTodo
          @closeModal="clearModal"
          @saveTodo="updateTodo"
          :todo="editingTodo"
        />
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>
