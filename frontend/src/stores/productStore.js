import { defineStore } from 'pinia';
import { getAllProducts } from "../utils/urls";
import axios from "axios";
export const useProductStore = defineStore({
   id: "product",
   state: () => ({
    products: [],
   }),

   getters: {

   },
   actions: {
    async fetchProducts() {
        const response = await axios.get(getAllProducts);
        this.products.push(response.data)
    }
   }
});