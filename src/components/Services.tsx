import { UserRound, RefreshCw, Mic } from "lucide-react";

const WHATSAPP_NUMBER = "573337509047";

const services = [
  {
    icon: UserRound,
    title: "Primera vez",
    description:
      "¿Vas a solicitar tu visa americana por primera vez? Te guiamos paso a paso para que tengas un proceso claro y organizado.",
    button: "Quiero asesoría",
    message:
      "Hola, quiero información para solicitar mi visa americana por primera vez.",
  },
  {
    icon: RefreshCw,
    title: "Renovación",
    description:
      "¿Necesitas renovar tu visa? Te orientamos sobre los requisitos y el proceso según tu situación.",
    button: "Quiero renovar",
    message: "Hola, quiero información para renovar mi visa americana.",
  },
  {
    icon: Mic,
    title: "Preparación para entrevista",
    description:
      "¿Ya llenaste tu formulario DS-160? Prepárate con orientación para afrontar tu entrevista con mayor confianza.",
    button: "Quiero prepararme",
    message:
      "Hola, quiero información sobre la preparación para mi entrevista de visa americana.",
  },
];

function Services() {
  const handleWhatsApp = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="servicios"
      className="bg-[var(--color-white)] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Encabezado */}
        <div className="mb-10 text-center sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-pass)] sm:text-sm">
            Servicios de asesoría
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-smartpass)] sm:text-4xl">
            ¿Qué necesitas{" "}
            <span className="text-[var(--color-pass)]">hoy?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--color-gris-violeta)] sm:text-base">
            Conoce las opciones de acompañamiento y encuentra la orientación que
            mejor se adapte a tu proceso.
          </p>
        </div>

        {/* Tarjetas de servicios */}
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex min-h-[350px] flex-col items-center rounded-2xl border border-[var(--color-bruma)] bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-pass)] hover:shadow-[0_16px_40px_rgba(30,11,69,0.10)] sm:px-7"
              >
                {/* Icono */}
                <div className="mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-pass)] text-white shadow-md shadow-[var(--color-bruma)] transition-colors duration-300 group-hover:bg-[var(--color-smartpass)]">
                  <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
                </div>

                {/* Título */}
                <h3 className="text-lg font-semibold leading-7 text-[var(--color-smartpass)] sm:text-xl">
                  {service.title}
                </h3>

                {/* Descripción */}
                <p className="mt-3 max-w-[300px] text-sm leading-6 text-[var(--color-gris-violeta)]">
                  {service.description}
                </p>

                {/* Botón de WhatsApp */}
                <button
                  type="button"
                  onClick={() => handleWhatsApp(service.message)}
                  className="mt-auto inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--color-pass)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-smartpass)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pass)]"
                >
                  {service.button}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
