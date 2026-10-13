import { useEffect, useState } from "react";
import { CheckCircle, ShieldCheck, Star, X } from "lucide-react";

const testimonials = [
  {
    name: "Alicia Robles",
    type: "Visa de Turismo",
    text: "Quiero recomendar ampliamente a Sara Ospino, por su excelente trabajo y acompañamiento durante el proceso de la visa americana de mis papás (Helim Robles y Marta López). Desde el primer momento fue muy profesional, paciente y clara al explicar cada paso del proceso, ayudándonos a preparar la documentación y, sobre todo, a sentirnos más tranquilos y seguros durante todo el procedimiento. Su asesoría fue fundamental y siempre estuvo pendiente de nuestras dudas y necesidades. Gracias a su apoyo, mis papás pudieron afrontar el proceso con mucha más confianza y organización. Sin duda, volvería a contar con sus servicios y la recomiendo a cualquier persona que esté buscando una asesoría responsable, cercana y de confianza. ❤️",
  },
  {
    name: "Nora Torres",
    type: "Renovacion de Visa de Turismo",
    text: "Mi experiencia con SmartPass ha sido excelente de principio a fin. Sarita fue super atenta, amable y profesional durante todo el proceso. Me explico paso a paso cada detalle y aclaro todas mis dudas e inquietudes sobre la renovacion de mi visa, lo que me dio muchisima tranquilidad. Todo el proceso fue rapido, sencillo y muy bien acompañado. Sin duda, recomiendo a SmartPass a ojos cerrados. ¡Estoy muy agradecida por su excelente atencion y acompañamiento! ❤️"
  },
  {
    name: "Laura M. Sánchez",
    type: "Renovación de Visa de Turismo",
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
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof testimonials)[number] | null
  >(null);

  // Cerrar modal con ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedTestimonial(null);
      }
    };

    if (selectedTestimonial) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedTestimonial]);

  return (
    <>
      <section id="testimonios" className="bg-[#f8f9ff] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-[1420px]">
          {/* Título */}
          <h2 className="mb-8 text-3xl font-bold text-[#101c4f] lg:text-4xl">
            La <span className="text-[#5b2bcf]">confianza</span> de nuestros
            clientes
          </h2>

          {/* Contenido */}
          <div className="grid items-stretch gap-5 lg:grid-cols-4">
            {/* Testimonios */}
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex min-h-[280px] flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* Cliente */}
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-[#101c4f]">
                      {testimonial.name}
                    </h3>

                    <p className="text-xs text-slate-500">{testimonial.type}</p>

                    {/* Estrellas */}
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
                <p className="mt-5 min-h-[120px] line-clamp-5 text-sm leading-6 text-slate-600">
                  “{testimonial.text}”
                </p>

                {/* Leer más */}
                {testimonial.text.length > 180 && (
                  <button
                    type="button"
                    onClick={() => setSelectedTestimonial(testimonial)}
                    className="mt-2 w-fit text-xs font-medium text-[#5b2bcf] transition-colors hover:text-[#4520a5] hover:underline"
                  >
                    Leer testimonio completo →
                  </button>
                )}

                {/* Estado */}
                <span className="mt-auto w-fit rounded-md bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-700">
                  APROBADA
                </span>
              </article>
            ))}

            {/* Compromiso */}
            <article className="flex min-h-[280px] flex-col rounded-xl border-2 border-[#b985e8] bg-white p-5">
              {/* Encabezado */}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f1e8ff]">
                  <ShieldCheck size={21} className="text-[#5b2bcf]" />
                </div>

                <h3 className="text-base font-bold text-[#5b2bcf]">
                  Comprometidos con tu éxito
                </h3>
              </div>

              {/* Beneficios */}
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

      {/* Modal */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="testimonial-modal-title"
            className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              type="button"
              onClick={() => setSelectedTestimonial(null)}
              aria-label="Cerrar testimonio"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={20} />
            </button>

            {/* Cliente */}
            <div className="pr-10">
              <h3
                id="testimonial-modal-title"
                className="text-xl font-bold text-[#101c4f]"
              >
                {selectedTestimonial.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {selectedTestimonial.type}
              </p>

              {/* Estrellas */}
              <div className="mt-2 flex gap-0.5">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill="#f5b800"
                    className="text-[#f5b800]"
                  />
                ))}
              </div>
            </div>

            {/* Separador */}
            <div className="my-5 h-px bg-slate-100" />

            {/* Testimonio completo */}
            <p className="max-h-[60vh] overflow-y-auto pr-2 text-sm leading-7 text-slate-600 sm:text-base">
              “{selectedTestimonial.text}”
            </p>

            {/* Estado */}
            <div className="mt-6">
              <span className="inline-block rounded-md bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-700">
                APROBADA
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Testimonials;
