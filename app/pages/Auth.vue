<template>
  <section class="p-6">
    <h1 class="text-2xl font-bold mb-4">Authentication</h1>

    <form @submit.prevent="handleLogin" class="space-y-4 max-w-sm">
      <div>
        <label class="block mb-1">Email</label>
        <input v-model="email" type="email" class="border p-2 w-full rounded" required />
      </div>
      <div>
        <label class="block mb-1">Password</label>
        <input v-model="password" type="password" class="border p-2 w-full rounded" required />
      </div>

      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
        {{ isLoading ? "Logging in..." : "Login" }}
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");
const isLoading = ref(false);

async function handleLogin() {
  try {
    isLoading.value = true;
    // TODO: Replace with your auth logic
    console.log("Logging in with", email.value, password.value);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Login successful!");
  } catch (error) {
    console.error("Login failed:", error);
    alert("Login failed");
  } finally {
    isLoading.value = false;
  }
}
</script>

