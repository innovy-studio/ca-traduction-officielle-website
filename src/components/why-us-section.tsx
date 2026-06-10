import {
  MdOutlinePsychology,
  MdOutlineVerified,
  MdNoEncryptionGmailerrorred,
  MdOutlineShutterSpeed,
} from "react-icons/md";

const reasons = [
  {
    icon: <MdOutlinePsychology className="text-3xl" />,
    title: "Traduction humaine",
    desc: "Des linguistes natifs experts dans leur domaine, jamais de traduction automatique.",
  },
  {
    icon: <MdOutlineVerified className="text-3xl" />,
    title: "Contrôle qualité",
    desc: "Chaque document est relu avec attention avant remise pour préserver le sens et les noms propres.",
  },
  {
    icon: <MdNoEncryptionGmailerrorred className="text-3xl" />,
    title: "Confidentiel",
    desc: "Des protocoles de confidentialité stricts pour protéger vos données sensibles.",
  },
  {
    icon: <MdOutlineShutterSpeed className="text-3xl" />,
    title: "Délais fiables",
    desc: "Un délai clair dès le dépôt, avec options urgentes lorsque le dossier le permet.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-section-gap bg-surface">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase text-secondary">
            Pourquoi nous choisir
          </p>
          <h2 className="text-headline-section font-headline-section text-primary">
            Un processus simple pour des documents importants.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="group rounded-lg border border-outline-variant bg-surface-container-lowest p-6"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-container text-on-primary-container transition-transform group-hover:scale-105">
                {item.icon}
              </div>
              <h4 className="text-headline-card font-headline-card text-primary mb-2">
                {item.title}
              </h4>
              <p className="text-body-md text-on-surface-variant">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
