<template>
  <form>
    <textarea
      @keypress.enter.prevent="handleSubmit"
      autofocus
      name="message"
      placeholder="Type a message..."
      v-model="message"
    ></textarea>
  </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '../composables/getUser';
import { timestamp } from '../firebase/config';

export default {
  name: 'ChatForm',
  setup() {
    const message = ref('');
    const user = getUser();

    const handleSubmit = () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };

      console.log(chat);
      message.value = '';
    };

    return { message, handleSubmit };
  },
};
</script>

<style scoped>
textarea {
  display: block;
  width: 100%;
  height: 50px;
  max-height: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 40px;
  outline: none;
  font-size: 14px;
  font-family: inherit;
  line-height: 30px;
  padding: 5px 20px;
  box-sizing: border-box;
}
</style>
