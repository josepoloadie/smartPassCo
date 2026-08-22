import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import logo from "../assets/LogoHorizontal.png";
import { Mail, MapPin, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#111c50] px-6 pt-12 text-white lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Contenido principal */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <img
              src={logo}
              alt="Smart Pass Visas & Immigration Services"
              className="mb-4 h-18 w-auto brightness-0 invert"
            />

            <p className="max-w-[250px] text-sm leading-6 text-white/75">
              Asesoría profesional para visas americanas. Te acompañamos en cada
              paso del proceso.
            </p>

            {/* Redes */}
            <p className="mt-5 text-sm font-medium">
              Síguenos en redes sociales
            </p>

            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/smartpass.co"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-transform hover:scale-110"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-6 h-6 object-contain"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/573337509047"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="transition-transform hover:scale-110"
              >
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  className="w-6 h-6 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="mb-4 text-sm font-bold">Enlaces rápidos</h3>

            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a href="#inicio" className="hover:text-white">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#servicios" className="hover:text-white">
                  Servicios
                </a>
              </li>

              <li>
                <a href="#proceso" className="hover:text-white">
                  Proceso
                </a>
              </li>

              <li>
                <a href="#testimonios" className="hover:text-white">
                  Testimonios
                </a>
              </li>

              <li>
                <a href="#preguntas" className="hover:text-white">
                  Preguntas frecuentes
                </a>
              </li>

              <li>
                <a href="#contacto" className="hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="mb-4 text-sm font-bold">Servicios</h3>

            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a
                  href="https://wa.me/573337509047?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20solicitar%20mi%20visa%20americana%20por%20primera%20vez."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Primera vez
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/573337509047?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20renovar%20mi%20visa%20americana."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Renovación
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/573337509047?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20preparaci%C3%B3n%20para%20mi%20entrevista%20de%20visa%20americana."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Preparación para entrevista
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div id="contacto">
            <h3 className="mb-4 text-sm font-bold">Contacto</h3>

            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span>+57 333 750 9047</span>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>sospino@smartpassco.co</span>
              </li>

              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea */}
        <div className="mt-10 border-t border-white/10" />

        {/* Copyright */}
        <div className="py-5 text-center text-xs text-white/60">
          <p>
            {" "}
            © 2026 Smart Pass Visas & Immigration Services. Todos los derechos
            reservados.
          </p>

          <p className="mt-2 text-xs text-white/50">
            Diseñado y desarrollado por{" "}
            <a
              href="https://www.linkedin.com/in/josepoloadie/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
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
