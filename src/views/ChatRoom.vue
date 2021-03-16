<template>
  <div class="container chat-room">
    <Navbar />
    <ChatForm />
  </div>
</template>

<script>
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import ChatForm from '../components/ChatForm.vue';
import getUser from '../composables/getUser';

export default {
  name: 'ChatRoom',
  components: { Navbar, ChatForm },
  setup() {
    const user = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' });
      }
    });
  },
};
</script>

<style scoped>
  .chat-room {
    padding: 0;
  }
</style>
