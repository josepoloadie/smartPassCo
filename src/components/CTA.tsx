function CTA() {
  const WHATSAPP_NUMBER = "573337509047";

  const handleWhatsApp = () => {
    const message =
      "Hola, quiero agendar una pre-evaluación gratuita para mi visa americana.";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-gradient-to-r from-[#2e197d] to-[#5b2bcf] px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            Da el primer paso hacia tu visa americana
          </h2>

          <p className="mt-2 text-sm text-white/90 lg:text-base">
            Agenda tu pre-evaluación gratuita ahora mismo.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="rounded-lg bg-white px-7 py-3 text-sm font-semibold text-[#5b2bcf] shadow-md transition hover:bg-slate-50"
          >
            💬 &nbsp; Agenda tu pre-evaluación gratis
          </button>

          <span className="text-xs text-white/80">
            Sin compromiso • Respuesta rápida
          </span>
        </div>
      </div>
    </section>
  );
}

export default CTA;
