<template>
  <nav v-if="user">
    <div>
      <p>Hey there, {{ user.displayName }}</p>
      <p>Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Log out</button>
  </nav>
</template>

<script>
import getUser from '../composables/getUser';
import useLogout from '../composables/useLogout';

export default {
  name: 'Navbar',
  setup() {
    const user = getUser();
    const { error, logout } = useLogout();

    const handleClick = async () => {
      await logout();
    };

    return { user, error, handleClick };
  },
};
</script>

<style scoped>
nav {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  border-bottom: 1px solid #eee;
}
nav p:last-child {
  font-size: 14px;
  color: #7c7c7c;
  margin-top: -5px;
}
</style>
