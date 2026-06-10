import Image from "next/image";
import {
  MdOutlineVerified,
  MdOutlineStar,
  MdOutlineArrowForward,
} from "react-icons/md";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-tertiary/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-4 py-2 mb-6">
              <MdOutlineVerified className="text-secondary" />
              <span className="text-sm font-medium">Traductrice certifiée</span>
            </div>

            <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl leading-tight text-primary">
              Traduction professionnelle
              <br />
              <span className="text-secondary">
                précise, certifiée et confidentielle.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Des contrats juridiques aux rapports médicaux, nous traduisons vos
              documents importants avec précision et confidentialité.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-white font-medium hover:opacity-90 transition"
              >
                Demander un devis
                <MdOutlineArrowForward />
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto rounded-lg border border-outline px-6 py-3 font-medium hover:bg-surface-container transition"
              >
                Visitez-nous
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
              <div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-on-surface-variant">
                  Documents traduits
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold flex items-center gap-1 justify-center lg:justify-start">
                  <MdOutlineStar className="text-yellow-500" />
                  5★
                </div>
                <div className="text-sm text-on-surface-variant">
                  Avis Google
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-on-surface-variant">
                  Confidentialité
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-md sm:max-w-lg lg:max-w-none mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/ca.png"
                alt="Traductrice professionnelle"
                width={700}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="hidden lg:block absolute -bottom-16 -left-6 bg-white rounded-xl shadow-xl p-5">
              <div className="text-3xl font-bold text-secondary">1000+</div>
              <div className="text-sm text-gray-500">Traductions réalisées</div>
            </div>

            <div className="hidden lg:block absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-5">
              <div className="flex items-center gap-2">
                <MdOutlineVerified className="text-secondary text-2xl" />
                <span className="font-semibold">Certifiée</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
