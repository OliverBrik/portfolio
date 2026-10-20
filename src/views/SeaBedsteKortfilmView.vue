<script setup>
import { projects } from '@/data/projects'

const project = projects.find((item) => item.id === 1)
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
        <div class="h-64 md:h-[28rem] border-b border-[rgba(184,155,79,0.35)] overflow-hidden">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
        </div>

        <div class="p-6 md:p-8">
          <div class="flex items-start justify-between gap-4 mb-4">
            <h1 class="text-3xl md:text-4xl font-extrabold text-white tracking-wide">Det jeg ser</h1>
            <span class="text-gold font-semibold text-sm md:text-base">{{ project.year }}</span>
          </div>

          <p class="text-gold/90 font-semibold mb-4">{{ project.role }}</p>
          <p class="text-white-85 mb-6 max-w-3xl">{{ project.summary }}</p>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <section class="md:col-span-3">
              <h2 class="text-white text-2xl font-bold mb-3">Projekt Detaljer</h2>
              <p class="text-white-85 mb-3">
                Filmen følger Kim, som opdager at hans bedste ven Lucas og kæresten Maria er kommet sammen i skole.
                Små observationer og andres hvisken får hans jalousi til at vokse, indtil han ikke længere kan skelne mellem virkelighed og sine egne forestillinger.
              </p>
              <p class="text-white-85 mb-3">
                Historien bevæger sig fra hverdagsrealisme til et mere dystert og intenst udtryk, når Kims indre scenarier tager over.
                Kontrasten mellem det, publikum ser i hans fantasi, og det der faktisk sker, er central for filmens dramaturgi.
              </p>
              <p class="text-white-85">
                Produktionen blev lavet i en gruppe med tydelige roller inden for hovedperson, kamera, lyd, lys og statistarbejde.
                Opgaven krævede en færdig film på 8–12 minutter med kamerateknikker, manus og farvekorrektion/farvegrading.
              </p>
              <p class="text-gold/90 font-semibold mt-3">
                Filmen vandt Syddansk Erhvervsakademis pris for bedste kortfilm i 2026.
              </p>

              <section class="mt-6">
                <h2 class="text-white text-xl font-bold mb-3">Værktøjer og fokus</h2>
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
                <p class="text-gold text-sm uppercase tracking-wide mb-3">Filmen</p>
                <h2 class="text-white text-2xl font-bold mb-3">Det jeg ser</h2>
                <p class="text-white-85 text-sm mb-5">
                  Se den færdige kortfilm på YouTube.
                </p>
                <a :href="project.videoUrl" target="_blank" rel="noreferrer" class="project-link text-[var(--color-gold)] font-semibold">
                  Se filmen
                </a>
              </article>
            </section>
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
