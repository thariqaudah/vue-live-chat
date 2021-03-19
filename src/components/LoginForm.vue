<template>
  <form @submit.prevent="handleSubmit">
    <h1>Log In</h1>
    <div class="error">{{ error }}</div>
    <input type="email" id="email" v-model="email" placeholder="Email..." />
    <input
      type="password"
      id="password"
      v-model="password"
      placeholder="Password..."
    />
    <div v-if="isLoading">Loading...</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../composables/useLogin';
import loadable from '../mixins/loadable';

export default {
  name: 'LoginForm',
  mixins: [loadable],
  setup(props, context) {
    // Refs
    const email = ref(null);
    const password = ref(null);

    // Composables
    const { error, login } = useLogin();

    // Log in method
    const handleSubmit = async () => {
      if (!email.value || !password.value) {
        error.value = 'All fields are required';
      } else {
        loadingStatus(true);
        await login(email.value, password.value);
        loadingStatus(false);
        if (!error.value) {
          context.emit('onLogin');
        }
      }
    };

    return { email, password, handleSubmit, error, isLoading };
  },
};
</script>

<style></style>
