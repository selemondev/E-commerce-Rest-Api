<script setup>
import Logo from "../assets/Nike_Logo.png";
import { reactive, computed, watchEffect, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { useAuthStore } from "../stores/authStore";
import { useRouter } from "vue-router";
const authStore = useAuthStore();
const router = useRouter();
const token = ref("");
const loading = ref("");
watchEffect(() => {
    token.value = authStore.user;
    loading.value = authStore.loginLoading;
    if(token.value) {
        router.push("/dashboard")
    }
});

const formData = reactive({
    username: "",
    email: "",
    password: "",
});

const rules = computed(() => {
    return {
        username: { required: helpers.withMessage("Username is required", required)},
        email: { required: helpers.withMessage("Email is required", required), email},
        password: { required: helpers.withMessage("Password is required", required), minLength: minLength(8)},
    }
});

const v$ = useVuelidate(rules, formData)
const handleSubmit = async () => {
      const result = await v$.value.$validate();
    if( result ) {
        try {
            authStore.loginUser(formData.email, formData.password);
        } catch(error) {
            console.log(error.message)
        }
    };

    setTimeout(() => {
        formData.username = "";
        formData.email = "";
        formData.password = "";
    }, 2000);
}
</script>
<template>
    <div class="grid place-items-center mt-4 md:mt-10">
        <div class="max-w-sm w-72 sm:w-80">
            <form class="w-full bg-gray-100/50 shadow-sm rounded-md px-6 py-4" @submit.prevent="handleSubmit">
                <div class="grid-layout">
                    <img :src="Logo" alt="Logo" class="w-16 h-16">
                </div>

                <div class="pb-3 sm:pb-4">
                    <label for="Username" class="label">Username</label>
                    <input type="text" class="input" placeholder="Username" v-model="formData.username">
                    <p class="error" v-if="v$.username.$error">{{ v$.username.$errors[0].$message}}</p>
                </div>

                <div class="pb-3 sm:pb-4">
                    <label for="Email" class="label">Email</label>
                    <input type="email" class="input" placeholder="Email" v-model="formData.email">
                    <p class="error" v-if="v$.email.$error">{{ v$.email.$errors[0].$message}}</p>
                </div>

                <div class="pb-3 sm:pb-4">
                    <label for="Password" class="label">Password</label>
                    <input type="password" class="input" placeholder="Password" v-model="formData.password">
                    <p class="error" v-if="v$.password.$error">{{ v$.password.$errors[0].$message}}</p>
                </div>

                <div>
                    <button type="submit" class="w-full text-white bg-black py-2.5 rounded-md">{{ loading ? 'Siging In...' : 'Sign In'}}</button>
                </div>

            </form>
        </div>
    </div>
</template>