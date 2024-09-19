<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Sección de Posts</h1>
    <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
    <div v-else>
      <ul>
        <li v-for="post in posts" :key="post.id" class="p-2 border-b">
          <h2 class="font-semibold">{{ post.title }}</h2>
          <p><strong>User ID:</strong> {{ post.userId }}</p>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      errorMessage: ''
    };
  },
  async mounted() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
      if (!response.ok) throw new Error('Error en la conexión al servidor');
      this.posts = await response.json();
    } catch (error) {
      this.errorMessage = error.message;
      console.error('Error cargando posts:', error);
    }
  }
}
</script>
