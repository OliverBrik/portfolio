<script setup>
import { projects } from '@/data/projects'

const project = projects.find((item) => item.id === 2)
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
                Dette eksamensprojekt blev udviklet som en samlet kampagneoplevelse for teaterstykket Brødrene Løvehjerte.
                Fokus var pa visuel identitet, storytelling og digital formidling pa tværs af platforme.
              </p>
              <p class="text-white-85 mb-3">
                Jeg arbejdede med ideudvikling, UX/UI, frontend og grafisk produktion for at skabe en tydelig og engagerende brugerrejse.
                Det var vigtigt i denne opgave at vi skulle have fokus på målgruppen, da det er et børne og familievenligt stykke, og derfor skulle være let tilgængeligt og indbydende for både børn og voksne.
                Et andet element som vi følte var vigtigt var at bibeholde Astrid Lindgrens orignale kendetegn ved hendes originale bog cover billeder.
                <p class="text-white-85 pt-2">
                    Denne opgave var en fantastisk mulighed for at anvende og integrere forskellige færdigheder og værktøjer, og det var spændende at se, hvordan de forskellige elementer kunne arbejde sammen for at skabe en sammenhængende og effektiv kampagneoplevelse.
                </p>
              </p>
                 <p class="text-white-85 text-bold pt-2">
                    Denne opgave er udarbejdet i samarbejde med min medstuderende Anders Mogensen og Roben Eid, hvor vi delte opgaverne og arbejdede tæt sammen gennem hele processen for at sikre et stærkt og sammenhængende resultat.
                    </p>
                </section>

            <section>
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
          </div>

          <div class="flex items-center gap-4">
            <a v-if="project.repoUrl && project.repoUrl !== '#'" :href="project.repoUrl" target="_blank" rel="noreferrer" class="project-link text-[var(--color-gold)] font-semibold">
              Github
            </a>
            <a v-if="project.reportUrl && project.reportUrl !== '#'" :href="project.reportUrl" target="_blank" rel="noreferrer" class="project-link text-[var(--color-gold)] font-semibold">
              Rapport
            </a>
            <a v-if="project.videoUrl && project.videoUrl !== '#'" :href="project.videoUrl" target="_blank" rel="noreferrer" class="project-link text-[var(--color-gold)] font-semibold">
              Sociale medie Video
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
