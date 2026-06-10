"use client";
import { useState, useEffect, useCallback } from "react";
import { MdChevronLeft, MdChevronRight, MdStar } from "react-icons/md";

const testimonials = [
  {
    text: "Le travail est professionnel, précis et livré dans les délais. La communication est excellente et chaque détail a été pris en compte. Je recommande vivement ses services à tous ceux qui recherchent une traduction de grande qualité. Merci encore pour votre sérieux et votre efficacité !",
    author: "Abderrahmane Laid",
  },
  {
    text: "Excellente expérience ! J ai confié la traduction de mes documents à ce bureau et tout s est parfaitement bien passé. Accueil professionnel, personne à l écoute et travail soigné, précis et livré dans les délais. Je recommande sans hésitation.",
    author: "Meriem Babour",
  },
  {
    text: "Excellente traductrice, très professionnelle et réactive. Elle a su répondre à une demande urgente de dernière minute avec beaucoup de sérieux. Les documents ont été traduits avec précision et sont parfaitement exploitables à l’étranger. Je recommande vivement.",
    author: "Meriem Kadjit",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const moveSlider = useCallback((direction: number) => {
    setCurrent(
      (prev) => (prev + direction + testimonials.length) % testimonials.length,
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => moveSlider(1), 8000);
    return () => clearInterval(interval);
  }, [moveSlider]);

  return (
    <section
      id="testimonials"
      className="py-section-gap bg-inverse-surface text-surface-container-low"
    >
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase text-tertiary-fixed">
            Avis clients
          </p>
          <h2 className="text-headline-section font-headline-section text-surface-container-lowest">
            Ils nous confient leurs documents officiels.
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-surface-container-low/20 bg-white/5 px-4 py-10 text-center sm:px-10">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="min-w-full px-4">
                <div className="mb-6 flex justify-center gap-1 text-tertiary-fixed">
                  {[...Array(5)].map((_, starIdx) => (
                    <MdStar key={starIdx} aria-hidden="true" />
                  ))}
                </div>
                <div className="max-w-3xl mx-auto text-body-lg text-surface-container-low mb-8">
                  &ldquo;{t.text}&rdquo;
                </div>
                <div className="text-tertiary-fixed font-bold">{t.author}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              className="p-2 border border-surface-container-low/30 text-white rounded-full hover:bg-surface/10 transition-colors"
              onClick={() => moveSlider(-1)}
              aria-label="Avis précédent"
            >
              <MdChevronLeft />
            </button>
            <button
              className="p-2 border border-surface-container-low/30 text-white rounded-full hover:bg-surface/10 transition-colors"
              onClick={() => moveSlider(1)}
              aria-label="Avis suivant"
            >
              <MdChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
