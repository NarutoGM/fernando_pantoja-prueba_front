<template>
 <div>
  <input
      type="text"
      v-model="searchQuery"
      placeholder="Buscar usuarios..."
      class="mb-4 p-2 border rounded"
    />
    <h1 class="text-2xl font-bold mb-4">Sección de Usuarios</h1>
    <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
    


    <div v-else>
      <ul>
        <li
          v-for="user in filteredUsers"
          :key="user.id"
          class="p-2 border-b"
        >
          <div>
            <strong>Nombre:</strong> {{ user.name }}
          </div>
          <div>
            <strong>Usuario:</strong> {{ user.username }}
          </div>
          <div>
            <strong>Email:</strong> {{ user.email }}
          </div>
          <button @click="toggleDetails(user.id)" class="mt-2 p-1 bg-blue-500 text-white rounded">
            Ver detalles
          </button>
          <div v-if="user.showDetails">
            <div>
              <strong>Teléfono:</strong> {{ user.phone }}
            </div>
            <div>
              <strong>Sitio web:</strong> {{ user.website }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      users: [],
      errorMessage: '',
      searchQuery: ''
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    toggleDetails(userId) {
      const user = this.users.find(user => user.id === userId);
      if (user) {
        user.showDetails = !user.showDetails; 
      }
    }
  },
  async mounted() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Error en la conexión al servidor');
      this.users = await response.json();
      this.users.forEach(user => user.showDetails = false);
    } catch (error) {
      this.errorMessage = error.message;
      console.error('Error cargando usuarios:', error);
    }
  }
}
</script>

<style>

</style>