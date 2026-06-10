import {
  MdAccountBalance,
  MdMedicalServices,
  MdSchool,
  MdBusinessCenter,
  MdVerifiedUser,
  MdEmergency,
} from "react-icons/md";

const services = [
  {
    icon: <MdAccountBalance className="text-primary text-3xl" />,
    title: "Documents juridiques",
    desc: "Traduction certifiée de contrats, de documents de procédure et de procurations.",
  },
  {
    icon: <MdMedicalServices className="text-primary text-3xl" />,
    title: "Dossiers médicaux",
    desc: "Traduction précise des dossiers des patients, des rapports médicaux et des résultats des essais cliniques.",
  },
  {
    icon: <MdSchool className="text-primary text-3xl" />,
    title: "Parcours académique",
    desc: "Diplômes, relevés de notes et travaux de recherche pour l'admission et la reconnaissance universitaires.",
  },
  {
    icon: <MdBusinessCenter className="text-primary text-3xl" />,
    title: "Documents d'entreprise",
    desc: "Supports marketing, rapports d'entreprise et manuels d'employés pour une diffusion mondiale.",
  },
  {
    icon: <MdVerifiedUser className="text-primary text-3xl" />,
    title: "Dossiers administratifs",
    desc: "Traductions officielles pour le ministère de l'Intérieur, et d'autres autorités gouvernementales.",
  },
  {
    icon: <MdEmergency className="text-primary text-3xl" />,
    title: "Demandes urgentes",
    desc: "Services express pour les délais serrés avec livraison le jour même disponible pour de nombreux documents.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-section-gap bg-surface-container-low">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase text-secondary">
            Services
          </p>
          <h2 className="text-headline-section font-headline-section text-primary mb-4">
            Ce que nous traduisons
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Des pièces personnelles aux dossiers professionnels, chaque
            traduction est préparée pour l&apos;usage officiel attendu.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-surface-container-lowest p-6 border border-outline-variant rounded-lg shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed">
                {svc.icon}
              </div>
              <h3 className="text-headline-card font-headline-card text-primary mb-3">
                {svc.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
