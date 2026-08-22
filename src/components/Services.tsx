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
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="servicios" className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Título */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#101c4f] lg:text-4xl">
            ¿Qué necesitas <span className="text-[#5b2bcf]">hoy?</span>
          </h2>

          <p className="mt-3 text-sm text-slate-600 lg:text-base">
            Tenemos la asesoría ideal para tu caso
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="flex min-h-[330px] flex-col items-center rounded-xl border border-slate-200 bg-white px-7 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b985e8] hover:shadow-lg"
              >
                {/* Icono */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#5b2bcf] shadow-md shadow-purple-200">
                  <Icon size={26} strokeWidth={2} className="text-white" />
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-[#101c4f]">
                  {service.title}
                </h3>

                {/* Descripción */}
                <p className="mt-3 max-w-[300px] text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                {/* Botón WhatsApp */}
                <button
                  type="button"
                  onClick={() => handleWhatsApp(service.message)}
                  className="mt-auto rounded-lg bg-[#5b2bcf] px-7 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4820ad]"
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
