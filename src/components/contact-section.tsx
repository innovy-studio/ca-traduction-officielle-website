import {
  MdCall,
  MdOutlineChat,
  MdOutlineEmail,
  MdOutlineSchedule,
} from "react-icons/md";

export function ContactSection() {
  return (
    <section id="contact" className="bg-surface py-12 sm:py-section-gap">
      <div className="mx-auto grid max-w-container-max gap-10 px-gutter lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-secondary">
            Contact
          </p>

          <h2 className="mb-4 text-2xl sm:text-3xl lg:text-headline-section font-headline-section text-primary">
            Commencez votre traduction maintenant.
          </h2>

          <p className="text-sm sm:text-body-md text-on-surface-variant">
            Préparez une photo ou un scan lisible de vos documents. Nous vous
            répondrons rapidement avec les informations nécessaires avant le
            dépôt ou le retrait.
          </p>

          <div className="mt-6 sm:mt-8 rounded-2xl border border-outline-variant bg-surface-container p-4 sm:p-5">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-tertiary-container text-on-tertiary-container">
                <MdOutlineSchedule className="text-xl sm:text-2xl" />
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-primary">
                  Réponse rapide
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-on-surface-variant">
                  Indiquez la langue, le type de document et le délai souhaité.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-5">
          <a
            href="tel:+213659534458"
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-2xl border border-outline-variant bg-surface-container-lowest p-4 sm:p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <MdOutlineChat className="text-2xl sm:text-3xl" />
            </div>

            <div>
              <p className="text-xs sm:text-sm font-bold uppercase text-on-surface-variant">
                WhatsApp et Téléphone
              </p>
              <p className="mt-1 text-base sm:text-xl font-bold text-primary">
                +213 659 53 44 58
              </p>
            </div>
          </a>

          <a
            href="tel:+213554108215"
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-2xl border border-outline-variant bg-surface-container-lowest p-4 sm:p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <MdCall className="text-2xl sm:text-3xl" />
            </div>

            <div>
              <p className="text-xs sm:text-sm font-bold uppercase text-on-surface-variant">
                Téléphone
              </p>
              <p className="mt-1 text-base sm:text-xl font-bold text-primary">
                +213 554 10 82 15
              </p>
            </div>
          </a>

          <a
            href="mailto:chelhatraduction@gmail.com"
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-2xl border border-outline-variant bg-surface-container-lowest p-4 sm:p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <MdOutlineEmail className="text-2xl sm:text-3xl" />
            </div>

            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-bold uppercase text-on-surface-variant">
                E-mail
              </p>
              <p className="mt-1 text-sm sm:text-lg font-bold text-primary break-all sm:truncate">
                chelhatraduction@gmail.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
