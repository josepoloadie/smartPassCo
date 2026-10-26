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
    type: "Renovación de Visa de Turismo",
    text: "Mi experiencia con SmartPass ha sido excelente de principio a fin. Sarita fue super atenta, amable y profesional durante todo el proceso. Me explico paso a paso cada detalle y aclaro todas mis dudas e inquietudes sobre la renovacion de mi visa, lo que me dio muchisima tranquilidad. Todo el proceso fue rapido, sencillo y muy bien acompañado. Sin duda, recomiendo a SmartPass a ojos cerrados. ¡Estoy muy agradecida por su excelente atencion y acompañamiento! ❤️",
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
  "Acompañamiento durante el proceso",
  "Información clara y transparente",
  "Tratamiento confidencial de tus datos",
];

function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof testimonials)[number] | null
  >(null);

  // Cerrar el modal con Escape y bloquear el scroll mientras está abierto
  useEffect(() => {
    if (!selectedTestimonial) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedTestimonial(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedTestimonial]);

  return (
    <>
      <section
        id="testimonios"
        className="bg-[var(--color-niebla)] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-[1420px]">
          {/* Encabezado */}
          <div className="mb-10 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-pass)] sm:text-sm">
              Experiencias de clientes
            </span>

            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[var(--color-smartpass)] sm:text-4xl">
              La confianza se construye con{" "}
              <span className="text-[var(--color-pass)]">acompañamiento</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-gris-violeta)] sm:text-base">
              Conoce las experiencias que algunos clientes han compartido sobre
              su proceso de asesoría con SmartPass.
            </p>
          </div>

          {/* Testimonios y compromisos */}
          <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex min-h-[300px] flex-col rounded-2xl border border-[var(--color-bruma)] bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >
                {/* Cliente */}
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-smartpass)]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[var(--color-gris-violeta)]">
                    {testimonial.type}
                  </p>

                  {/* Estrellas decorativas de valoración */}
                  <div
                    className="mt-3 flex gap-1"
                    aria-label="Valoración mostrada en el testimonio"
                  >
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        fill="currentColor"
                        className="text-[var(--color-pass)]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                {/* Texto del testimonio */}
                <p className="mt-4 line-clamp-5 text-sm leading-6 text-[var(--color-gris-violeta)]">
                  “{testimonial.text}”
                </p>

                {/* Leer más */}
                {testimonial.text.length > 180 && (
                  <button
                    type="button"
                    onClick={() => setSelectedTestimonial(testimonial)}
                    className="mt-3 w-fit text-xs font-semibold text-[var(--color-pass)] transition-colors hover:text-[var(--color-smartpass)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pass)]"
                  >
                    Leer testimonio completo →
                  </button>
                )}

                {/* Identificador neutral */}
                <span className="mt-auto w-fit rounded-full bg-[var(--color-niebla)] px-3 py-1.5 text-[11px] font-semibold text-[var(--color-smartpass)]">
                  Experiencia compartida
                </span>
              </article>
            ))}

            {/* Compromisos de SmartPass */}
            <article className="flex min-h-[300px] flex-col rounded-2xl border border-[var(--color-pass)]/40 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-niebla)] text-[var(--color-pass)]">
                  <ShieldCheck size={22} aria-hidden="true" />
                </div>

                <h3 className="pt-1 text-base font-semibold leading-6 text-[var(--color-smartpass)]">
                  Nuestro compromiso contigo
                </h3>
              </div>

              <ul className="space-y-4">
                {commitments.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-5 text-[var(--color-gris-violeta)]"
                  >
                    <CheckCircle
                      size={17}
                      className="mt-0.5 shrink-0 text-[var(--color-pass)]"
                      aria-hidden="true"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Modal de testimonio completo */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--color-noche)]/75 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="testimonial-modal-title"
            className="relative w-full max-w-2xl rounded-3xl border border-[var(--color-bruma)] bg-white p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Cerrar */}
            <button
              type="button"
              onClick={() => setSelectedTestimonial(null)}
              aria-label="Cerrar testimonio"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-gris-violeta)] transition-colors hover:bg-[var(--color-niebla)] hover:text-[var(--color-smartpass)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pass)]"
            >
              <X size={20} aria-hidden="true" />
            </button>

            {/* Datos del cliente */}
            <div className="pr-12">
              <h3
                id="testimonial-modal-title"
                className="text-xl font-bold text-[var(--color-smartpass)] sm:text-2xl"
              >
                {selectedTestimonial.name}
              </h3>

              <p className="mt-1 text-sm text-[var(--color-gris-violeta)]">
                {selectedTestimonial.type}
              </p>

              <div className="mt-3 flex gap-1" aria-hidden="true">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill="currentColor"
                    className="text-[var(--color-pass)]"
                  />
                ))}
              </div>
            </div>

            <div className="my-5 h-px bg-[var(--color-bruma)]" />

            {/* Texto completo */}
            <p className="max-h-[60vh] overflow-y-auto pr-2 text-sm leading-7 text-[var(--color-gris-violeta)] sm:text-base">
              “{selectedTestimonial.text}”
            </p>

            <div className="mt-6">
              <span className="inline-block rounded-full bg-[var(--color-niebla)] px-3 py-1.5 text-[11px] font-semibold text-[var(--color-smartpass)]">
                Experiencia compartida
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Testimonials;
