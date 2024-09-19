
<template>
  <nav class="bg-gray-800 p-4 shadow-md">
    <ul class="flex space-x-8 items-center">
      <li>
        <router-link to="/" class="text-white hover:text-gray-300 transition duration-200 ease-in-out">Login</router-link>
      </li>
      <li>
        <router-link to="/posts" class="text-white hover:text-gray-300 transition duration-200 ease-in-out">Posts</router-link>
      </li>
      <li>
        <router-link to="/users" class="text-white hover:text-gray-300 transition duration-200 ease-in-out">Usuarios</router-link>
      </li>
      <li>
        <button @click="logout" class="text-white hover:text-gray-300 transition duration-200 ease-in-out">Logout</button>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('isAuthenticated'); 
      this.$router.push('/'); 
    }
  }
}
</script>

<style scoped>

</style>
