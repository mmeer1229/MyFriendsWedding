<template>
    <main class="min-h-screen px-4 py-12 max-w-3xl mx-auto animate-fade-in">
      <h1 class="text-4xl font-serif text-pink-600 text-center mb-12">Event Schedule</h1>
  
      <ol class="relative border-l-4 border-pink-300">
        <li v-for="(event, index) in schedule" :key="index" class="mb-10 ml-6">
          <span class="absolute -left-3.5 flex items-center justify-center w-6 h-6 bg-pink-500 rounded-full ring-4 ring-pink-100"></span>
          <time class="mb-1 text-sm font-medium leading-none text-pink-600">{{ event.time }}</time>
          <h3 class="text-lg font-semibold text-gray-800">{{ event.title }}</h3>
          <p v-if="event.description" class="text-gray-700 text-md">{{ event.description }}</p>
        </li>
      </ol>
    </main>
  </template>
  
  <script setup>
  const schedule = [
    { title: 'Opening time of Safari Park', time: '8:00am', description: 'Your park pass is valid all day so feel free to show up early and enjoy the park.' },
    { title: 'Guest arrival (Check-in Table opens)', time: '3:00pm', description: 'This table is at the entrance to the park' },
    { title: 'Guest Transportation to the ceremony', time: '3:30pm', description: 'Loading Location: Behind Park Base\nUnloading Location: Balloon Safari' },
    { title: 'Ceremony', time: '4:30pm' },
    { title: 'Cocktail hour and appetizers', time: '5:00pm' },
    { title: 'Meal service', time: '6:30pm', description: 'Food stations available' },
    { title: 'Cake Cutting', time: '8:00pm' },
    { title: 'Guest Wedding Shuttle for Departure at Leisure', time: '8:30pm', description: 'Loading Location: Balloon Safari\nUnloading Location: Main Guest Parking Lot\nUntil: 10:00pm' },
    { title: 'End of Event', time: '10:00pm', description: 'Guests Escorted from Venue' }
  ]
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
  