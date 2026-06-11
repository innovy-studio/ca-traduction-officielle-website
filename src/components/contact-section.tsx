import {
  MdCall,
  MdOutlineChat,
  MdOutlineEmail,
  MdOutlineSchedule,
} from "react-icons/md";

export function ContactSection() {
  return (
    <section id="contact" className="bg-surface py-section-gap">
      <div className="mx-auto grid max-w-container-max gap-12 px-gutter lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-secondary">
            Contact
          </p>

          <h2 className="mb-4 font-headline-section text-headline-section text-primary">
            Commencez votre traduction maintenant.
          </h2>

          <p className="text-body-md text-on-surface-variant">
            Préparez une photo ou un scan lisible de vos documents. Nous vous
            répondrons rapidement avec les informations nécessaires avant le
            dépôt ou le retrait.
          </p>

          <div className="mt-8 rounded-2xl border border-outline-variant bg-surface-container p-5">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tertiary-container text-on-tertiary-container">
                <MdOutlineSchedule className="text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-primary">Réponse rapide</h3>

                <p className="mt-1 text-sm text-on-surface-variant">
                  Indiquez la langue, le type de document et le délai souhaité
                  pour recevoir une estimation plus précise.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <a
            href="tel:+213659534458"
            className="group flex items-center gap-5 rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <MdOutlineChat className="text-3xl" />
            </div>

            <div>
              <p className="text-sm font-bold uppercase text-on-surface-variant">
                WhatsApp et Téléphone
              </p>
              <p className="mt-1 text-xl font-bold text-primary">
                +213 659 53 44 58
              </p>
            </div>
          </a>

          <a
            href="tel:+213554108215"
            className="group flex items-center gap-5 rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <MdCall className="text-3xl" />
            </div>

            <div>
              <p className="text-sm font-bold uppercase text-on-surface-variant">
                Téléphone
              </p>
              <p className="mt-1 text-xl font-bold text-primary">
                +213 554 10 82 15
              </p>
            </div>
          </a>

          <a
            href="mailto:chelhatraduction@gmail.com"
            className="group flex items-center gap-5 rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <MdOutlineEmail className="text-3xl" />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-bold uppercase text-on-surface-variant">
                E-mail
              </p>
              <p className="mt-1 truncate text-lg font-bold text-primary">
                chelhatraduction@gmail.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
