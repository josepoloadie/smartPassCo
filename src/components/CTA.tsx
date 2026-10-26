import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "573337509047";

function CTA() {
  const handleWhatsApp = () => {
    const message =
      "Hola, quiero agendar una pre-evaluación gratuita para mi visa americana.";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-noche)] px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
      {/* Decoración de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-28 -z-10 h-72 w-72 rounded-full bg-[var(--color-smartpass)] opacity-70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 -z-10 h-64 w-64 rounded-full bg-[var(--color-pass)] opacity-20 blur-3xl"
      />

      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-7 md:flex-row md:items-center">
        {/* Mensaje */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-lavanda)] sm:text-sm">
            Tu próximo paso comienza aquí
          </span>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Da el primer paso hacia tu visa americana
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-lavanda)] sm:text-base">
            Agenda tu pre-evaluación gratuita y recibe orientación para conocer
            los siguientes pasos de tu proceso.
          </p>
        </div>

        {/* Acción */}
        <div className="flex w-full shrink-0 flex-col items-stretch gap-3 md:w-auto md:items-center">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-pass)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[var(--color-smartpass)] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7"
          >
            <MessageCircle size={19} aria-hidden="true" />
            Agenda tu pre-evaluación gratis
            <ArrowRight size={17} aria-hidden="true" />
          </button>

          <span className="text-center text-xs leading-5 text-[var(--color-lavanda)]">
            Sin compromiso · La decisión final corresponde al consulado
          </span>
        </div>
      </div>
    </section>
  );
}

export default CTA;
