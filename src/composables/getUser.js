import { auth } from '../firebase/config';
import { ref } from 'vue';

const user = ref(auth.currentUser);

auth.onAuthStateChanged((currentUser) => {
  user.value = currentUser;
});

const getUser = () => {
  return user;
};

export default getUser;
