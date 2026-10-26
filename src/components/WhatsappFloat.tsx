import WhatsAppIcon from "../assets/WhatsApp.svg.webp";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573337509047?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20SmartPass."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-4 z-[100] flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-lavanda)] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <img src={WhatsAppIcon} alt="" className="h-full w-full object-contain" />
    </a>
  );
}

export default WhatsAppFloat;
