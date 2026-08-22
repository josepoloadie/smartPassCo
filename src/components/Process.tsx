import { ClipboardList, FileText, Users, Send, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: ClipboardList,
    title: "Pre-evaluación gratuita",
    description:
      "Analizamos tu perfil y te indicamos las mejores opciones para tu caso, sin compromiso.",
  },
  {
    number: "2",
    icon: FileText,
    title: "Formulario DS-160",
    description:
      "Te orientamos en el diligenciamiento correcto del formulario para evitar errores y retrasos.",
  },
  {
    number: "3",
    icon: Users,
    title: "Preparación de entrevista",
    description:
      "Te preparamos con recomendaciones y orientación para que llegues con mayor confianza.",
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
    <section id="proceso" className="bg-[#f8f9ff] px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Título */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#101c4f] lg:text-4xl">
            Nuestro proceso,{" "}
            <span className="text-[#5b2bcf]">simple y efectivo</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 lg:text-base">
            Te acompañamos paso a paso para que tengas claridad durante todo tu
            proceso.
          </p>
        </div>

        {/* Pasos */}
        <div className="grid gap-10 md:grid-cols-4 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.number} className="relative text-center">
                {/* Icono */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#5b2bcf] shadow-lg shadow-purple-200">
                  <Icon size={27} strokeWidth={2} className="text-white" />
                </div>

                {/* Número */}
                <div className="mt-4 text-xs font-semibold text-[#5b2bcf]">
                  {step.number}.
                </div>

                {/* Título */}
                <h3 className="mt-1 text-sm font-bold text-[#101c4f] lg:text-base">
                  {step.title}
                </h3>

                {/* Descripción */}
                <p className="mx-auto mt-2 max-w-[210px] text-xs leading-5 text-slate-500">
                  {step.description}
                </p>

                {/* Flecha */}
                {!isLast && (
                  <ArrowRight
                    className="absolute right-[-20px] top-7 hidden text-slate-300 md:block"
                    size={32}
                    strokeWidth={1.5}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
