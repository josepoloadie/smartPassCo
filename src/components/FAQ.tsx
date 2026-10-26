import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Qué es la pre-evaluación gratuita?",
    answer:
      "Es una primera orientación en la que analizamos tu caso y te indicamos qué opciones pueden ser adecuadas para tu proceso de visa, sin costo y sin compromiso.",
  },
  {
    question: "¿Qué pasa si me niegan la visa?",
    answer:
      "Una negativa no significa que no puedas volver a solicitarla. Analizamos tu situación para identificar posibles aspectos a mejorar antes de iniciar un nuevo proceso.",
  },
  {
    question: "¿Cuánto cuesta el servicio?",
    answer:
      "La pre-evaluación inicial es gratuita. El costo de la asesoría dependerá del servicio que necesites y será informado antes de iniciar cualquier proceso.",
  },
  {
    question: "¿Pueden garantizar la aprobación?",
    answer:
      "No. Ninguna asesoría puede garantizar la aprobación de una visa. Nuestro objetivo es orientarte y ayudarte a presentar tu proceso de la manera más clara y organizada posible.",
  },
  {
    question: "¿Cuánto tiempo tarda el proceso?",
    answer:
      "El tiempo puede variar dependiendo del tipo de visa, disponibilidad de citas y los tiempos establecidos por las autoridades correspondientes.",
  },
  {
    question: "¿Atienden en todo Colombia?",
    answer:
      "Sí. Podemos brindarte orientación de manera remota, independientemente de la ciudad de Colombia en la que te encuentres.",
  },
  {
    question: "¿Qué documentos necesito?",
    answer:
      "Los documentos pueden variar dependiendo de tu situación y del tipo de visa. Durante la asesoría te indicaremos qué documentación puede ser necesaria para tu caso.",
  },
  {
    question: "¿Cómo agendo mi cita?",
    answer:
      "Puedes comunicarte con nosotros a través de WhatsApp para recibir orientación sobre el proceso y los pasos necesarios para tu solicitud.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  // Distribuir las preguntas en dos columnas
  const leftColumn = faqs.filter((_, index) => index % 2 === 0);
  const rightColumn = faqs.filter((_, index) => index % 2 !== 0);

  const renderFAQ = (faq: (typeof faqs)[number]) => {
    const index = faqs.indexOf(faq);
    const isOpen = openIndex === index;
    const answerId = `faq-answer-${index}`;

    return (
      <article
        key={faq.question}
        className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
          isOpen
            ? "border-[var(--color-pass)] shadow-md"
            : "border-[var(--color-bruma)] shadow-sm hover:border-[var(--color-lila)]"
        }`}
      >
        {/* Pregunta */}
        <button
          type="button"
          onClick={() => toggleFAQ(index)}
          aria-expanded={isOpen}
          aria-controls={answerId}
          className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-[var(--color-niebla)]/70 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[var(--color-pass)] sm:px-5"
        >
          <span className="text-sm font-semibold leading-6 text-[var(--color-smartpass)] sm:text-base">
            {faq.question}
          </span>

          <ChevronDown
            size={19}
            aria-hidden="true"
            className={`shrink-0 text-[var(--color-pass)] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Respuesta */}
        <div
          id={answerId}
          aria-hidden={!isOpen}
          className={`grid transition-all duration-300 ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-4 pb-5 text-sm leading-7 text-[var(--color-gris-violeta)] sm:px-5">
              {faq.answer}
            </p>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section
      id="preguntas"
      className="bg-[var(--color-white)] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Encabezado */}
        <div className="mb-10 text-center sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-pass)] sm:text-sm">
            Estamos para orientarte
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-smartpass)] sm:text-4xl">
            Preguntas{" "}
            <span className="text-[var(--color-pass)]">frecuentes</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--color-gris-violeta)] sm:text-base">
            Resolvemos algunas de las dudas más comunes sobre la asesoría y el
            proceso de visa.
          </p>
        </div>

        {/* Dos columnas */}
        <div className="grid items-start gap-3 md:grid-cols-2 md:gap-5">
          <div className="flex flex-col gap-3">{leftColumn.map(renderFAQ)}</div>

          <div className="flex flex-col gap-3">
            {rightColumn.map(renderFAQ)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
