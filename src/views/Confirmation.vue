<template>
    <main class="min-h-screen flex flex-col items-center justify-start pt-20 text-center bg-white">
      <div
        class="p-8 rounded-xl shadow-lg max-w-lg mx-auto bg-white animate-fade-in-up"
      >
        <h1 class="text-4xl font-serif text-pink-600 mb-6">Thank you for RSVPing!</h1>
        <p class="text-lg text-gray-700 mb-4">
          We can't wait to celebrate with you! 🎉<br />
          Please check your email for more event updates soon.
        </p>
        <router-link
          to="/"
          class="mt-6 inline-block text-pink-500 underline hover:text-pink-600 text-lg"
        >
          Return to Home
        </router-link>
      </div>
    </main>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out;
  }
  </style>
  