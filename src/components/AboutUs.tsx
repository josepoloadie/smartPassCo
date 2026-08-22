import { MessageCircle } from "lucide-react";
import Sara from "../assets/Sara.png";

function AboutUs() {
  return (
    <section id="nosotros" className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Foto de Sara */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-[#eee8ff]" />

              <img
                src={Sara}
                alt="Sara, fundadora de SmartPass"
                className="relative h-[420px] w-[340px] rounded-3xl object-cover shadow-xl sm:h-[500px] sm:w-[400px]"
              />
            </div>
          </div>

          {/* Contenido */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#5b2bcf]">
              Conoce a Sara
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#101c4f] sm:text-4xl">
              Una persona real detrás de{" "}
              <span className="text-[#5b2bcf]">SmartPass</span>
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-7 text-slate-600">
              <p>
                <strong className="font-semibold text-slate-800">
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
            <div className="mt-7 rounded-2xl border border-[#e5ddff] bg-[#f8f6ff] p-5">
              <h3 className="mb-2 font-bold text-[#101c4f]">
                Nuestra filosofía: transparencia
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                En SmartPass no prometemos aprobaciones ni resultados, porque
                sabemos que la decisión final siempre está en manos del oficial
                consular. Lo que sí podemos hacer es acompañarte, prepararte y
                ayudarte a presentar tu proceso de la forma más clara, coherente
                y responsable posible.
              </p>
            </div>

            <p className="mt-6 text-[15px] italic leading-7 text-slate-600">
              Detrás de SmartPass hay una persona que también sueña con conocer
              el mundo. Y hoy, me encanta poder ayudarte a dar el primer paso
              hacia tu próximo destino. ✈️
            </p>

            {/* CTA */}
            <a
              href="https://wa.me/573337509047?text=Hola%20Sara%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20el%20proceso%20de%20visa."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#5b2bcf] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#4c22b3]"
            >
              <MessageCircle size={18} />
              Hablar con Sara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
