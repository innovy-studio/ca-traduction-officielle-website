import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-outline-variant shadow-sm">
      <nav className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
        <div className="flex items-center gap-2">
          <Image
            width={32}
            height={32}
            alt="CA Traduction Officielle Logo"
            className="h-10 w-10 object-contain"
            src="/globe.svg"
          />
          <span className="text-headline-card font-headline-card text-primary">
            CA Traduction Officielle
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:block bg-tertiary-container text-on-tertiary-container px-6 py-2 font-label-caps rounded-sm hover:opacity-90 transition-opacity active:scale-95"
          >
            Demandez un devis
          </a>
        </div>
      </nav>
    </header>
  );
}
