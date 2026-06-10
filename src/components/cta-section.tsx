export function CTASection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="px-gutter max-w-container-max mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="text-center md:text-left">
          <p className="mb-3 text-sm font-bold uppercase text-tertiary-fixed">
            Besoin d&apos;un délai ?
          </p>
          <h2 className="text-headline-section font-headline-section mb-2">
            Prêt à faire traduire vos documents ?
          </h2>
          <p className="text-body-lg opacity-80">
            Appelez ou envoyez vos informations sur WhatsApp pour confirmer le
            délai, le tarif et les pièces nécessaires.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#about"
            className="rounded-lg bg-white px-6 py-3 text-center text-sm font-bold text-primary transition hover:opacity-90 active:scale-95"
          >
            Trouver le bureau
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-tertiary-container px-6 py-3 text-center text-sm font-bold text-on-tertiary-container transition hover:opacity-90 active:scale-95"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}
