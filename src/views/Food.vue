<template>
  <main class="min-h-screen px-4 py-12 max-w-3xl mx-auto animate-fade-in">
    <h1 class="text-4xl font-serif text-pink-600 text-center mb-8">Food</h1>

    <section class="text-center text-gray-700 mb-10 leading-relaxed text-lg">
      <p>
        Food will be provided in the form of appetizers during cocktail hour and an
        all-you-can-eat buffet featuring 3 food stations during the reception. <br />
        The buffet food will be provided for 90 minutes (6:30–8:00 PM). <br /><br />
        <span class="underline font-bold">
          The appetizer and food station menu is featured below:
        </span>
      </p>
    </section>

    <!-- APPETIZER SECTION -->
    <section class="mb-12 text-center">
      <h2 class="text-2xl font-serif text-pink-500 mb-4">Appetizers</h2>
      <div class="space-y-2 text-gray-800 text-lg">
        <p>- African Curry Spiced Samosa (Vegan)</p>
        <p>- Spring Rolls (Vegetarian)</p>
        <p>- Chicken Empanada</p>
      </div>
    </section>

    <!-- PAN-ASIAN STATION -->
    <section class="mb-12 text-center">
      <h2 class="text-2xl font-serif text-pink-500 mb-4">Pan-Asian Station</h2>
      <div class="space-y-2 text-gray-800 text-lg text-center">
        <p>- Edamame Guacamole (Vegan/GF)</p>
        <p>- Served with Wonton Crisps (Vegan)</p>
        <p>- Soba Noodle Salad with Bell Peppers, Peanuts, Carrots, Scallions & Sesame-Ginger Dressing (Vegan)</p>
        <p>- Steamed Jasmine Rice with Hoisin Drizzle, Scallions, & Tuxedo Sesame Seeds (Veg)</p>
        <p>- Crispy Lemon Grass Chicken</p>
        <p>- Kalbi Korean BBQ Ribs (GF)</p>
      </div>
    </section>

    <!-- CARVING STATION -->
    <section class="mb-12 text-center">
      <h2 class="text-2xl font-serif text-pink-500 mb-4">Carving Station</h2>
      <div class="space-y-2 text-gray-800 text-lg">
        <p>- Fresh House-Baked Rolls & Butter (Veg)</p>
        <p>- Seasonal Fresh Vegetables (Vegan/GF)</p>
        <p>- Mashed Potatoes (Veg)</p>
        <p>- Pepper & Garlic Roasted Tri-Tip served with Chimichurri (GF)</p>
        <p>- Seared Roasted New York Loin served with Au Jus & Horseradish Cream (GF)</p>
      </div>
    </section>

    <!-- VEGAN FLATBREAD STATION -->
    <section class="mb-12 text-center">
      <h2 class="text-2xl font-serif text-pink-500 mb-4">Vegan Flatbread Station</h2>
      <div class="space-y-2 text-gray-800 text-lg">
        <p>- White Bean Minestrone (Vegan)</p>
        <p>- Butternut Squash Puree with Greens, Almond Ricotta and Pepitas (Vegan)</p>
        <p>- Tagine Baba Ghanoush with Ratatouille and Spinach (Vegan)</p>
        <p>- Caramelized Onions and Mushrooms with Spicy Tomato-Pepper Jam and Almond Ricotta (Vegan)</p>
        <p>- Roasted Cauliflower with Pistachio-Olive Tapenade (Vegan)</p>
      </div>
    </section>
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
