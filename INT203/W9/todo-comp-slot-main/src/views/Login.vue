<script setup></script>

<template>
  <div class="w-1/2 p-20 bg-white shadow-lg space-y-2">
    <h1 class="font-semibold text-xl">Login</h1>
    <div class="flex flex-col space-y-2">
      <div>
        <label>Username: </label>
        <input
          class="border border-gray-200 rounded-md px-3 py-0.5 outline-none"
          type="text"
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          class="border border-gray-200 rounded-md px-3 py-0.5 outline-none"
          type="text"
        />
      </div>
      <div class="flex space-x-2">
        <button
          class="bg-slate-100 border border-gray-300 rounded-md hover:opacity-80 px-2 py-0.5"
        >
          OK
        </button>
        <button
          class="bg-slate-100 border border-gray-300 rounded-md hover:opacity-80 px-2 py-0.5"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
