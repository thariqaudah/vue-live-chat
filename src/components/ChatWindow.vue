<template>
  <div class="chat-window">
    <div v-if="documents" class="messages" ref="messages">
      <div class="single" v-for="doc in formattedDocuments" :key="doc.id">
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
        <span class="created-at">{{ doc.createdAt }}</span>
      </div>
    </div>
    <!-- <div v-if="!documents">Loading...</div> -->
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import { computed, onUpdated, ref } from 'vue';
import { formatDistance } from 'date-fns';
import getCollection from '../composables/getCollection';

export default {
  name: 'ChatWindow',
  setup() {
    const { error, documents } = getCollection('messages');

    // Formatted document
    const formattedDocuments = computed(() => {
      return documents.value.map((doc) => {
        let formattedTime = formatDistance(doc.createdAt.toDate(), Date.now(), {
          addSuffix: true,
        });
        return {
          ...doc,
          createdAt: formattedTime,
        };
      });
    });

    // Auto scrolling to bottom of messages
    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, formattedDocuments, messages };
  },
};
</script>

<style scoped>
.chat-window {
  background-color: #fafafa;
  padding: 20px;
}
.messages {
  height: 300px;
  overflow: auto;
  transition: all 0.2s;
}
.single {
  margin-bottom: 20px;
  text-align: left;
}
.single .name {
  font-weight: bold;
  margin-right: 5px;
  /* color: #00acc1; */
}
.single .created-at {
  display: block;
  font-size: 12px;
  color: #aaa;
  margin-top: 5px;
}
</style>
