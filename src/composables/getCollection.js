import { ref } from 'vue';
import { db } from '../firebase/config';

const getCollection = (collection) => {
  const error = ref(null);
  const documents = ref(null);

  // Get documenst from DB by realtime
  const docsRef = db.collection(collection).orderBy('createdAt');
  docsRef.onSnapshot(docs => {
    console.log(docs);
  })

  return { error, documents };
}