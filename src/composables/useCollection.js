import { ref } from 'vue';
import { db } from '../firebase/config';

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;
    console.log(doc)
    try {
      const res = await db.collection(collection).add(doc);
      console.log(res);
    } catch (err) {
      console.log(err);
      error.value = 'Could not send message'
    }
  }

  return { error, addDoc }
};

export default useCollection;