<script setup>
import { projects } from '@/data/projects'

const project = projects.find((item) => item.id === 5)
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
        <div class="h-64 md:h-[28rem] border-b border-[rgba(184,155,79,0.35)] bg-[#f4f1e9] overflow-hidden">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="p-6 md:p-8">
          <div class="flex items-start justify-between gap-4 mb-4">
            <h1 class="text-3xl md:text-4xl font-extrabold text-white tracking-wide">{{ project.title }}</h1>
            <span class="text-gold font-semibold text-sm md:text-base">{{ project.year }}</span>
          </div>

          <p class="text-gold/90 font-semibold mb-4">{{ project.role }}</p>
          <p class="text-white-85 mb-6 max-w-3xl">{{ project.summary }}</p>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <section class="md:col-span-3">
              <h2 class="text-white text-2xl font-bold mb-3">Projekt Detaljer</h2>
              <p class="text-white-85 mb-3">
                I projektet arbejdede vi med at udvikle en overskuelig og brugervenlig platform for Business DE-DK.
                Løsningen samler information og indgange til nyheder, events, jobportal og kontakt, så brugeren hurtigt kan finde den relevante vej videre.
              </p>
              <p class="text-white-85 mb-3">
                Fokus var på at skabe en tydelig informationsarkitektur og et visuelt udtryk, der understøtter organisationens arbejde med forbindelser,
                muligheder og samarbejde på tværs af grænsen.
              </p>
              <p class="text-white-85">
                Projektet omfattede research, UX/UI, udvikling og afprøvning af den færdige løsning.
                Den fulde arbejdsproces og rapport kan ses i PDF'en nedenfor.
              </p>

              <section class="mt-6">
                <h2 class="text-white text-xl font-bold mb-3">Værktøjer</h2>
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
            </section>

            <section class="md:col-span-2">
              <article class="w-full border border-[rgba(184,155,79,0.45)] bg-white/5 p-5">
                <p class="text-gold text-sm uppercase tracking-wide mb-3">Live projekt</p>
                <h2 class="text-white text-2xl font-bold mb-3">Business DE-DK</h2>
                <p class="text-white-85 text-sm mb-5">
                  Besøg den færdige platform og se projektets brugerflade i praksis.
                </p>
                <a :href="project.liveUrl" target="_blank" rel="noreferrer" class="project-link text-[var(--color-gold)] font-semibold">
                  Åbn live siden
                </a>
              </article>
            </section>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <a :href="project.liveUrl" target="_blank" rel="noreferrer" class="project-link text-[var(--color-gold)] font-semibold">
              Live projekt
            </a>
            <a :href="project.reportUrl" target="_blank" rel="noreferrer" class="project-link text-[var(--color-gold)] font-semibold">
              Se eksamensrapport (PDF)
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
