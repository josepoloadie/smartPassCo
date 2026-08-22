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
    setOpenIndex(openIndex === index ? null : index);
  };

  // Dividimos las preguntas en dos columnas independientes
  const leftColumn = faqs.filter((_, index) => index % 2 === 0);
  const rightColumn = faqs.filter((_, index) => index % 2 !== 0);

  const renderFAQ = (faq: (typeof faqs)[number]) => {
    const index = faqs.indexOf(faq);
    const isOpen = openIndex === index;

    return (
      <div
        key={faq.question}
        className={`overflow-hidden rounded-lg border transition-all duration-300 ${
          isOpen ? "border-[#b985e8] shadow-sm" : "border-slate-200"
        }`}
      >
        {/* Pregunta */}
        <button
          type="button"
          onClick={() => toggleFAQ(index)}
          className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left"
        >
          <span className="text-sm font-semibold text-[#101c4f]">
            {faq.question}
          </span>

          <ChevronDown
            size={18}
            className={`shrink-0 text-slate-500 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-[#5b2bcf]" : ""
            }`}
          />
        </button>

        {/* Respuesta */}
        <div
          className={`grid transition-all duration-300 ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-4 pb-4 text-sm leading-6 text-slate-600">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="preguntas" className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        {/* Título */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#101c4f] lg:text-4xl">
            Preguntas <span className="text-[#5b2bcf]">frecuentes</span>
          </h2>

          <p className="mt-3 text-sm text-slate-600 lg:text-base">
            Resolvemos algunas de las dudas más comunes
          </p>
        </div>

        {/* Dos columnas independientes */}
        <div className="grid gap-3 md:grid-cols-2 md:gap-x-5 md:items-start">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-3">{leftColumn.map(renderFAQ)}</div>

          {/* Columna derecha */}
          <div className="flex flex-col gap-3">
            {rightColumn.map(renderFAQ)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
