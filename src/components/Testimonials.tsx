import { CheckCircle, ShieldCheck, Star } from "lucide-react";

const testimonials = [
  {
    name: "María Fernanda R.",
    type: "Visa de Turismo",
    image: "/testimonials/maria.jpg",
    text: "Gracias a Smart Pass entendí todo el proceso y mi visa fue aprobada en mi primera entrevista. ¡Totalmente recomendados!",
  },
  {
    name: "Carlos A. Gómez",
    type: "Visa de Turismo",
    image: "/testimonials/carlos.jpg",
    text: "La pre-evaluación gratuita me dio la tranquilidad que necesitaba. Me prepararon excelente para la entrevista y todo salió perfecto.",
  },
  {
    name: "Laura M. Sánchez",
    type: "Renovación de Visa",
    image: "/testimonials/laura.jpg",
    text: "Renové mi visa sin complicaciones gracias a su guía. El equipo es muy profesional y siempre estuvieron pendientes.",
  },
];

const commitments = [
  "Pre-evaluación gratuita antes de cobrar",
  "Asesoría personalizada",
  "Acompañamiento de principio a fin",
  "Información clara y transparente",
  "Confidencialidad garantizada",
];

function Testimonials() {
  return (
    <section id="testimonios" className="bg-[#f8f9ff] px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-[1420px]">
        {/* Título */}
        <h2 className="mb-8 text-3xl font-bold text-[#101c4f] lg:text-4xl">
          La <span className="text-[#5b2bcf]">confianza</span> de nuestros
          clientes
        </h2>

        {/* Contenido */}
        <div className="grid gap-5 lg:grid-cols-4">
          {/* Testimonios */}
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              {/* Cliente */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-sm font-bold text-[#101c4f]">
                    {testimonial.name}
                  </h3>

                  <p className="text-xs text-slate-500">{testimonial.type}</p>

                  <div className="mt-1 flex gap-0.5">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={13}
                        fill="#f5b800"
                        className="text-[#f5b800]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonio */}
              <p className="mt-6 text-sm leading-6 text-slate-600">
                “{testimonial.text}”
              </p>

              {/* Estado */}
              <span className="mt-5 inline-block rounded-md bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-700">
                APROBADA
              </span>
            </article>
          ))}

          {/* Compromiso */}
          <article className="rounded-xl border-2 border-[#b985e8] bg-white p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f1e8ff]">
                <ShieldCheck size={21} className="text-[#5b2bcf]" />
              </div>

              <h3 className="text-base font-bold text-[#5b2bcf]">
                Comprometidos con tu éxito
              </h3>
            </div>

            <ul className="space-y-4">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <CheckCircle
                    size={17}
                    className="mt-0.5 shrink-0 text-green-500"
                    fill="currentColor"
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
