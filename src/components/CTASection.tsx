export function CTASection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="px-gutter max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-headline-section font-headline-section mb-2">
            Prêt à faire traduire vos documents ?
          </h2>
          <p className="text-body-lg opacity-80">
            Rejoignez des centaines de clients satisfaits à Koléa et au-delà.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="#about"
            className="bg-white text-primary px-8 py-3 text-label-caps font-bold rounded-sm btn-hover-scale"
          >
            Visitez-nous
          </a>
          <a
            href="#contact"
            className="bg-tertiary-container text-on-tertiary-container px-8 py-3 text-label-caps font-bold rounded-sm btn-hover-scale"
          >
            Demandez un devis
          </a>
        </div>
      </div>
    </section>
  );
}
