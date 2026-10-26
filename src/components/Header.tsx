import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/LogoHorizontal.svg";
// import Logo from "../assets/LogoHorizontal.png";

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Proceso", href: "#proceso" },
  { name: "Servicios", href: "#servicios" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "FAQ", href: "#preguntas" },
];

const WHATSAPP_URL = "https://wa.me/573337509047";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-bruma)] bg-white/95 shadow-[0_4px_20px_rgba(30,11,69,0.04)] backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1420px] items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo original */}
        <a
          href="#inicio"
          className="flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-pass)]"
          onClick={() => setMenuOpen(false)}
          aria-label="SmartPassCo - Inicio"
        >
          <img
            src={Logo}
            alt="SmartPassCo"
            className="h-auto max-h-[64px] w-auto max-w-[190px] object-contain"
          />
        </a>

        {/* Navegación escritorio */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-semibold text-[var(--color-smartpass)] transition-colors duration-200 hover:text-[var(--color-pass)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-pass)] xl:text-sm"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* WhatsApp escritorio */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-pass)] px-4 text-sm font-semibold !text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-smartpass)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-pass)] lg:flex"
        >
          <MessageCircle size={17} aria-hidden="true" />
          Hablemos por WhatsApp
        </a>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-[var(--color-smartpass)] transition-colors hover:bg-[var(--color-niebla)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pass)] lg:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Navegación móvil */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--color-bruma)] bg-white px-5 py-5 shadow-lg lg:hidden"
        >
          <nav
            aria-label="Navegación móvil"
            className="mx-auto flex max-w-lg flex-col"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[var(--color-niebla)] py-3.5 text-sm font-medium text-[var(--color-smartpass)] transition-colors hover:text-[var(--color-pass)] focus-visible:outline-2 focus-visible:outline-[var(--color-pass)]"
              >
                {item.name}
              </a>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-pass)] px-4 py-3 text-sm font-semibold !text-white transition-colors hover:bg-[var(--color-smartpass)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pass)]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Hablemos por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
