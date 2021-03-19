import { ref, watchEffect } from 'vue';
import { db } from '../firebase/config';

const getCollection = (collection) => {
  const error = ref(null);
  const documents = ref(null);

  const docsRef = db.collection(collection).orderBy('createdAt');

  // Get documents from DB by realtime
  const unsubscribe = docsRef.onSnapshot(
    (snapshot) => {
      console.log('snapshot');
      let results = [];
      snapshot.docs.forEach((doc) => {
        if (doc.data().createdAt) {
          results.push({ id: doc.id, ...doc.data() });
        }
      });
      documents.value = results;
    },
    (err) => {
      console.log(err.message);
      error.value = 'Could not fetch data';
      documents.value = null;
    }
  );

  // Unsubscribe from real time listener when component is unmounted
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe());
  });

  return { error, documents };
};

export default getCollection;
