<template>
  <main
    class="text-center px-6 py-12 animate-fade-in bg-cover bg-center bg-no-repeat min-h-screen"
    style="background-image: url('/leaves.jpg');"
  >
    <div class="bg-white bg-opacity-80 rounded-lg p-8 max-w-2xl mx-auto">
      <section class="mb-12">
        <h1 class="text-5xl font-serif text-pink-600 mb-4">Parker Goetz & Emily Diep's Wedding</h1>

        <h2 class="text-2xl font-serif text-pink-600 mb-2">Wedding Date</h2>
        <p class="text-gray-700 text-lg leading-relaxed mb-4">
          <strong>June 29th</strong>
        </p>

        <h2 class="text-2xl font-serif text-pink-600 mb-2">Location</h2>
        <p class="text-gray-700 text-lg leading-relaxed mb-4">
          <strong>15500 San Pasqual Valley Rd, Escondido, CA, 92027, United States</strong>
        </p>

        <p class="text-gray-700 text-lg leading-relaxed mb-6">
          Thank you for joining us on our special day. Please be sure to
          <router-link to="/rsvp" class="text-pink-500 underline hover:text-pink-600">
            RSVP
          </router-link>
          by June 14th and see below for essential wedding information:
        </p>

        <div class="bg-pink-100 bg-opacity-40 p-4 rounded-md text-center mb-10 border border-pink-200">
          <h2 class="text-xl font-semibold text-pink-600 mb-2">Important Note</h2>
          <p class="text-gray-700 text-md leading-relaxed mb-2">
            All guests will be provided with a ticket to the San Diego Safari Park. Please view the
            <router-link to="/venue" class="text-pink-500 underline hover:text-pink-600">
              Venue tab
            </router-link>
            for more information.
          </p>
          <p class="text-gray-700 text-md leading-relaxed">
            If disability assistance is needed for transportation purposes, please note so on the RSVP form.
          </p>
        </div>
      </section>

      <section id="dress-code" class="mt-8 text-center">
        <h2 class="text-2xl font-serif text-pink-600 mb-4">Dress Code</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Dress code is <strong>WEDDING CASUAL</strong>.<br />
          Please refer to the following link for reference: <br />
          <a
            href="https://www.theknot.com/content/what-to-wear-casual"
            target="_blank"
            class="text-pink-500 underline hover:text-pink-600"
          >
            What to Wear - Wedding Casual
          </a>
          <br /><br />
          We want everyone to be comfortable enough to enjoy the Safari Park!
        </p>
      </section>
    </div>
  </main>
</template>

<script setup>
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
