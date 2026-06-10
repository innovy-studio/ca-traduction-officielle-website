import { MdCall, MdOutlineChat, MdOutlineSchedule } from "react-icons/md";

export function ContactSection() {
  return (
    <section id="contact" className="py-section-gap bg-surface">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-secondary">
              Contact
            </p>
            <h2 className="text-headline-section font-headline-section text-primary mb-4">
              Commencez votre traduction maintenant.
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Préparez une photo ou un scan lisible de vos documents. Nous vous
              répondrons avec les informations utiles avant le dépôt ou le
              retrait au bureau.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="tel:+213659534458"
              className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <MdOutlineChat className="text-2xl" />
              </div>
              <p className="text-sm font-bold uppercase text-on-surface-variant">
                WhatsApp et téléphone
              </p>
              <p className="mt-2 text-xl font-bold text-primary">
                +213 659 53 44 58
              </p>
            </a>

            <a
              href="tel:+213554108215"
              className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <MdCall className="text-2xl" />
              </div>
              <p className="text-sm font-bold uppercase text-on-surface-variant">
                Téléphone
              </p>
              <p className="mt-2 text-xl font-bold text-primary">
                +213 554 10 82 15
              </p>
            </a>

            <div className="rounded-lg border border-outline-variant bg-surface-container p-6 sm:col-span-2">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-tertiary-container text-on-tertiary-container">
                  <MdOutlineSchedule className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Réponse rapide</h3>
                  <p className="mt-1 text-on-surface-variant">
                    Indiquez la langue, le type de document et le délai souhaité
                    pour obtenir une réponse plus précise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
