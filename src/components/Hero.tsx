import { useState } from "react";
import heroBackground from "../assets/hero-background.png";
// import {
//   Award,
//   ChevronDown,
//   CircleCheck,
//   Gift,
//   Lock,
//   Mail,
//   MessageCircle,
//   Phone,
//   User,
//   Users,
// } from "lucide-react";
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
      !formData.nombre ||
      !formData.telefono ||
      !formData.correo ||
      !formData.tipoVisa ||
      !formData.mensaje
    ) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const mensaje = `Hola Smart Pass 

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

    window.open(url, "_blank");

    setFormData({
      nombre: "",
      telefono: "",
      correo: "",
      tipoVisa: "",
      mensaje: "",
    });
  };
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
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

      {/* Contenido */}
      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-5 py-12 sm:px-6 sm:py-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-4 lg:px-8 lg:py-10">
        {/* =========================
            COLUMNA IZQUIERDA
        ========================== */}
        <div className="relative z-10">
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#101c4f] sm:text-5xl lg:text-[52px]">
            Asesoría profesional
            <br />
            <span className="text-[#5b2bcf]">para tu visa americana</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
            Te guiamos en cada paso para que tu proceso sea más fácil, rápido y
            con mayores posibilidades de éxito.
          </p>

          {/* Pre-evaluación */}
          <div className="mt-7 flex w-full max-w-[470px] items-start gap-3 rounded-xl border border-[#d9d0ef] bg-[#f7f2ff] px-4 py-4 shadow-sm sm:gap-4 sm:px-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#5b2bcf] shadow-sm">
              <Gift size={23} strokeWidth={2} />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[#5b2bcf]">
                Pre-evaluación gratuita
              </p>

              <p className="mt-1 text-sm leading-5 text-slate-700">
                Analizamos tu caso sin costo antes de cobrarte. Tu tranquilidad
                primero.
              </p>
            </div>
          </div>

          {/* Estadísticas */}
          {/* <div className="mt-8 grid max-w-[500px] grid-cols-3">
            <div className="flex flex-col items-center px-2 text-center">
              <Users size={28} className="text-[#5b2bcf]" strokeWidth={2.2} />

              <p className="mt-2 text-lg font-extrabold text-[#101c4f] sm:text-2xl">
                +1,000
              </p>

              <p className="text-[11px] leading-4 text-slate-600 sm:text-xs">
                Clientes asesorados
              </p>
            </div>

            <div className="flex flex-col items-center border-x border-slate-200 px-2 text-center">
              <CircleCheck
                size={28}
                className="text-[#5b2bcf]"
                strokeWidth={2.2}
              />

              <p className="mt-2 text-lg font-extrabold text-[#101c4f] sm:text-2xl">
                95%
              </p>

              <p className="text-[11px] leading-4 text-slate-600 sm:text-xs">
                Visas aprobadas
              </p>
            </div>

            <div className="flex flex-col items-center px-2 text-center">
              <Award size={28} className="text-[#5b2bcf]" strokeWidth={2.2} />

              <p className="mt-2 text-lg font-extrabold text-[#101c4f] sm:text-2xl">
                5+ años
              </p>

              <p className="text-[11px] leading-4 text-slate-600 sm:text-xs">
                De experiencia
              </p>
            </div>
          </div> */}
        </div>

        {/* =========================
            FORMULARIO
        ========================== */}
        <div className="relative z-10 lg:translate-x-14 xl:translate-x-24">
          <div className="mx-auto w-full max-w-[410px] rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_15px_45px_rgba(20,35,80,0.16)] sm:p-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-[#101c4f] sm:text-2xl">
                Agenda tu pre-evaluación
              </h2>

              <p className="mt-1 text-3xl font-extrabold text-[#5b2bcf]">
                GRATIS
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Cuéntanos tu caso y te asesoraremos sin costo.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              {/* Nombre */}
              <div className="relative">
                <User
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-[#5b2bcf] focus:ring-2 focus:ring-[#5b2bcf]/10"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Teléfono */}
              <div className="relative">
                <Phone
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="WhatsApp / Teléfono"
                  required
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-[#5b2bcf] focus:ring-2 focus:ring-[#5b2bcf]/10"
                />
              </div>

              {/* Correo */}
              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  required
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-[#5b2bcf] focus:ring-2 focus:ring-[#5b2bcf]/10"
                />
              </div>

              {/* Tipo de visa */}
              <div className="relative">
                <select
                  name="tipoVisa"
                  value={formData.tipoVisa}
                  onChange={handleChange}
                  required
                  className="h-11 w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 pr-10 text-sm text-slate-500 outline-none transition focus:border-[#5b2bcf] focus:ring-2 focus:ring-[#5b2bcf]/10"
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
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>

              {/* Mensaje */}
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                placeholder="Cuéntanos brevemente tu caso..."
                required
                className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#5b2bcf] focus:ring-2 focus:ring-[#5b2bcf]/10"
              />

              {/* Botón */}
              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#5b2bcf] px-5 text-sm font-bold text-white transition hover:bg-[#4c22b3]"
              >
                <MessageCircle size={18} />
                Quiero mi pre-evaluación gratis
              </button>

              {/* Seguridad */}
              <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-slate-400">
                <Lock size={12} />
                Tus datos están 100% protegidos
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
