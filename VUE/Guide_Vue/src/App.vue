<template>
  <div>
    <header class="header">
      <div class="header-left">
        <router-link to="/" class="tolink">
          <div class="logo-container">
            <svg
              class="logo-svg"
              fill="none"
              viewBox="0 0 256 198"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M204.8 0H256L128 197.12L0 0H101.12L128 44.48L154.88 0H204.8Z"
                fill="#42b883"
              ></path>
              <path
                d="M0 0L128 197.12L256 0H204.8L128 123.2L51.2 0H0Z"
                fill="#35495e"
              ></path>
              <path
                d="M51.2 0L128 123.2L204.8 0H154.88L128 44.48L101.12 0H51.2Z"
                fill="#42b883"
              ></path>
            </svg>
            <h1 class="title">Vue.js Manual</h1>
          </div></router-link
        >
        <nav class="nav-links">
          <a class="nav-link" href="#">Guide</a>
          <a class="nav-link" href="#">API</a>
          <a class="nav-link" href="#">Examples</a>
          <a class="nav-link" href="#">Ecosystem</a>
        </nav>
      </div>
      <div class="header-right">
        <button class="icon-button">
          <span class="material-symbols-outlined">help</span>
        </button>
        <button class="icon-button">
          <span class="material-symbols-outlined">dark_mode</span>
        </button>
        <div class="user-avatar-container">
          <div
            class="user-avatar"
            style="
              background-image: url('https://lh3.googleusercontent.com/a/ACg8ocJ_6i7a_2l3m-3E0x0v8z-3z0q-5yGg4A3d2D1J8c=s96-c');
            "
          ></div>
        </div>
      </div>
    </header>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.tolink{
 text-decoration: none;
 color: black;
}
.title {
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #1f2937;
}

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
  padding: 0px 0px 0px 2%;
  backdrop-filter: blur(4px);
}

.header-left,
.header-right,
.logo-container {
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

.nav-links {
  display: none; /* hidden by default */
  align-items: center;
  gap: 2rem; /* gap-8 */
}

.nav-link {
  font-size: 1rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color: #4b5563; /* text-gray-600 */
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #111827; /* hover:text-gray-900 */
}

.user-avatar {
  height: 2.5rem; /* h-10 */
  width: 2.5rem; /* w-10 */
  border-radius: 9999px; /* rounded-full */
  background-size: cover;
  background-position: center;
}

.icon-button {
  font-size: 1.5rem;
  padding: 0.5rem; /* p-2 */
  border-radius: 9999px; /* rounded-full */
  color: #6b7280; /* text-gray-500 */
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.icon-button:hover {
  font-size: 2rem;
  background-color: #f3f4f6; /* hover:bg-gray-100 */
  color: #1f2937; /* hover:text-gray-800 */
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}

.search-container {
  position: relative;
  /* hidden by default */
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

.mobile-search-button {
  display: block; /* Shown by default */
}
</style>