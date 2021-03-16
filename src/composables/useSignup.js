import { ref } from 'vue';
import { auth } from '../firebase/config';

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);

    if (!res.user) {
      throw new Error('Sign up failed');
    }

    await res.user.updateProfile({ displayName });

    error.value = null;
    return res;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
