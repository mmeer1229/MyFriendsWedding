<template>
  <div>
    <nav
  class="bg-amber-50 border-b-4 border-pink-300 shadow-md p-6
         grid grid-cols-2 gap-4 text-lg font-serif
         md:flex md:justify-center md:space-x-8 md:space-y-0 md:grid-cols-none"
>
  <router-link to="/" class="hover:text-pink-500">Home</router-link>
  <router-link to="/rsvp" class="hover:text-pink-500">RSVP</router-link>
  <router-link to="/food" class="hover:text-pink-500">Food</router-link>
  <router-link to="/venue" class="hover:text-pink-500">Venue</router-link>
  <router-link to="/schedule" class="hover:text-pink-500">Schedule</router-link>
  <router-link to="/registry" class="hover:text-pink-500">Registry</router-link>
</nav>
    <router-view />
  </div>
</template>
