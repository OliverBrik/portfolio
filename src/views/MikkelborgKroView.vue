<script setup>
import { projects } from '@/data/projects'

const project = projects.find((item) => item.id === 6)
const basePath = '/mikkelborg/'
const mockups = [
  { file: 'Mikkelborg_kro_Skilt_mockup.png', label: 'Skilt og facade' },
  { file: 'Mikkelborg_Mockup_02_serviet.png', label: 'Serviet' },
  { file: 'Mikkelborg_Mockup_03_glas.png', label: 'Glas' },
  { file: 'Mikkelborg_Mockup_04_tshirt.png', label: 'T-shirt' },
]
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
        <div class="h-64 md:h-[28rem] border-b border-[rgba(184,155,79,0.35)] bg-white flex items-center justify-center p-8">
          <img :src="project.image" :alt="project.title" class="max-w-full max-h-full object-contain" />
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
              <h2 class="text-white text-2xl font-bold mb-3">Designproces</h2>
              <p class="text-white-85 mb-3">
                Projektet tager udgangspunkt i at skabe en genkendelig og sammenhængende identitet for Mikkelborg Kro.
                Jeg arbejdede med at udvikle et logo, der kan fungere både digitalt og på fysiske materialer.
              </p>
              <p class="text-white-85 mb-3">
                Undervejs blev identiteten afprøvet i forskellige størrelser, farvevarianter og situationer.
                På den måde kunne designet vurderes i en realistisk kontekst og justeres, så det fungerer på tværs af touchpoints.
              </p>
              <p class="text-white-85">
                De færdige mockups viser, hvordan logoet kan bruges på blandt andet skiltning, servietter, glas og tøj.
                Designprocessen er samlet i PDF'en nedenfor.
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
              <article class="w-full border border-[rgba(184,155,79,0.45)] bg-white/5 overflow-hidden">
                <div class="aspect-[3/2] overflow-hidden border-b border-[rgba(184,155,79,0.35)] bg-black/10">
                  <img :src="`${basePath}${mockups[0].file}`" :alt="mockups[0].label" class="mockup-image w-full h-full object-cover" />
                </div>
                <div class="px-4 py-3">
                  <p class="text-white font-semibold">{{ mockups[0].label }}</p>
                </div>
              </article>
            </section>
          </div>

          <h2 class="text-white text-2xl font-bold mb-4">Identiteten i brug</h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <article
              v-for="mockup in mockups.slice(1)"
              :key="mockup.file"
              class="border border-[rgba(184,155,79,0.45)] bg-white/5 overflow-hidden"
            >
              <div class="aspect-[3/2] overflow-hidden bg-black/10">
                <img :src="`${basePath}${mockup.file}`" :alt="mockup.label" class="mockup-image w-full h-full object-cover" />
              </div>
              <p class="px-4 py-3 text-white font-semibold">{{ mockup.label }}</p>
            </article>
          </div>

          <a
            :href="project.designProcessUrl"
            target="_blank"
            rel="noreferrer"
            class="project-link text-[var(--color-gold)] font-semibold"
          >
            Se hele designprocessen (PDF)
          </a>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.mockup-image {
  transform: scale(1.06);
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
