<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <LoginForm @onLogin="handleRedirect" />
      <p class="p">
        Not have an account yet? Please
        <span class="hl" @click="showLogin = false">sign up</span>
      </p>
    </div>
    <div v-else>
      <SignupForm @onSignup="handleRedirect" />
      <p class="p">
        Already registered? Let's
        <span class="hl" @click="showLogin = true">log in</span>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Welcome',
  components: { SignupForm, LoginForm },
  setup() {
    const router = useRouter();
    const showLogin = ref(true);

    const handleRedirect = () => {
      router.push({ name: 'ChatRoom' });
    };

    return { showLogin, handleRedirect };
  },
};
</script>

<style>
.welcome form {
  max-width: 380px;
  margin: auto;
}
.welcome form h1 {
  font-size: 1.8rem;
  margin-bottom: 40px;
}
.welcome form input {
  display: block;
  margin: 20px auto;
  width: 80%;
  max-width: 260px;
  outline: none;
  border: 1px solid #eee;
  background: #f4f4f4;
  padding: 10px 20px;
  border-radius: 20px;
  font: inherit;
  font-size: 14px;
  color: #7c7c7c;
}
.welcome button {
  margin: 20px auto;
}
.welcome .p {
  font-size: 14px;
  margin-top: 40px;
}
.welcome .hl {
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
}
</style>
