import {
  MdOutlinePsychology,
  MdOutlineVerified,
  MdNoEncryptionGmailerrorred,
  MdOutlineShutterSpeed,
} from "react-icons/md";

const reasons = [
  {
    icon: <MdOutlinePsychology className="text-3xl" />,
    title: "Traducteurs Humains",
    desc: "Des linguistes natifs experts dans leur domaine, jamais de traduction automatique.",
  },
  {
    icon: <MdOutlineVerified className="text-3xl" />,
    title: "Qualité Garantie",
    desc: "Processus de revue en plusieurs étapes garantissant 100% d'exactitude dans chaque phrase.",
  },
  {
    icon: <MdNoEncryptionGmailerrorred className="text-3xl" />,
    title: "Confidentiel & Sécurisé",
    desc: "Des protocoles de confidentialité stricts pour protéger vos données sensibles.",
  },
  {
    icon: <MdOutlineShutterSpeed className="text-3xl" />,
    title: "Livraison Rapide",
    desc: "Délais de livraison fiables adaptés pour répondre à vos deadwards les plus pressants.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-section-gap bg-surface">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((item) => (
            <div key={item.title} className="text-center group">
              <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
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
