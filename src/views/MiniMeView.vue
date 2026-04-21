<script setup>
import { projects } from '@/data/projects'

const project = projects.find((item) => item.id === 4)
const miniMeCardImage = '/mini-me-card.jpg'
</script>

<template>
  <main class="pt-2 container mx-auto grid grid-cols-12 gap-4">
    <section class="col-span-12 md:col-start-2 md:col-span-10 px-8 py-6">
      <div class="mb-6">
        <RouterLink to="/myprojects" class="project-link text-[var(--color-gold)] font-semibold">
          Tilbage til projekter
        </RouterLink>
      </div>

      <article v-if="project" class="border-2 border-[var(--color-gold)] bg-moss/45 overflow-hidden">
        <div class="h-64 md:h-[28rem] border-b border-[rgba(184,155,79,0.35)]">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
        </div>

        <div class="p-6 md:p-8">
          <div class="flex items-start justify-between gap-4 mb-4">
            <h1 class="text-3xl md:text-4xl font-extrabold text-white tracking-wide">{{ project.title }}</h1>
            <span class="text-gold font-semibold text-sm md:text-base">{{ project.year }}</span>
          </div>

          <p class="text-gold/90 font-semibold mb-4">{{ project.role }}</p>
          <p class="text-white-85 mb-6 max-w-3xl">{{ project.summary }}</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <section class="md:col-span-2">
              <h2 class="text-white text-2xl font-bold mb-3">Projekt Detaljer</h2>
              <p class="text-white-85 mb-3">
                I Mini-Me projektet arbejdede jeg med karakterdesign og visuel storytelling med udgangspunkt i min egen identitet.
                Målet var at skabe en letgenkendelig digital figur, som kunne bruges pa tværs af portfolio, præsentationer og sociale medier.
              </p>
              <p class="text-white-85 mb-3">
                Processen omfattede skitsering, farvevalg, forenkling af former og iteration i Illustrator og Photoshop,
                så figuren beholdt personlighed men stadig fungerede i forskellige størrelser.
              </p>
              <p class="text-white-85">
                Projektet styrkede min evne til at arbejde med branding, konsistent visuel stil og karakterbaseret kommunikation.
              </p>
            </section>

            <section>
              <h2 class="text-white text-xl font-bold mb-3">Vaerktojer</h2>
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="tool in project.tools"
                  :key="tool"
                  class="text-xs text-white/90 px-2 py-1 border border-[rgba(184,155,79,0.45)] bg-white/5"
                >
                  {{ tool }}
                </li>
              </ul>
            </section>
          </div>

          <section class="mb-8">
            <h2 class="text-white text-2xl font-bold mb-4">Galleri</h2>
            <article class="border border-[rgba(184,155,79,0.45)] bg-white/5 overflow-hidden">
              <div class="h-64 md:h-80 border-b border-[rgba(184,155,79,0.35)]">
                <img :src="miniMeCardImage" alt="Mini-Me billede" class="w-full h-full object-cover" />
              </div>
              <div class="px-4 py-3">
                <p class="text-white font-semibold">Mini-Me Visual</p>
              </div>
            </article>
          </section>

          <div class="flex items-center gap-4">
            <a v-if="project.repoUrl && project.repoUrl !== '#'" :href="project.repoUrl" target="_blank" rel="noreferrer" class="project-link text-[var(--color-gold)] font-semibold">
              Github
            </a>
            <a v-if="project.liveUrl && project.liveUrl !== '#'" :href="project.liveUrl" target="_blank" rel="noreferrer" class="project-link text-[var(--color-gold)] font-semibold">
              Live projekt
            </a>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
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
