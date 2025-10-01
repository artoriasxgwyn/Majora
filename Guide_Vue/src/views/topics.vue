
<template>
  <div class="page-container">

    <main class="main-content">
      <div class="container">
        <div class="hero-section">
          <h1 class="hero-title">Vue.js Manual</h1>
          <p class="hero-subtitle">
            Your comprehensive guide to building amazing web applications with Vue.js.
          </p>
        </div>

        <div class="cards-grid">
          <a v-for="card in manualSections" :key="card.title" class="card" >
              <div :class="['card-icon-wrapper', card.colorClass]">
              <span class="material-symbols-outlined">{{ card.icon }}</span>
            </div>
            <router-link class="tolink" :to="card.tolink">
            <div>
              <h2 class="card-title">{{ card.title }}</h2>
              <p class="card-description">{{ card.description }}</p>
            </div>
            </router-link>
           
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
/*
1.Que es vue
2.Requisitos
3.Creación de proyecto
4.Interpolacion
5.Directivas de vue
6.Options Api
7.Composition Api
8.Ciclo de vida de vue
9.Componentes importación
10.Componetizacion Props
11.Creación de un proyecto template quasar
12.Instalar Quasar en un proyecto ya creado
13.Vue router
14.Pinia
15.Pinia-plugin-presistedstate
*/
// Data for the cards, making it easy to add, remove, or change them
const manualSections = ref([
  { title: 'Que es vue', description: 'Breve repaso de vue', icon: 'auto_stories', colorClass: 'color-green' ,tolink:"/whatIs" },
  { title: 'Requisitos', description: 'Que necesito para usar vue', icon: 'code', colorClass: 'color-blue',tolink:"/requirements" },
  { title: 'Creacion de Proyecto', description: 'Building blocks.', icon: 'layers', colorClass: 'color-purple',tolink:"/createProject" },
  { title: 'Interpolacion', description: 'The magic behind Vue.', icon: 'psychology', colorClass: 'color-yellow' ,tolink:"/interpolation"},
  { title: 'Directivas de vue', description: 'Out-of-the-box power.', icon: 'view_cozy', colorClass: 'color-red' ,tolink:"/directivesVue"},
  { title: 'Options Api', description: 'Declarative rendering.', icon: 'terminal', colorClass: 'color-indigo',tolink:"/optionsApi" },
  { title: 'Composition api', description: 'Detailed docs.', icon: 'api', colorClass: 'color-pink',tolink:"/compositionApi" },
  { title: 'Ciclo de vida de vue', description: 'See it in action.', icon: 'integration_instructions', colorClass: 'color-gray',tolink:"/cicleOfLife" },
  { title: 'Componentes importacion', description: 'Tools and libraries.', icon: 'group_work', colorClass: 'color-teal' ,tolink:"/importComponents"},
  { title: 'Componetizacion Props', description: 'From older versions.', icon: 'upgrade', colorClass: 'color-orange' ,tolink:"/props"},
  { title: 'Creación de un proyecto template quasar', description: 'Write better code.', icon: 'thumb_up', colorClass: 'color-cyan' ,tolink:"/templateQuasar"},
  { title: 'Instalar Quasar en un proyecto ya creado', description: 'Solve common issues.', icon: 'build', colorClass: 'color-lime' ,tolink:"/whatIs"},
  { title: 'Vue router', description: 'Solve common issues.', icon: 'route', colorClass: 'color-red' ,tolink:"/whatIs"},
  { title: 'Pinia', description: 'Solve common issues.', icon: 'indeterminate_check_box', colorClass: 'color-teal' ,tolink:"/whatIs"},
  { title: 'Pinia-plugin-presistedstate', description: 'Solve common issues.', icon: 'extension', colorClass: 'color-indigo' ,tolink:"/whatIs"},
]);
</script>

<style scoped>
/* ===== GENERAL STYLES & VARIABLES ===== */
.tolink{
 text-decoration: none;
 color: black;
}

:root {
  --primary-color: #f9f506;
}

.page-container {
  min-height: 100vh;
  background-color: #f9fafb; /* bg-gray-50 */
  color: #111827; /* text-gray-900 */
  font-family: "Spline Sans", "Noto Sans", sans-serif;
  display: flex;
  flex-direction: column;
}

.header-right {
  gap: 1rem; /* gap-4 */
}



/* ===== MAIN CONTENT STYLES ===== */
.main-content {
  flex-grow: 1;
}

.container {
  max-width: 80rem; /* Corresponds to Tailwind's container */
  margin-left: auto;
  margin-right: auto;
  padding: 3rem 1rem; /* py-12 px-4 */
}

.hero-section {
  max-width: 56rem; /* max-w-4xl */
  margin: 0 auto 3rem auto; /* mb-12 */
  text-align: center;
}

.hero-title {
  font-size: 3rem; /* text-5xl */
  font-weight: 800; /* font-extrabold */
  letter-spacing: -0.05em; /* tracking-tighter */
  color: #111827; /* text-gray-900 */
}

.hero-subtitle {
  margin-top: 1rem; /* mt-4 */
  font-size: 1.125rem; /* text-lg */
  color: #4b5563; /* text-gray-600 */
}

/* ===== CARDS GRID STYLES ===== */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* grid-cols-1 */
  gap: 1.5rem; /* gap-6 */
}

.card {
  display: flex;
  align-items: center;
  gap: 1rem; /* gap-4 */
  border-radius: 0.75rem; /* rounded-xl */
  border: 1px solid #e5e7eb; /* border-gray-200 */
  background-color: #ffffff; /* bg-white */
  padding: 1.25rem; /* p-5 */
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); /* shadow-sm */
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: inherit;
}

.card:hover {
  transform: translateY(-0.25rem); /* hover:-translate-y-1 */
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); /* hover:shadow-lg */
}

.card-icon-wrapper {
  display: flex;
  height: 3rem; /* h-12 */
  width: 3rem; /* w-12 */
  align-items: center;
  justify-content: center;
  border-radius: 9999px; /* rounded-full */
}

.card-title {
  font-size: 1.125rem; /* text-lg */
  font-weight: 700; /* font-bold */
}

.card-description {
  font-size: 0.875rem; /* text-sm */
  color: #6b7280; /* text-gray-500 */
}

/* Color utility classes for cards */
.color-green { background-color: #d1fae5; color: #059669; }
.color-blue { background-color: #dbeafe; color: #2563eb; }
.color-purple { background-color: #ede9fe; color: #7c3aed; }
.color-yellow { background-color: #fef3c7; color: #ca8a04; }
.color-red { background-color: #fee2e2; color: #dc2626; }
.color-indigo { background-color: #e0e7ff; color: #4f46e5; }
.color-pink { background-color: #fce7f3; color: #db2777; }
.color-gray { background-color: #f3f4f6; color: #4b5563; }
.color-teal { background-color: #ccfbf1; color: #0d9488; }
.color-orange { background-color: #ffedd5; color: #ea580c; }
.color-cyan { background-color: #cffafe; color: #0891b2; }
.color-lime { background-color: #ecfccb; color: #65a30d; }

/* ===== RESPONSIVE DESIGN (Media Queries) ===== */
@media (min-width: 640px) { /* sm breakpoint */
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .hero-title {
    font-size: 3.75rem; /* sm:text-6xl */
  }
  .cards-grid {
    grid-template-columns: repeat(2, 1fr); /* sm:grid-cols-2 */
  }
}

@media (min-width: 768px) { /* md breakpoint */
  .nav-links {
    display: flex; /* md:flex */
  }
}

@media (min-width: 1024px) { /* lg breakpoint */
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .search-container {
    display: block; /* lg:block */
  }
  .mobile-search-button {
    display: none; /* lg:hidden */
  }
  .cards-grid {
    grid-template-columns: repeat(3, 1fr); /* lg:grid-cols-3 */
  }
}
</style>