<script setup>

</script>

<template>
  <main class="pt-2 container mx-auto grid grid-cols-12 gap-4">
    <div class="col-span-12 md:col-start-2 md:col-span-11 grid grid-cols-12 gap-6 items-start">
      <div class="col-span-12 md:col-span-6 relative flex flex-col items-start px-8 py-6">
        <img
          src="@/assets/imgs/guldklamme2.svg"
          alt=""
          class="select-none absolute left-1 top-7 md:top-8 w-6 md:w-8"
          draggable="false"
        />
          <h1 class="mt-4 md:mt-6 text-4xl md:text-4xl font-extrabold text-white tracking-wide mb-2">OLIVER REFFSØE BRIK</h1>
          <div class="w-full mb-6">
            <span class="block h-1 w-4/5 bg-gold rounded-full"></span>
          </div>

          <p class="mb-2 text-sm text-white-85 max-w-xl">Hej mit navn er Oliver, jeg er 22 år gammel og er i gang med 2. semester på Multimediedesigner uddannelsen på Syddansk Erhvervsakademi. Jeg har en stor interesse for digitale løsninger og arbejder bedst i krydsfeltet mellem design, funktionalitet og visuel kommunikation.</p>
          <p class="mb-2 text-sm text-white-85 max-w-xl">Jeg motiveres af at omsætte idéer til konkrete løsninger og kan godt lide at være med hele vejen, fra de første tanker og skitser til det færdige resultat. For mig handler godt design ikke kun om, at det ser godt ud, men også om at det fungerer, er intuitivt og giver mening for brugeren.</p>
          <p class="mb-4 text-sm text-white-85 max-w-xl">Gennem mit studie og mine projekter har jeg opbygget en struktureret måde at arbejde på, hvor jeg har fokus på kvalitet, detaljer og sammenhæng. Jeg trives i kreative processer, men sætter også pris på klare rammer og formål. Samtidig er jeg nysgerrig af natur og konstant interesseret i at udvikle mig og lære nyt, både fagligt og personligt.</p>
          <a
            href="/Oliver_Brik_CV.pdf"
            download
            class="cv-underline relative inline-block font-semibold text-white py-2 rounded-md transition-colors duration-200 hover:text-gold hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            role="button"
          >
            <span class="relative text-[var(--color-gold)]">Download mit CV</span>
          </a>
           <img
          src="@/assets/imgs/guldklamme.svg"
          alt=""
          class="pointer-events-none select-none absolute right-1 bottom-3 md:bottom-3 w-6 md:w-8"
          draggable="false"
        />
      </div>
      <div class="col-span-12 md:col-span-6 self-start flex items-start justify-center pt-6 md:pr-12">
        <div class="w-full h-96 md:h-[28rem] border-[var(--color-gold)] rounded-none overflow-hidden flex items-center justify-center">
          <img src="@/assets/imgs/Oliver-editedweb3.jpg" alt="Oliver Reffsøe Brik" class="w-full h-full object-cover rounded-none">
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.cv-underline {
  position: relative;
  display: inline-block;
}
.cv-underline::after {
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
  pointer-events: none;
}
.cv-underline:hover::after,
.cv-underline:focus-visible::after {
  transform: scaleX(1);
}
</style>
