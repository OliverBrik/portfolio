<script setup>
import { RouterLink } from 'vue-router'
import { projects } from '@/data/projects'
</script>

<template>
  <main class="pt-2 container mx-auto grid grid-cols-12 gap-4">
    <section class="col-span-12 md:col-start-2 md:col-span-10 px-8 py-6">
      <h1 class="text-4xl md:text-4xl font-extrabold text-white tracking-wide mb-2">MINE PROJEKTER</h1>
      <div class="w-full mb-8">
        <span class="block h-1 w-52 bg-gold"></span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="project in projects"
          :key="project.id"
          class="project-card border-2 border-[var(--color-gold)] bg-moss/45 overflow-hidden"
        >
          <div class="h-52 border-b border-[rgba(184,155,79,0.35)]">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-gold/70 text-sm">
              Mere info kommer snart
            </div>
          </div>

          <div class="p-5">
            <div class="flex items-center justify-between gap-3 mb-2">
              <h2 class="text-2xl font-bold text-white leading-tight">{{ project.title }}</h2>
              <span class="text-gold font-semibold text-sm">{{ project.year }}</span>
            </div>

            <p v-if="project.role" class="text-gold/90 font-semibold text-sm mb-3">{{ project.role }}</p>
            <p v-if="project.summary" class="text-white-85 text-sm mb-4">{{ project.summary }}</p>

            <ul v-if="project.tools.length" class="flex flex-wrap gap-2 mb-5">
              <li
                v-for="tool in project.tools"
                :key="tool"
                class="text-xs text-white/90 px-2 py-1 border border-[rgba(184,155,79,0.45)] bg-white/5"
              >
                {{ tool }}
              </li>
            </ul>

            <div class="flex items-center gap-4">
              <RouterLink
                v-if="project.id === 1"
                to="/projects/sea-bedste-kortfilm"
                class="project-link text-[var(--color-gold)] font-semibold"
              >
                Se projekt
              </RouterLink>
              <RouterLink
                v-else-if="project.id === 6"
                to="/projects/mikkelborg-kro"
                class="project-link text-[var(--color-gold)] font-semibold"
              >
                Se projekt
              </RouterLink>
              <RouterLink
                v-else-if="project.id === 2"
                to="/projects/broedrene-loevehjerte"
                class="project-link text-[var(--color-gold)] font-semibold"
              >
                Se projekt
              </RouterLink>
              <RouterLink
                v-else-if="project.id === 3"
                to="/projects/portfolio-website"
                class="project-link text-[var(--color-gold)] font-semibold"
              >
                Se projekt
              </RouterLink>
              <RouterLink
                v-else-if="project.id === 4"
                to="/projects/mini-me"
                class="project-link text-[var(--color-gold)] font-semibold"
              >
                Se projekt
              </RouterLink>
              <RouterLink
                v-else-if="project.id === 5"
                to="/projects/business-de-dk"
                class="project-link text-[var(--color-gold)] font-semibold"
              >
                Se projekt
              </RouterLink>
              <a v-else-if="project.liveUrl && project.liveUrl !== '#'" :href="project.liveUrl" class="project-link text-[var(--color-gold)] font-semibold" target="_blank" rel="noreferrer">
                Se projekt
              </a>
              <a v-if="project.repoUrl && project.repoUrl !== '#'" :href="project.repoUrl" class="project-link text-[var(--color-gold)] font-semibold" target="_blank" rel="noreferrer">
                Github
              </a>
              <a v-if="project.reportUrl" :href="project.reportUrl" class="project-link text-[var(--color-gold)] font-semibold" target="_blank" rel="noreferrer">
                Rapport
              </a>
              <a v-if="project.videoUrl" :href="project.videoUrl" class="project-link text-[var(--color-gold)] font-semibold" target="_blank" rel="noreferrer">
                Film
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.project-card {
  transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.22);
  border-color: rgba(184, 155, 79, 0.95);
}

.project-link {
  position: relative;
  display: inline-block;
}

.project-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.2rem;
  height: 2px;
  background-color: var(--color-gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms ease;
}

.project-link:hover::after,
.project-link:focus-visible::after {
  transform: scaleX(1);
}
</style>
