<script setup>
import { useProductStore } from '../stores/productStore';
import { ref, watchEffect } from 'vue';
const store = useProductStore();
const products = ref([]);
watchEffect(() => {
  store.fetchProducts()
  products.value = store.products;
});
console.log(products.value);
</script>

<template>
  <main class="mt-4">
   <div class="flex items-center flex-wrap">
    <div v-for="product in products[0]"  :key="product.title" class="bg-gray-100 rounded-md w-64 h-92 space-y-2 py-2 px-4 m-5">
    <div>
      <img :src="product.image" :alt="products.title" class="w-full h-48 rounded-md">
    </div>

    <div class="flex-between">
      <h2 class="font-bold">{{product.title}}</h2>
      <h4 class="font-bold">${{product.price}}</h4>
    </div>

    <div>
      <p class="text-gray-400">{{product.description}}</p>
    </div>

    <div class="text-center pt-1">
      <button class="py-2 w-full bg-black text-white shadow-md rounded-md">View Product</button>
    </div>
    </div>
   </div>
  </main>
</template>
