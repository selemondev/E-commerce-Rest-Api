import { defineStore } from 'pinia';
import { getAllProducts } from "../utils/urls";
import axios from "axios";
export const useProductStore = defineStore({
   id: "product",
   state: () => ({
    products: [],
    loadingProducts: null,
   }),

   getters: {

   },
   actions: {
    async fetchProducts() {
        this.loadingProducts = true;
        const response = await axios.get(getAllProducts);
        this.loadingProducts = false;
        this.products.push(response.data)
    }
   }
});