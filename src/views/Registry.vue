<template>
  <main class="text-center px-6 py-12 animate-fade-in">
    <h2 class="text-3xl font-serif text-pink-600 mb-4">Registry</h2>

    <p class="text-gray-700 mb-6 text-lg">
      Your love and support are the greatest gifts. If you’d like to send a gift, here’s our registry:
    </p>

    <a
    :href="amazonRegistryUrl"
      target="_blank"
      class="inline-block bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-pink-600 transition transform hover:-translate-y-1 hover:scale-105 mb-8"
    >
      View Our Amazon Registry
    </a>

    <p class="text-gray-600 text-md mt-6">
      <strong>Note:</strong> Physical gifts will also be accepted the day of the wedding.
    </p>
  </main>
</template>

<script setup>
const amazonRegistryUrl = import.meta.env.VITE_AMAZON_REGISTRY_URL
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out both;
}
</style>
