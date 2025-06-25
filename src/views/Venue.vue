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
        Additionally, a tram will be available behind <strong>PARK BASE</strong> (circle in green), at <strong>3:00 PM</strong> to transfer you to <strong>BALLOON SAFARI</strong> (circle in blue), which will be a shorter walk to the ceremony site at <strong>KIIJAMI OUTLOOK</strong>. 
        Please arrive to the park no later than <strong>3:45 PM</strong> to give yourself time to park and reach the ceremony location.
        <br /><br />
        If not taking the shuttle, a walk path is shown from the park entrance to the ceremony location on the map above.
      </p>

    </section>

    <!-- Parking Info -->
    <section class="mt-12 text-left">
      <h2 class="text-2xl font-serif text-pink-600 mb-4">Parking Pass Information</h2>
      <p class="text-gray-700 text-lg leading-relaxed">
        A Parking Voucher will be sent via email to the Head of Household and is also provided below.
        <br /><br />
        Please print the voucher or present the digital copy to the parking booth attendant upon arrival at the Safari Park.
      </p>

      <div class="mt-6 text-center">
        <div v-if="!unlocked" class="flex flex-col items-center">
          <input
            v-model="passwordInput"
            type="password"
            autocomplete="off"
            placeholder="Enter password to view voucher"
            class="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition mb-4"
          />
          <button
            @click="checkPassword"
            class="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Unlock
          </button>
          <p v-if="wrongPassword" class="text-red-500 mt-2">Incorrect password.</p>
        </div>

        <div v-else>
          <a
            v-if="unlocked"
            :href="driveImageUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-pink-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600 transition mt-4"
          >
            View Parking Voucher
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const showModal = ref(false)

const driveImageUrl = import.meta.env.VITE_VOUCHER_URL
const passwordInput = ref('')
const unlocked = ref(false)
const wrongPassword = ref(false)

const correctPassword = import.meta.env.VITE_VOUCHER_PASSWORD

const checkPassword = () => {
  if (passwordInput.value === correctPassword) {
    unlocked.value = true
    wrongPassword.value = false
  } else {
    wrongPassword.value = true
  }
}
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
