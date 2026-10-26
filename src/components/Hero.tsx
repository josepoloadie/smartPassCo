import { useState } from "react";
import heroBackground from "../assets/hero-background-optimized.webp";

import {
  ChevronDown,
  Gift,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";

function Hero() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    tipoVisa: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.nombre.trim() ||
      !formData.telefono.trim() ||
      !formData.correo.trim() ||
      !formData.tipoVisa ||
      !formData.mensaje.trim()
    ) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const mensaje = `Hola SmartPassCo.

Quiero realizar mi pre-evaluación gratuita.

Nombre: ${formData.nombre}
WhatsApp / Teléfono: ${formData.telefono}
Correo: ${formData.correo}
Tipo de visa: ${formData.tipoVisa}

Caso:
${formData.mensaje}`;

    const numeroWhatsApp = "573337509047";

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setFormData({
      nombre: "",
      telefono: "",
      correo: "",
      tipoVisa: "",
      mensaje: "",
    });
  };

  const inputClasses =
    "h-12 w-full rounded-xl border border-[var(--color-bruma)] bg-white pl-11 pr-4 text-sm text-[var(--color-noche)] outline-none transition placeholder:text-[var(--color-gris-violeta)] focus:border-[var(--color-pass)] focus:ring-2 focus:ring-[var(--color-pass)]/20";

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[var(--color-white)]"
    >
      {/* Imagen de fondo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-[72%_center] opacity-50 sm:opacity-65 lg:bg-[64%_center] lg:opacity-100"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />

      {/* Protección de lectura en móvil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/90 to-white/75 lg:hidden"
      />

      {/* Protección de lectura en escritorio */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-white via-white/95 via-45% to-white/10 lg:block"
      />

      {/* Decoración sutil de marca */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 -z-10 h-72 w-72 rounded-full bg-[var(--color-bruma)]/50 blur-3xl"
      />

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.18fr_0.82fr] lg:gap-6 lg:px-8 lg:py-16">
        {/* Columna izquierda */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-bruma)] bg-white/90 px-3.5 py-2 text-xs font-semibold tracking-wide text-[var(--color-smartpass)] shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--color-pass)]" />
            Tu proceso de visa, acompañado
          </span>

          <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-[var(--color-smartpass)] sm:text-5xl lg:text-[52px]">
            Tu próximo viaje comienza con una buena preparación.
            <span className="mt-2 block text-[var(--color-pass)]">
              Te acompañamos con tu visa americana.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-noche)] sm:text-lg sm:leading-8">
            Recibe orientación personalizada, información clara y preparación
            para tu entrevista consular. Te acompañamos en cada etapa del
            proceso.
          </p>

          {/* Pre-evaluación gratuita */}
          <div className="mt-7 flex w-full max-w-[470px] items-start gap-3 rounded-2xl border border-[var(--color-bruma)] bg-[var(--color-niebla)]/95 px-4 py-4 shadow-sm sm:gap-4 sm:px-5 sm:py-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--color-pass)] shadow-sm">
              <Gift size={23} strokeWidth={2} aria-hidden="true" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-smartpass)]">
                Pre-evaluación gratuita
              </p>

              <p className="mt-1 text-sm leading-6 text-[var(--color-noche)]">
                Conocemos tu caso y te orientamos sobre los siguientes pasos,
                sin costo por la pre-evaluación.
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-lg text-xs leading-5 text-[var(--color-gris-violeta)] sm:text-sm">
            Te brindamos orientación y preparación. La decisión final sobre la
            visa corresponde exclusivamente al consulado.
          </p>
        </div>

        {/* Formulario */}
        <div className="relative z-10 lg:translate-x-8 xl:translate-x-12">
          <div className="mx-auto w-full max-w-[410px] rounded-3xl border border-[var(--color-bruma)] bg-white p-5 shadow-[0_20px_60px_rgba(30,11,69,0.14)] sm:p-7">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gris-violeta)]">
                Estamos aquí para ayudarte
              </span>

              <h2 className="mt-2 text-xl font-bold leading-snug text-[var(--color-smartpass)] sm:text-2xl">
                Agenda tu pre-evaluación
              </h2>

              <p className="mt-2 text-3xl font-bold text-[var(--color-pass)]">
                GRATIS
              </p>

              <p className="mt-2 text-sm leading-6 text-[var(--color-gris-violeta)]">
                Cuéntanos sobre tu caso y conversemos sobre tu proceso.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
              {/* Nombre */}
              <div className="relative">
                <User
                  size={17}
                  aria-hidden="true"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-gris-violeta)]"
                />

                <input
                  type="text"
                  name="nombre"
                  autoComplete="name"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  aria-label="Nombre completo"
                  className={inputClasses}
                  required
                />
              </div>

              {/* Teléfono */}
              <div className="relative">
                <Phone
                  size={17}
                  aria-hidden="true"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-gris-violeta)]"
                />

                <input
                  type="tel"
                  name="telefono"
                  autoComplete="tel"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="WhatsApp / Teléfono"
                  aria-label="WhatsApp o teléfono"
                  className={inputClasses}
                  required
                />
              </div>

              {/* Correo */}
              <div className="relative">
                <Mail
                  size={17}
                  aria-hidden="true"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-gris-violeta)]"
                />

                <input
                  type="email"
                  name="correo"
                  autoComplete="email"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  aria-label="Correo electrónico"
                  className={inputClasses}
                  required
                />
              </div>

              {/* Tipo de visa */}
              <div className="relative">
                <select
                  name="tipoVisa"
                  value={formData.tipoVisa}
                  onChange={handleChange}
                  aria-label="Tipo de visa"
                  required
                  className="h-12 w-full appearance-none rounded-xl border border-[var(--color-bruma)] bg-white px-4 pr-10 text-sm text-[var(--color-noche)] outline-none transition focus:border-[var(--color-pass)] focus:ring-2 focus:ring-[var(--color-pass)]/20"
                >
                  <option value="" disabled>
                    ¿Qué tipo de visa necesitas?
                  </option>
                  <option value="Visa de Turismo">Visa de Turismo</option>
                  <option value="Renovación de visa">Renovación de visa</option>
                  <option value="Visa de Estudiante">Visa de Estudiante</option>
                  <option value="Otra">Otra</option>
                </select>

                <ChevronDown
                  size={17}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-gris-violeta)]"
                />
              </div>

              {/* Mensaje */}
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                placeholder="Cuéntanos brevemente tu caso..."
                aria-label="Descripción de tu caso"
                required
                className="w-full resize-y rounded-xl border border-[var(--color-bruma)] bg-white px-4 py-3 text-sm leading-6 text-[var(--color-noche)] outline-none transition placeholder:text-[var(--color-gris-violeta)] focus:border-[var(--color-pass)] focus:ring-2 focus:ring-[var(--color-pass)]/20"
              />

              {/* Botón */}
              <button
                type="submit"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-pass)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-smartpass)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pass)]"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Quiero mi pre-evaluación gratis
              </button>

              {/* Nota de privacidad */}
              <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] leading-5 text-[var(--color-gris-violeta)]">
                <Lock size={13} aria-hidden="true" />
                Usaremos tus datos para atender tu solicitud.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
