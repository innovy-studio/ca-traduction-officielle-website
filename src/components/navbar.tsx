import Image from "next/image";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Garanties" },
  { href: "#about", label: "Bureau" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/80 bg-surface/95 shadow-sm backdrop-blur">
      <nav className="flex h-18 w-full max-w-container-max items-center justify-between gap-5 px-gutter mx-auto">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <Image
            width={32}
            height={32}
            alt="CA Traduction Officielle Logo"
            className="h-9 w-9 shrink-0 object-contain"
            src="/globe.svg"
          />
          <span className="truncate text-base font-headline-card font-bold text-primary sm:text-headline-card">
            CA Traduction Officielle
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-on-surface-variant transition hover:bg-surface-container hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="shrink-0 rounded-lg bg-tertiary-container px-4 py-2 text-sm font-bold text-on-tertiary-container transition hover:opacity-90 active:scale-95 sm:px-5"
        >
          Devis
        </a>
      </nav>
    </header>
  );
}
