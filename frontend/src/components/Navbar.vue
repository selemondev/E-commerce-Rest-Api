<script setup>
import Logo from "../assets/Nike_Logo.png";
</script>

<template>
<header>
    <nav class=" bg-white border-b border-gray-200">
       <div class="w-full h-14 flex-between px-8">
         <div>
            <router-link to="/"><img :src="Logo" alt="Nike" class="w-20 h-20"></router-link>
        </div>

        <div class="flex-center space-x-4">
            <p class="text-xl"><i class='bx bx-shopping-bag text-2xl'></i></p>
            <h4 class="font-bold text-lg cursor-pointer"><router-link to="/login">Admin</router-link></h4>
        </div>
       </div>
    </nav>
</header>
</template>