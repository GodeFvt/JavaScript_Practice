<script setup>
import ListModel from './ListModel.vue'
import products from '../../data/products.json'
</script>

<template>
  <div>
    <ListModel :items="products">
      <template #default="{ item }">
        <div class="flex text-gray-800 divide-y divide-slate-100 p-2">
          <div class="w-1/12">
            {{ item.id }}
          </div>
          <div class="w-3/12">
            {{ item.name }}
          </div>
          <div class="w-5/12">
            {{ item.detail }}
          </div>
          <div class="w-2/12">
            {{ item.price }}
          </div>
          <div class="w-1/12">
            {{ item.instock }}
          </div>
        </div>
      </template>
      <template #header>Product List</template>
    </ListModel>

    <!-- One Slot and Destructuring -->
    <!-- <ListModel :items="products" v-slot="{ item }">
      <div class="flex text-gray-800 divide-y divide-slate-100 p-2">
        <div class="w-1/12">
          {{ item.id }}
        </div>
        <div class="w-3/12">
          {{ item.name }}
        </div>
        <div class="w-5/12">
          {{ item.detail }}
        </div>
        <div class="w-2/12">
          {{ item.price }}
        </div>
        <div class="w-1/12">
          {{ item.instock }}
        </div>
      </div>
    </ListModel> -->
  </div>
</template>

<style scoped></style>
