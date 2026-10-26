import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import logo from "../assets/LogoHorizontal.svg";
import { Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "573337509047";

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas frecuentes", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  {
    label: "Primera vez",
    message:
      "Hola, quiero información para solicitar mi visa americana por primera vez.",
  },
  {
    label: "Renovación",
    message: "Hola, quiero información para renovar mi visa americana.",
  },
  {
    label: "Preparación para entrevista",
    message:
      "Hola, quiero información sobre la preparación para mi entrevista de visa americana.",
  },
];

function Footer() {
  const serviceUrl = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const linkClass =
    "text-sm text-[var(--color-lavanda)] transition-colors duration-200 hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-lavanda)]";

  const contactLinkClass =
    "flex items-start gap-3 text-[var(--color-lavanda)] transition-colors duration-200 hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-lavanda)]";

  return (
    <footer className="relative overflow-hidden bg-[var(--color-noche)] px-5 pt-12 text-white sm:px-6 sm:pt-14 lg:px-8">
      {/* Decoración sutil de marca */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-smartpass)] opacity-30 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Contenido principal */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Marca */}
          <div>
            <a
              href="#inicio"
              aria-label="SmartPassCo, volver al inicio"
              className="mb-4 inline-flex rounded-xl bg-white px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-lavanda)]"
            >
              <img
                src={logo}
                alt="SmartPass Visas & Immigration Services"
                loading="lazy"
                className="h-auto max-h-[56px] w-auto max-w-[200px] object-contain"
              />
            </a>

            <p className="max-w-[270px] text-sm leading-6 text-[var(--color-lavanda)]">
              Asesoría y acompañamiento para tu proceso de visa americana.
              Información clara para dar el siguiente paso con confianza.
            </p>

            {/* Redes sociales */}
            <p className="mt-6 text-sm font-semibold text-white">
              Síguenos en redes sociales
            </p>

            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://instagram.com/smartpass.co"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de SmartPassCo (abre en una pestaña nueva)"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-gris-violeta)]/50 bg-white/5 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-lavanda)]"
              >
                <img
                  src={instagram}
                  alt=""
                  className="h-5 w-5 object-contain"
                />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar a SmartPassCo por WhatsApp (abre en una pestaña nueva)"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-gris-violeta)]/50 bg-white/5 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-lavanda)]"
              >
                <img src={whatsapp} alt="" className="h-5 w-5 object-contain" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Enlaces rápidos
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Nuestros servicios
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={serviceUrl(service.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-start gap-1 leading-6 ${linkClass}`}
                  >
                    <span>{service.label}</span>
                    <ArrowUpRight
                      size={14}
                      className="mt-1 shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div id="contacto" className="scroll-mt-24">
            <h3 className="mb-5 text-sm font-semibold text-white">Hablemos</h3>

            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLinkClass}
                >
                  <MessageCircle
                    size={18}
                    className="mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>+57 333 750 9047</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:sospino@smartpassco.co"
                  className={contactLinkClass}
                >
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="break-all">sospino@smartpassco.co</span>
                </a>
              </li>

              <li className="flex items-start gap-3 text-[var(--color-lavanda)]">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>Colombia · Atención remota</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="mt-12 h-px bg-[var(--color-gris-violeta)]/60" />

        {/* Copyright */}
        <div className="flex flex-col items-center gap-3 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs leading-5 text-[var(--color-lavanda)]">
            © {new Date().getFullYear()} Smart Pass Visas & Immigration
            Services. Todos los derechos reservados.
          </p>

          <p className="text-xs text-[var(--color-lavanda)]">
            Diseñado y desarrollado por{" "}
            <a
              href="https://www.linkedin.com/in/josepoloadie/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-[var(--color-pass)] underline-offset-4 transition-colors hover:!text-[var(--color-lavanda)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-lavanda)]"
            >
              José Polo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
