<script setup>
import SearchIcon from "../components/icons/SearchIcon.vue";
</script>

<template>
  <header>
    <section
      class="flex items-center justify-between p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500"
    >
      <div class="flex items-center">
        <slot name="icon"
          ><img src="../assets/vue-icon.png" class="h-24"
        /></slot>
        <div>
          <h1 class="text-white text-4xl">
            <slot name="title"> Component </slot>
          </h1>
          <h2 class="italic text-indigo-200 text-xl">
            <slot name="subtitle">Play and Learn</slot>
          </h2>
        </div>
      </div>
      <slot name="search">
      <div class="flex">
        <div
          class="w-full flex items-center gap-3 border border-gray-300 p-1 rounded-lg bg-white"
        >
          <SearchIcon />
          <input
            class="outline-none"
            type="text"
            placeholder="type your keyword..."
            v-model="searchKeywords"
          />
        </div>
      </div>
    </slot>
    </section>
  </header>
</template>

<style scoped></style>
