
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import profileImg from '@/assets/imgs/logo ob.svg'
</script>

<template>
  <div class="min-h-screen w-full grid grid-rows-[auto_1fr_auto] bg-olive text-white">
    <header class="w-full shadow z-50 bg-moss text-white">
      <div class="wrapper w-full px-4 grid grid-cols-12 gap-4">
        <nav class="col-span-12 md:col-start-2 md:col-span-11 grid grid-cols-3 items-center py-2 gap-10">
          <div class="flex justify-start gap-4">
            <RouterLink to="/" class="nav-link hover:text-gold font-semibold">Home</RouterLink>
            <RouterLink to="/myprojects" class="nav-link hover:text-gold font-semibold">My Projects</RouterLink>
          </div>
          <div class="flex justify-center">
            <img :src="profileImg" alt="Profile" class="w-20 h-auto max-h-16 pb-4" />
          </div>
          <div></div>
        </nav>
      </div>
    </header>
    <main class="w-full">
      <RouterView />
    </main>
    <footer class="w-full bg-moss text-center py-4 mt-4 text-white-85">
      <span>&copy;</span>
    </footer>
  </div>
</template>

<style scoped>
header {
  border-bottom: 1px solid rgba(184, 155, 79, 0.35);
  backdrop-filter: blur(8px);
}

.nav-shell {
  padding: 0.35rem;
  border-radius: 0.85rem;
  background: linear-gradient(180deg, rgba(244, 244, 242, 0.06), rgba(244, 244, 242, 0.02));
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22), inset 0 0 0 1px rgba(244, 244, 242, 0.08);
}

nav a.router-link-exact-active {
  color: var(--color-gold);
  background-color: rgba(184, 155, 79, 0.14);
  box-shadow: inset 0 0 0 1px rgba(184, 155, 79, 0.45), 0 0 18px rgba(184, 155, 79, 0.18);
}
nav a.router-link-exact-active:hover {
  color: var(--color-gold);
}
nav a {
  position: relative;
  display: inline-block;
  padding: 0.45rem 0.9rem;
  border-radius: 0.55rem;
  color: var(--color-white);
  transition: color 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
}
nav a:first-of-type {
  border: 0;
}

nav a::after {
  content: '';
  position: absolute;
  left: 0.75rem;
  right: 0.75rem;
  bottom: 0.2rem;
  height: 2px;
  background-color: var(--color-gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms ease;
}

nav a:hover {
  color: var(--color-gold);
  background-color: rgba(244, 244, 242, 0.08);
}

nav a:hover::after,
nav a.router-link-exact-active::after {
  transform: scaleX(1);
}

nav a:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}
</style>
