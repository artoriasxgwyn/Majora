<template>
  <a
    href="#"
    class="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <div :class="`flex h-12 w-12 items-center justify-center rounded-full bg-${color}-100 text-${color}-600`">
      <span class="material-symbols-outlined">{{ icon }}</span>
    </div>
    <div>
      <h2 class="text-lg font-bold">{{ title }}</h2>
      <p class="text-sm text-gray-500">{{ desc }}</p>
    </div>
  </a>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  desc: String,
  color: String,
});
</script>
