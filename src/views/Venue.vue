<template>
  <main class="min-h-screen px-4 py-12 max-w-2xl mx-auto animate-fade-in text-center">
    <h1 class="text-4xl font-serif text-pink-600 mb-6">Venue Information</h1>

    <!-- Map -->
    <p class="text-gray-700 text-lg mb-4">
      Tap the map below to enlarge for details.
    </p>
    <img
      src="/SafariPark_map-1_Large.png"
      alt="Venue Map"
      class="rounded-lg shadow-lg mx-auto max-w-full cursor-pointer hover:opacity-90 transition"
      @click="showModal = true"
    />
    <VueEasyLightbox
      :visible="showModal"
      :imgs="['/SafariPark_map-1_Large.png']"
      @hide="showModal = false"
    />
    <p class="text-sm text-gray-500 mt-2">Click/tap the map to view full size.</p>

    <!-- Safari Park Pass -->
    <section class="mt-12 text-left">
      <h2 class="text-2xl font-serif text-pink-600 mb-4">San Diego Safari Park Pass</h2>
      <p class="text-gray-700 text-lg leading-relaxed">
        All guests will be provided with a ticket to the San Diego Safari Park. Your tickets will be waiting for you at the
        <strong>Will Call booth</strong> as early as <strong>8:00 AM</strong>. Give them your name, and your adventure begins!
        <br /><br />
        If you arrive after <strong>3:00 PM</strong>, your ticket will be available at a table set up at the entrance to the park.
        <br /><br />
        Additionally, a tram will be available at <strong>3:00 PM</strong> to transfer you to the ceremony site.
        Please arrive no later than <strong>3:45 PM</strong> to give yourself time to park and reach the ceremony location.
      </p>
    </section>

    <!-- Parking Info -->
    <section class="mt-12 text-left">
      <h2 class="text-2xl font-serif text-pink-600 mb-4">Parking Pass Information</h2>
      <p class="text-gray-700 text-lg leading-relaxed">
        A <strong>QR code</strong> for your parking pass will be sent via email to the Head of Household and is also provided below:
      </p>
      <div
        class="w-48 h-48 bg-gray-200 flex items-center justify-center mx-auto mt-4 rounded-lg border border-dashed border-gray-400"
      >
        <span class="text-gray-500">QR Code Placeholder</span>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const showModal = ref(false)
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
