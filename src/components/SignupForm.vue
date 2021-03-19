<template>
  <form @submit.prevent="handleSubmit">
    <h1>Sign Up</h1>
    <div class="error">{{ error }}</div>
    <input
      type="text"
      id="displayName"
      v-model="displayName"
      placeholder="Dsiplay name..."
    />
    <input type="email" id="email" v-model="email" placeholder="Email..." />
    <input
      type="password"
      id="password"
      v-model="password"
      placeholder="Password..."
    />
    <div v-if="isLoading">Loading...</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '../composables/useSignup';

export default {
  name: 'SignupForm',
  setup(props, context) {
    // Refs
    const displayName = ref(null);
    const email = ref(null);
    const password = ref(null);
    const isLoading = ref(false);

    // Composables
    const { signup, error } = useSignup();

    // Sign up method
    const handleSubmit = async () => {
      if (!displayName.value || !email.value || !password.value) {
        error.value = 'All fields are required';
      } else {
        isLoading.value = true;
        await signup(email.value, password.value, displayName.value);
        isLoading.value = false;
        if (!error.value) {
          context.emit('onSignup');
        }
      }
    };

    return { displayName, email, password, handleSubmit, error, isLoading };
  },
};
</script>

<style></style>
