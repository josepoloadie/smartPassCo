import { CheckCircle, FileSearch, ShieldCheck, Users } from "lucide-react";

const benefits = [
  {
    icon: FileSearch,
    title: "Pre-evaluación gratuita",
    description:
      "Analizamos tu caso antes de iniciar el proceso y te orientamos sobre las opciones disponibles.",
  },
  {
    icon: Users,
    title: "Asesoría personalizada",
    description:
      "Recibe orientación de acuerdo con tu situación, necesidades y tipo de visa.",
  },
  {
    icon: ShieldCheck,
    title: "Acompañamiento",
    description:
      "Te guiamos durante las diferentes etapas del proceso para que tengas mayor claridad y seguridad.",
  },
];

const commitments = [
  "Pre-evaluación antes de cobrar",
  "Información clara y transparente",
  "Asesoría personalizada",
  "Acompañamiento durante el proceso",
  "Confidencialidad garantizada",
];

function Testimonials() {
  return (
    <section id="testimonios" className="bg-[#f8f9ff] px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-[1420px]">
        {/* Título */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#101c4f] lg:text-4xl">
            ¿Por qué elegir <span className="text-[#5b2bcf]">Smart Pass?</span>
          </h2>

          <p className="mt-2 text-sm text-slate-600 lg:text-base">
            Una asesoría clara, personalizada y enfocada en acompañarte durante
            tu proceso.
          </p>
        </div>

        {/* Contenido */}
        <div className="grid gap-5 lg:grid-cols-4">
          {/* Beneficios */}
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Icono */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1e8ff]">
                  <Icon size={24} className="text-[#5b2bcf]" />
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-[#101c4f]">
                  {benefit.title}
                </h3>

                {/* Descripción */}
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            );
          })}

          {/* Compromiso */}
          <article className="rounded-xl border-2 border-[#b985e8] bg-white p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f1e8ff]">
                <ShieldCheck size={23} className="text-[#5b2bcf]" />
              </div>

              <h3 className="text-base font-bold text-[#5b2bcf]">
                Comprometidos con tu éxito
              </h3>
            </div>

            <ul className="space-y-3.5">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <CheckCircle
                    size={17}
                    className="mt-0.5 shrink-0 text-green-500"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
