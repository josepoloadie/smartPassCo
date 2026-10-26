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
    "h-9 w-full rounded-lg border border-[var(--color-bruma)] bg-white pl-10 pr-3 text-[14px] text-[var(--color-noche)] outline-none transition placeholder:text-[14px] placeholder:text-[var(--color-gris-violeta)] focus:border-[var(--color-pass)] focus:ring-2 focus:ring-[var(--color-pass)]/20";

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[var(--color-white)]"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-[72%_center] opacity-90 lg:bg-[64%_center] lg:opacity-100"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />

      {/* Protección para el contenido */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/20 lg:hidden" />

      {/* Gradiente para desktop */}
      <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-white via-white/10 to-white/5" />

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-6 px-5 py-6 sm:px-6 sm:py-8 lg:grid-cols-[1.18fr_0.82fr] lg:gap-6 lg:px-8 lg:py-7">
        {/* Columna izquierda */}
        <div className="relative z-10">
          <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-[1.12] tracking-tight text-[var(--color-smartpass)] sm:text-4xl lg:text-[46px]">
            Asesoría profesional
            <span className="mt-2 block text-[var(--color-pass)]">
              para tu visa americana
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--color-noche)] sm:text-base sm:leading-7">
            Recibe orientación personalizada, información clara y preparación
            para tu entrevista consular. Te acompañamos en cada etapa del
            proceso.
          </p>

          {/* Pre-evaluación gratuita */}
          <div className="mt-6 flex w-full max-w-[450px] items-start gap-3 rounded-2xl border border-[var(--color-bruma)] bg-[var(--color-niebla)]/95 px-4 py-4 shadow-sm">
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
        </div>

        {/* Formulario */}
        <div className="relative z-10 lg:translate-x-8 xl:translate-x-12">
          <div className="mx-auto w-full max-w-[370px] rounded-3xl border border-[var(--color-bruma)] bg-white p-4 shadow-[0_20px_60px_rgba(30,11,69,0.14)] sm:p-5">
            <div className="text-center">
              <h2 className="mt-1 text-lg font-bold leading-snug text-[var(--color-smartpass)] sm:text-xl">
                Agenda tu pre-evaluación
              </h2>

              <p className="mt-1 text-2xl font-bold text-[var(--color-pass)]">
                GRATIS
              </p>

              <p className="mt-1 text-xs leading-5 text-[var(--color-gris-violeta)]">
                Cuéntanos sobre tu caso y conversemos sobre tu proceso.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-2.5">
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
                  required
                  style={{ fontSize: "14px" }}
                  className="h-9 w-full appearance-none rounded-lg border border-[var(--color-bruma)] bg-white px-3 pr-10 text-[14px] text-[var(--color-noche)] outline-none focus:border-[var(--color-pass)]"
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
                rows={2}
                placeholder="Cuéntanos brevemente tu caso..."
                aria-label="Descripción de tu caso"
                required
                className="w-full resize-y rounded-lg border border-[var(--color-bruma)] bg-white px-3 py-2 text-[14px] leading-4 text-[var(--color-noche)] outline-none transition placeholder:text-[14px] placeholder:text-[var(--color-gris-violeta)] focus:border-[var(--color-pass)] focus:ring-2 focus:ring-[var(--color-pass)]/20"
              />

              {/* Botón */}
              <button
                type="submit"
                className="flex min-h-9 w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-pass)] px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[var(--color-smartpass)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pass)]"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Quiero mi pre-evaluación gratis
              </button>

              {/* Nota de privacidad */}
              <div className="flex items-center justify-center gap-1.5 pt-1 text-[10px] leading-5 text-[var(--color-gris-violeta)]">
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
