<template>
  <form>
    <textarea
      @keypress.enter.prevent="handleSubmit"
      autofocus
      name="message"
      placeholder="Type a message..."
      v-model="message"
    ></textarea>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '../composables/getUser';
import { timestamp } from '../firebase/config';
import useCollection from '../composables/useCollection';

export default {
  name: 'ChatForm',
  setup() {
    const message = ref('');
    const user = getUser();
    const { error, addDoc } = useCollection('messages');

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };

      await addDoc(chat);
      if (!error.value) {
        message.value = '';
      }
    };

    return { message, error, handleSubmit };
  },
};
</script>

<style scoped>
textarea {
  display: block;
  width: 100%;
  height: 70px;
  max-height: 100%;
  border: 0;
  border-top: 1px solid #eee;
  outline: none;
  font-size: 14px;
  font-family: inherit;
  line-height: 40px;
  padding: 10px 20px;
  box-sizing: border-box;
}
</style>
