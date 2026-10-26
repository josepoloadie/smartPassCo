import { MessageCircle } from "lucide-react";
import Sara from "../assets/Sara.png";

function AboutUs() {
  return (
    <section
      id="nosotros"
      className="bg-[var(--color-white)] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Fotografía de Sara */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl bg-[var(--color-bruma)] sm:-bottom-4 sm:-right-4"
              />

              <img
                src={Sara}
                alt="Sara, fundadora de SmartPass"
                loading="lazy"
                className="relative h-[380px] w-[300px] rounded-3xl object-cover shadow-xl sm:h-[500px] sm:w-[400px]"
              />
            </div>
          </div>

          {/* Contenido */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-pass)] sm:text-sm">
              Conoce a Sara
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-smartpass)] sm:text-4xl lg:text-[42px]">
              Una persona real detrás de{" "}
              <span className="text-[var(--color-pass)]">SmartPass</span>
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-7 text-[var(--color-gris-violeta)]">
              <p>
                <strong className="font-semibold text-[var(--color-smartpass)]">
                  Hola, soy Sara 👋🏼
                </strong>
              </p>

              <p>
                Soy la fundadora de SmartPass y una apasionada por los viajes,
                las nuevas culturas y todo lo relacionado con los procesos
                migratorios.
              </p>

              <p>
                Siempre me ha interesado conocer el mundo y entender todo lo que
                hay detrás de la posibilidad de viajar a otro país. De esa
                pasión nació la idea de crear SmartPass: un espacio donde las
                personas puedan encontrar orientación, preparación y
                acompañamiento durante su proceso de visa.
              </p>

              <p>
                Sé que solicitar una visa puede generar muchas dudas y nervios.
                Por eso, mi propósito es ayudarte a entender el proceso, conocer
                mejor tu perfil y prepararte para que puedas afrontarlo con
                mayor seguridad y confianza.
              </p>
            </div>

            {/* Transparencia */}
            <div className="mt-7 rounded-2xl border border-[var(--color-bruma)] bg-[var(--color-niebla)] p-5 sm:p-6">
              <h3 className="mb-2 font-semibold text-[var(--color-smartpass)]">
                Nuestra filosofía: transparencia
              </h3>

              <p className="text-sm leading-6 text-[var(--color-gris-violeta)]">
                En SmartPass no prometemos aprobaciones ni resultados, porque
                sabemos que la decisión final siempre está en manos del oficial
                consular. Lo que sí podemos hacer es acompañarte, prepararte y
                ayudarte a presentar tu proceso de la forma más clara, coherente
                y responsable posible.
              </p>
            </div>

            <p className="mt-6 text-[15px] italic leading-7 text-[var(--color-gris-violeta)]">
              Detrás de SmartPass hay una persona que también sueña con conocer
              el mundo. Y hoy, me encanta poder ayudarte a dar el primer paso
              hacia tu próximo destino. ✈️
            </p>

            {/* Llamada a la acción */}
            <a
              href="https://wa.me/573337509047?text=Hola%20Sara%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20el%20proceso%20de%20visa."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-pass)] px-6 py-3 text-sm font-semibold !text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-smartpass)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pass)]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Hablar con Sara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
