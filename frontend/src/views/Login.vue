<script setup>
import Logo from "../assets/Nike_Logo.png";
</script>
<template>
    <div class="grid place-items-center mt-4 md:mt-10">
        <div class="max-w-sm w-72 sm:w-80">
            <form class="w-full bg-gray-100/50 shadow-sm rounded-md px-6 py-4">
                <div class="grid-layout">
                    <img :src="Logo" alt="Logo" class="w-16 h-16">
                </div>

                <div class="pb-3 sm:pb-4">
                    <label for="Username" class="label">Username</label>
                    <input type="text" class="input">
                </div>

                <div class="pb-4">
                    <label for="Email" class="label">Email</label>
                    <input type="email" class="input">
                </div>

                <div class="pb-2">
                    <label for="Password" class="label">Password</label>
                    <input type="password" class="input">
                </div>

                <div class="pb-2">
                    <p class="text-gray-800">Don't have an account? <span class="font-bold text-black">Register</span> </p>
                </div>

                <div>
                    <button class="w-full text-white bg-black py-2.5 rounded-md">Sign In</button>
                </div>

            </form>
        </div>
    </div>
</template>