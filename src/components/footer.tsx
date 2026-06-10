import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-inverse-surface border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full px-gutter py-12 max-w-container-max mx-auto">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <Image
              width={32}
              height={32}
              alt="CA Traduction Officielle Logo"
              className="h-8 w-8 object-contain"
              src="/globe.svg"
            />
            <span className="text-headline-card font-headline-card text-surface-container-lowest">
              CA Traduction Officielle
            </span>
          </div>
          <p className="text-surface-variant text-body-md max-w-xs text-center md:text-left">
            Traductions professionnelles et certifiées au cœur de Koléa. Une
            précision digne de confiance.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 text-center md:items-end md:text-right">
          <a
            href="#contact"
            className="font-bold text-tertiary-fixed transition hover:text-white"
          >
            Demander un devis
          </a>
          <p className="text-surface-variant text-body-md opacity-80">
            &copy; 2026 CA Traduction Officielle. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
