/* eslint-disable @next/next/no-img-element */
"use client"
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref: partnerSectionRef, isVisible } = useScrollAnimation(0.4);

  return (
    <section ref={partnerSectionRef} className="py-16 -scroll-mt-20" id="services">
      <div className="relative py-14 overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover brightness-90"
          >
            <source src="/videos/whiteLines.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative container flex flex-col lg:flex-row  mx-auto">
          <div className="flex items-center justify-center">
            <div className="text-center lg:text-start px-10 lg:px-40">
              <h2 className={`text-[#78BBF8] text-lg font-bold mb-4 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
                SERVICIOS
              </h2>
              <h1 className={`text-3xl text-white font-bold ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
                Transformamos la industria con el poder de la <br /> tecnología
              </h1>
            </div>
          </div>
          <div className="relative flex flex-wrap justify-center space-x-4 space-y-4">
            <div className="services-wrapper gap-4 lg:-translate-y-10">
              <div className={`mb-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <img
                  src="/icons/cloud.png"
                  alt="ícono de cloud service"
                  className="w-14 h-14"
                />
              </div>
              <h4 className={`card-title ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                Cloud <br /> Solutions
              </h4>
              <p className={`text-[#8A8A8A] ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                Migración y soporte para sistemas en la nube de Huawei
              </p>
              <div className="mt-6 h-[4px] bg-[#8A8A8A] rounded-md"></div>
            </div>
            <div className="services-wrapper gap-4 -translate-x-2 md:translate-y-6 md:translate-x-1 lg:translate-y-8">
              <div className={`mb-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <img
                  src="/icons/desarrollo-web.png"
                  alt="ícono de desarrollo web"
                  className="w-14 h-14"
                />
              </div>
              <h4 className={`card-title ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                Diseño y <br /> Desarrollo Web
              </h4>
              <p className={`text-[#8A8A8A] ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                Desarrollamos webs para empresas y marcas totalmente modernas y
                responsivas.
              </p>
              <div className="mt-6 h-[4px] bg-[#8A8A8A] rounded-md"></div>
            </div>
            <div className="services-wrapper gap-2 -translate-x-2 lg:-translate-y-14 lg:-translate-x-2">
              <div className={`mb-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <img
                  src="/icons/ciberseguridad.png"
                  alt="ícono de ciberseguridad"
                  className="w-14 h-14"
                />
              </div>
              <h4 className={`card-title ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                Ciberseguridad
              </h4>
              <p className={`text-[#8A8A8A] ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                Asesoría de certificación ISO 27001 y seguridad de datos.
              </p>
              <div className="mt-6 h-[3px] bg-[#8A8A8A] rounded-md"></div>
            </div>
            <div className="services-wrapper gap-2 -translate-x-2 lg:-translate-x-1 lg:translate-y-8">
              <div className={`mb-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <img
                  src="/icons/capacitaciones.png"
                  alt="ícono de capacitaciones"
                  className="w-14 h-14"
                />
              </div>
              <h4 className={`card-title mb-4 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                Capacitaciones <br /> de TI
              </h4>
              <p className={`text-[#8A8A8A] ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                Capacite a su equipo para la transformación digital con nuestros
                planes de formación empresarial.
              </p>
              <div className="mt-6 h-[3px] bg-[#8A8A8A] rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
