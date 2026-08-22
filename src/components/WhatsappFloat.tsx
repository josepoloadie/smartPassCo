import WhatsAppIcon from "../assets/WhatsApp.svg.webp";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573337509047?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20SmartPass."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
    >
      <img
        src={WhatsAppIcon}
        alt="WhatsApp"
        className="h-full w-full object-contain"
      />
    </a>
  );
}

export default WhatsAppFloat;
