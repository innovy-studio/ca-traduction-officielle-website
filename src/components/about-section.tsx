import {
  MdOutlineVerified,
  MdOutlineLock,
  MdOutlineTranslate,
  MdLocationOn,
} from "react-icons/md";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-surface py-16 md:py-24"
    >
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative max-w-container-max mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-block rounded-full border border-outline-variant bg-surface-container px-4 py-2 text-sm font-medium mb-5">
              À propos
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Une traduction officielle
              <span className="text-secondary"> fondée sur la précision.</span>
            </h2>

            <p className="mt-6 text-lg text-on-surface-variant leading-relaxed">
              Depuis Koléa, nous accompagnons particuliers, entreprises et
              professionnels avec des traductions certifiées répondant aux
              exigences administratives et juridiques.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-outline-variant bg-surface-container p-5">
                <MdOutlineVerified className="text-3xl text-secondary mb-3" />
                <h3 className="font-semibold mb-1">Certifiée</h3>
                <p className="text-sm text-on-surface-variant">
                  Traductions reconnues officiellement.
                </p>
              </div>

              <div className="rounded-xl border border-outline-variant bg-surface-container p-5">
                <MdOutlineTranslate className="text-3xl text-secondary mb-3" />
                <h3 className="font-semibold mb-1">Précise</h3>
                <p className="text-sm text-on-surface-variant">
                  Respect du contexte et des nuances.
                </p>
              </div>

              <div className="rounded-xl border border-outline-variant bg-surface-container p-5">
                <MdOutlineLock className="text-3xl text-secondary mb-3" />
                <h3 className="font-semibold mb-1">Confidentielle</h3>
                <p className="text-sm text-on-surface-variant">
                  Protection totale de vos documents.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="overflow-hidden rounded-2xl shadow-2xl border border-outline-variant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504.1713296598658!2d2.7648783291441434!3d36.643520537414005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f9f004ddc49c1%3A0x761a319479515fa4!2sTraduction%20Officielle%20Kolea%20Ma%C3%AEtre%20CHELHA%20Amina!5e0!3m2!1sfr!2sdz!4v1781101971556!5m2!1sfr!2sdz"
                className="w-full h-75 md:h-112.5"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="rounded-2xl border border-outline-variant bg-surface-container p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-secondary/10 p-3">
                  <MdLocationOn className="text-2xl text-secondary" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Notre bureau</h3>

                  <p className="mt-2 text-on-surface-variant">
                    Situé au cœur de Koléa, notre cabinet accueille les
                    particuliers et les professionnels pour leurs besoins en
                    traduction officielle.
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
