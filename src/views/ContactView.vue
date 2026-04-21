<template>
  <main class="pt-2 container mx-auto grid grid-cols-12 gap-4">
    <section class="col-span-12 md:col-start-2 md:col-span-10 px-8 py-6">
      <h1 class="text-4xl md:text-4xl font-extrabold text-white tracking-wide mb-2">KONTAKT</h1>
      <div class="w-full mb-8">
        <span class="block h-1 w-40 bg-gold"></span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article class="border-2 border-[var(--color-gold)] bg-moss/45 p-6">
          <h2 class="text-2xl font-bold text-white mb-3">Lad os tage en snak</h2>
          <p class="text-white-85 mb-6 max-w-xl">
            Du er altid velkommen til at kontakte mig omkring praktik, projektsamarbejde eller jobmuligheder.
            Jeg svarer hurtigt og er åben for nye muligheder.
          </p>

          <div class="flex flex-col gap-4">
            <a href="mailto:oliver.r.brik@gmail.com" class="contact-link text-[var(--color-gold)] font-semibold">
              oliver.r.brik@gmail.com
            </a>
            <a href="tel:+4528198939" class="contact-link text-[var(--color-gold)] font-semibold">
              +45 28 19 89 39
            </a>
            <a href="https://www.linkedin.com/in/oliver-brik/" target="_blank" rel="noreferrer" class="contact-link text-[var(--color-gold)] font-semibold">
              LinkedIn
            </a>
            <a href="https://github.com/oliverbrik" target="_blank" rel="noreferrer" class="contact-link text-[var(--color-gold)] font-semibold">
              GitHub
            </a>
          </div>
        </article>

        <article class="border-2 border-[var(--color-gold)] bg-moss/45 p-6">
          <h2 class="text-2xl font-bold text-white mb-3">Info</h2>
          <p class="text-white-85 mb-4">
            Base: Esbjerg, Danmark
          </p>
          <p class="text-white-85 mb-4">
            Uddannelse: Multimediedesigner (2. semester)
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-link {
  position: relative;
  display: inline-block;
  width: fit-content;
}

.contact-link::after {
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

.contact-link:hover::after,
.contact-link:focus-visible::after {
  transform: scaleX(1);
}
</style>
