<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-md rounded px-8 py-6 mb-4 w-96">
      <h1 class="text-2xl font-semibold mb-6 text-center">Login</h1>
      <form @submit.prevent="validateLogin">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            v-model="username"
            id="username"
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            v-model="password"
            id="password"
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
      <p v-if="error" class="text-red-500 text-center mt-4">{{ error }}</p>
    </div>
  </div>
</template>

  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: ''
      };
    },
    methods: {
      async validateLogin() {
        try {
          const response = await fetch('https://shopcreations.me/api/login.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password,
            }),
          });
          const data = await response.json();
          console.log(data); 

          if (data.success) {
            localStorage.setItem('isAuthenticated', 'true'); 


            this.$router.push('/posts'); 

          } else {
            this.error = data.message;
          }
        } catch (error) {
          this.error = 'Error de conexión con el servidor';
        }
      },
    },
  };
  </script>
  
  <style scoped>
 
  .login-container {
    max-width: 400px;
    margin: auto;
  }
  </style>
  