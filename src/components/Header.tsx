import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/LogoHorizontal.png";

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Proceso", href: "#proceso" },
  { name: "Servicios", href: "#servicios" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "FAQ", href: "#preguntas" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1420px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={Logo}
            alt="Smart Pass"
            className="h-[64px] w-auto object-contain"
          />
        </a>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[14px] font-semibold text-slate-700 transition-colors hover:text-[#5b2bcf]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* WhatsApp desktop */}
        <a
          href="https://wa.me/573337509047"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-9 items-center gap-2 rounded-lg bg-[#5b2bcf] px-4 text-[11px] font-bold text-white transition hover:bg-[#4c22b3] lg:flex"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#101c4f] transition hover:bg-slate-50 lg:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-[#5b2bcf]"
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://wa.me/573337509047"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex h-11 items-center justify-center gap-2 rounded-lg bg-[#5b2bcf] text-sm font-bold text-white"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
