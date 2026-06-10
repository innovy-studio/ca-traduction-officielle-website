import { MdCall } from "react-icons/md";

export function ContactSection() {
  return (
    <section id="contact" className="py-section-gap bg-surface">
      <div className="px-gutter max-w-container-max mx-auto">
        <div>
          <h2 className="text-headline-section font-headline-section text-primary mb-4">
            Commencez votre traduction maintenant!
          </h2>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
              <MdCall />
            </div>
            <div>
              <p className="text-sm text-on-surface-variant font-label-caps">
                Appelez à tout moment (disponible sur WhatsApp)
              </p>
              <p className="font-bold text-primary">+213 659 53 44 58</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
              <MdCall />
            </div>
            <div>
              <p className="text-sm text-on-surface-variant font-label-caps">
                Appelez à tout moment
              </p>
              <p className="font-bold text-primary">+213 554 10 82 15</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
