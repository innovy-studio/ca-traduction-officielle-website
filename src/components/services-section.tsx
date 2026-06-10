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
    icon: <MdAccountBalance className="text-primary text-4xl mb-4" />,
    title: "Légale",
    desc: "Traduction certifiée de contrats, de documents de procédure et de procurations.",
  },
  {
    icon: <MdMedicalServices className="text-primary text-4xl mb-4" />,
    title: "Médicale",
    desc: "Traduction précise des dossiers des patients, des rapports médicaux et des résultats des essais cliniques.",
  },
  {
    icon: <MdSchool className="text-primary text-4xl mb-4" />,
    title: "Académique",
    desc: "Diplômes, relevés de notes et travaux de recherche pour l'admission et la reconnaissance universitaires.",
  },
  {
    icon: <MdBusinessCenter className="text-primary text-4xl mb-4" />,
    title: "Entreprise",
    desc: "Supports marketing, rapports d'entreprise et manuels d'employés pour une diffusion mondiale.",
  },
  {
    icon: <MdVerifiedUser className="text-primary text-4xl mb-4" />,
    title: "Agréé",
    desc: "Traductions officielles pour le ministère de l'Intérieur, et d'autres autorités gouvernementales.",
  },
  {
    icon: <MdEmergency className="text-primary text-4xl mb-4" />,
    title: "Urgente",
    desc: "Services express pour les délais serrés avec livraison le jour même disponible pour de nombreux documents.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-section-gap bg-surface-container-low">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-headline-section font-headline-section text-primary mb-4">
            Ce que nous traduisons
          </h2>
          <div className="h-1 w-20 bg-tertiary-container mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="service-card bg-surface-container-lowest p-8 border border-outline-variant"
            >
              {svc.icon}
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
