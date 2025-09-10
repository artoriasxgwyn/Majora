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
*/<template>
  <div class="page-container">
    <header class="header">
      <div class="header-left">
        <div class="logo-container">
          <svg class="logo-svg" fill="none" viewBox="0 0 256 198" xmlns="http://www.w3.org/2000/svg">
            <path d="M204.8 0H256L128 197.12L0 0H101.12L128 44.48L154.88 0H204.8Z" fill="#42b883"></path>
            <path d="M0 0L128 197.12L256 0H204.8L128 123.2L51.2 0H0Z" fill="#35495e"></path>
            <path d="M51.2 0L128 123.2L204.8 0H154.88L128 44.48L101.12 0H51.2Z" fill="#42b883"></path>
          </svg>
          <h1 class="title">Vue.js Manual</h1>
        </div>
        <nav class="nav-links">
          <a class="nav-link" href="#">Guide</a>
          <a class="nav-link" href="#">API</a>
          <a class="nav-link" href="#">Examples</a>
          <a class="nav-link" href="#">Ecosystem</a>
        </nav>
      </div>
      <div class="header-right">
        <div class="search-container">
          <span class="material-symbols-outlined search-icon">search</span>
          <input class="search-input" placeholder="Search"/>
        </div>
        <button class="icon-button mobile-search-button">
          <span class="material-symbols-outlined">search</span>
        </button>
        <button class="icon-button">
          <span class="material-symbols-outlined">help</span>
        </button>
        <button class="icon-button">
          <span class="material-symbols-outlined">dark_mode</span>
        </button>
        <div class="user-avatar-container">
          <div class="user-avatar" style='background-image: url("https://lh3.googleusercontent.com/a/ACg8ocJ_6i7a_2l3m-3E0x0v8z-3z0q-5yGg4A3d2D1J8c=s96-c");'></div>
        </div>
      </div>
    </header>

    <main class="main-content">
      <div class="container">
        <div class="hero-section">
          <h1 class="hero-title">Vue.js Manual</h1>
          <p class="hero-subtitle">
            Your comprehensive guide to building amazing web applications with Vue.js.
          </p>
        </div>

        <div class="cards-grid">
          <a v-for="card in manualSections" :key="card.title" class="card" href="#">
            <div :class="['card-icon-wrapper', card.colorClass]">
              <span class="material-symbols-outlined">{{ card.icon }}</span>
            </div>
            <div>
              <h2 class="card-title">{{ card.title }}</h2>
              <p class="card-description">{{ card.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Data for the cards, making it easy to add, remove, or change them
const manualSections = ref([
  { title: 'Introduction', description: 'Start your journey.', icon: 'auto_stories', colorClass: 'color-green' },
  { title: 'Essentials', description: 'Core concepts.', icon: 'code', colorClass: 'color-blue' },
  { title: 'Components In-Depth', description: 'Building blocks.', icon: 'layers', colorClass: 'color-purple' },
  { title: 'Reactivity In-Depth', description: 'The magic behind Vue.', icon: 'psychology', colorClass: 'color-yellow' },
  { title: 'Built-in Components', description: 'Out-of-the-box power.', icon: 'view_cozy', colorClass: 'color-red' },
  { title: 'Template Syntax', description: 'Declarative rendering.', icon: 'terminal', colorClass: 'color-indigo' },
  { title: 'API Reference', description: 'Detailed docs.', icon: 'api', colorClass: 'color-pink' },
  { title: 'Examples', description: 'See it in action.', icon: 'integration_instructions', colorClass: 'color-gray' },
  { title: 'Ecosystem', description: 'Tools and libraries.', icon: 'group_work', colorClass: 'color-teal' },
  { title: 'Migration', description: 'From older versions.', icon: 'upgrade', colorClass: 'color-orange' },
  { title: 'Best Practices', description: 'Write better code.', icon: 'thumb_up', colorClass: 'color-cyan' },
  { title: 'Troubleshooting', description: 'Solve common issues.', icon: 'build', colorClass: 'color-lime' },
]);
</script>

<style scoped>
/* ===== GENERAL STYLES & VARIABLES ===== */
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

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

/* ===== HEADER STYLES ===== */
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  border-bottom: 1px solid #e5e7eb; /* border-gray-200 */
  background-color: rgba(255, 255, 255, 0.8); /* bg-white/80 */
  padding: 0.75rem 2.5rem; /* py-3 px-10 */
  backdrop-filter: blur(4px);
}

.header-left, .header-right, .logo-container {
  display: flex;
  align-items: center;
  gap: 2rem; /* gap-8 */
}

.logo-container {
  gap: 0.75rem; /* gap-3 */
}

.logo-svg {
  height: 2rem; /* h-8 */
  width: 2rem; /* w-8 */
}

.title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 700; /* font-bold */
  letter-spacing: -0.025em; /* tracking-tight */
  color: #1f2937; /* text-gray-800 */
}

.nav-links {
  display: none; /* hidden by default */
  align-items: center;
  gap: 2rem; /* gap-8 */
}

.nav-link {
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color: #4b5563; /* text-gray-600 */
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #111827; /* hover:text-gray-900 */
}

.header-right {
  gap: 1rem; /* gap-4 */
}

.search-container {
  position: relative;
  display: none; /* hidden by default */
}

.search-icon {
  position: absolute;
  left: 0.75rem; /* left-3 */
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af; /* text-gray-400 */
}

.search-input {
  width: 100%;
  min-width: 10rem; /* min-w-40 */
  max-width: 16rem; /* max-w-64 */
  border-radius: 9999px; /* rounded-full */
  border: 1px solid #d1d5db; /* border-gray-300 */
  background-color: #f3f4f6; /* bg-gray-100 */
  padding-left: 2.5rem; /* pl-10 */
  font-size: 0.875rem; /* text-sm */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6; /* focus:border-blue-500 */
  box-shadow: 0 0 0 1px #3b82f6; /* focus:ring-blue-500 */
}

.icon-button {
  padding: 0.5rem; /* p-2 */
  border-radius: 9999px; /* rounded-full */
  color: #6b7280; /* text-gray-500 */
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.icon-button:hover {
  background-color: #f3f4f6; /* hover:bg-gray-100 */
  color: #1f2937; /* hover:text-gray-800 */
}

.mobile-search-button {
  display: block; /* Shown by default */
}

.user-avatar {
  height: 2.5rem; /* h-10 */
  width: 2.5rem; /* w-10 */
  border-radius: 9999px; /* rounded-full */
  background-size: cover;
  background-position: center;
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