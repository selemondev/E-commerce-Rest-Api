<script setup>
import Logo from "../assets/Nike_Logo.png";
import { ref, watchEffect } from "vue";
import { useAuthStore } from "../stores/authStore";
import { useRouter } from "vue-router";
const store = useAuthStore();
const router = useRouter();
const token = ref("");
const loading = ref("");
watchEffect(() => {
    token.value = store.user;
    loading.value = store.logOutLoading;
});

const handleLogOut = () => {
    store.logOut();
    router.push("/login")
}
</script>

<template>
<header>
    <nav class=" bg-white border-b border-gray-200">
       <div class="w-full h-14 flex-between px-2 md:px-8">
         <div>
            <router-link to="/"><img :src="Logo" alt="Nike" class="w-20 h-20"></router-link>
        </div>

        <div class="flex-center space-x-4">
            <p><i class='bx bx-shopping-bag text-3xl'></i></p>
            <h4 class="font-bold text-lg cursor-pointer" v-if="!token"><router-link to="/login">Admin</router-link></h4>
            <button @click="handleLogOut()" class="py-1.5 px-4 text-white font-bold bg-black rounded-md" v-if="token">{{ loading ? 'Logging Out...' : 'LogOut'}}</button>
        </div>
       </div>
    </nav>
</header>
</template>