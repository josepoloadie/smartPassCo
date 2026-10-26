import { ClipboardList, FileText, Users, Send } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: ClipboardList,
    title: "Pre-evaluación gratuita",
    description:
      "Analizamos tu perfil y te indicamos las opciones de orientación para tu caso, sin compromiso.",
  },
  {
    number: "2",
    icon: FileText,
    title: "Formulario DS-160",
    description:
      "Te orientamos en el diligenciamiento del formulario para ayudarte a evitar errores y retrasos.",
  },
  {
    number: "3",
    icon: Users,
    title: "Preparación de entrevista",
    description:
      "Te ofrecemos recomendaciones y orientación para que llegues a tu entrevista con mayor confianza.",
  },
  {
    number: "4",
    icon: Send,
    title: "Seguimiento",
    description:
      "Te acompañamos durante el proceso y resolvemos tus dudas cuando lo necesites.",
  },
];

function Process() {
  return (
    <section
      id="proceso"
      className="bg-[var(--color-niebla)] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Encabezado */}
        <div className="mb-12 text-center sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-pass)] sm:text-sm">
            Cómo te acompañamos
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-smartpass)] sm:text-4xl">
            Nuestro proceso,
            <span className="block text-[var(--color-pass)] sm:inline">
              {" "}
              paso a paso
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--color-gris-violeta)] sm:text-base">
            Te orientamos en cada etapa para que entiendas el proceso y sepas
            qué esperar durante tu solicitud de visa.
          </p>
        </div>

        {/* Pasos del proceso */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <article
                key={step.number}
                className="group relative rounded-2xl border border-[var(--color-bruma)] bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Número del paso */}
                <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-niebla)] text-xs font-bold text-[var(--color-smartpass)]">
                  {step.number}
                </div>

                {/* Icono */}
                <div className="mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-[var(--color-pass)] text-white shadow-md shadow-[var(--color-bruma)] transition-colors duration-200 group-hover:bg-[var(--color-smartpass)]">
                  <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                </div>

                {/* Título */}
                <h3 className="mt-5 text-base font-semibold leading-6 text-[var(--color-smartpass)]">
                  {step.title}
                </h3>

                {/* Descripción */}
                <p className="mt-3 text-sm leading-6 text-[var(--color-gris-violeta)]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Nota de transparencia */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[var(--color-gris-violeta)] sm:text-sm">
          Nuestro acompañamiento es de orientación y preparación. La decisión
          sobre la aprobación de la visa corresponde al consulado.
        </p>
      </div>
    </section>
  );
}

export default Process;
