<template>
  <main class="min-h-screen px-4 py-12 max-w-2xl mx-auto animate-fade-in">
    <h1 class="text-4xl font-serif text-pink-600 text-center mb-8">RSVP</h1>

    <form
      target="hidden_iframe"
      method="POST"
      action="https://docs.google.com/forms/d/e/1FAIpQLSfJL-KwZF1J_8BxZZ4rh9QtWrsLK8aRDXQTQz949p4b5XlpFA/formResponse"
      class="flex flex-col gap-8 bg-white p-8 rounded-2xl shadow-2xl"
      @submit.prevent="handleSubmit"
    >
      <!-- First Name -->
      <div class="flex flex-col gap-2">
        <label class="text-gray-800 font-semibold">First Name (Head of Household)</label>
        <input
          name="entry.1373300642"
          v-model="firstName"
          type="text"
          required
          class="input"
        />
      </div>

      <!-- Last Name -->
      <div class="flex flex-col gap-2">
        <label class="text-gray-800 font-semibold">Last Name (Head of Household)</label>
        <input
          name="entry.115010123"
          v-model="lastName"
          type="text"
          required
          class="input"
        />
      </div>

      <!-- Email -->
      <div class="flex flex-col gap-2">
        <label class="text-gray-800 font-semibold">Email</label>
        <input
          name="entry.509469622"
          v-model="email"
          type="email"
          required
          class="input"
        />
      </div>

      <!-- Number of Family Members -->
      <div class="flex flex-col gap-2">
        <label class="text-gray-800 font-semibold">Number of additional members in your party</label>
        <input
          name="entry.1608897237"
          v-model.number="familyCount"
          type="number"
          min="0"
          required
          class="input"
        />
      </div>

      <!-- Family Members -->
      <div
        v-for="(member, index) in familyMembers"
        :key="index"
        class="flex flex-col gap-2 pt-6"
      >
        <label class="font-semibold text-gray-800">Family Member {{ index + 1 }}</label>
        <input
          v-model="familyMembers[index].name"
          type="text"
          placeholder="Full Name"
          required
          class="input"
        />
        <select
          v-model="familyMembers[index].relation"
          required
          class="input"
        >
          <option value="" disabled>Select Relation</option>
          <option value="Spouse">Spouse</option>
          <option value="Child">Child</option>
          <option value="Approved Plus One">Approved Plus One</option>
        </select>
      </div>

      <!-- ADA Assistance -->
      <div class="flex flex-col gap-2">
        <label class="text-gray-800 font-semibold">ADA Assistance Needed?</label>
        <select
          name="entry.1765855976"
          v-model="ada"
          required
          class="input"
        >
          <option value="" disabled>Select One</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      
      <input type="hidden" name="entry.12317715" :value="combinedFamilyMembers" />

      <button
        type="submit"
        class="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition transform hover:-translate-y-1 hover:scale-105"
      >
        Submit RSVP
      </button>
    </form>

    <iframe name="hidden_iframe" style="display: none;"></iframe>
  </main>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const familyCount = ref(0)
const ada = ref('')
const familyMembers = ref([])
const combinedFamilyMembers = ref('')

watch(familyCount, (count) => {
  if (count > 0) {
    while (familyMembers.value.length < count) {
      familyMembers.value.push({ name: '', relation: '' })
    }
    while (familyMembers.value.length > count) {
      familyMembers.value.pop()
    }
  } else {
    familyMembers.value = []
  }
})

const prepareFamilyMembers = () => {
  combinedFamilyMembers.value = familyMembers.value
    .map(m => `${m.name} (${m.relation})`)
    .join('\n')
}

const handleSubmit = async (e) => {
  prepareFamilyMembers()
  await nextTick()

  if (!firstName.value.trim() || !lastName.value.trim() || !email.value.trim()) {
    alert('Please fill out all required fields.')
    return
  }

  if (familyCount.value > 0) {
    for (let i = 0; i < familyMembers.value.length; i++) {
      const m = familyMembers.value[i]
      if (!m.name.trim() || !m.relation) {
        alert(`Please complete all info for Family Member ${i + 1}`)
        return
      }
    }
  }

  if (!ada.value) {
    alert('Please select if ADA assistance is needed.')
    return
  }

  e.target.closest('form').submit()

  setTimeout(() => {
    window.location.href = '/confirmation'
  }, 1000)
}
</script>

<style scoped>
.input {
  @apply border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition;
}

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
