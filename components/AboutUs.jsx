'use client'
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AboutUs = () => {
  const { ref: partnerSectionRef, isVisible } = useScrollAnimation(0.4);

  return (
    <section ref={partnerSectionRef} className="py-12 px-6 lg:px-40 -scroll-mt-20" id="about-us">
      <div className="relative flex flex-col lg:flex-row h-full dark:text-white border border-gray-400 rounded-xl dark:bg-[#141416]">
        <div className="relative lg:w-2/3 flex items-center justify-center lg:border-r border-gray-400">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-bl-lg brightness-75"
          >
            <source
              src="/videos/about-us.mp4"
              type="video/mp4"
            />
          </video>
          <div className="relative z-10 flex items-center justify-center p-8 bg-opacity-60 text-center">
            <h1 className={`text-4xl font-bold text-white ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>¿Quiénes Somos?</h1>
          </div>
        </div>
        <div className="lg:w-1/2 h-full flex items-center justify-center p-8">
          <div className="max-w-md p-4 lg:p-20">
            <p className={`mb-6 text-lg text-[#8A8A8A] ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              Somos <span className="font-bold text-[#78BBF8]">Competec</span>,
              empresa especializada en consultoría y asesoramiento en
              Tecnologías Cloud. Con experiencia en el sector y un equipo
              calificado, ayudamos a las empresas a adoptar y optimizar
              soluciones en la nube.
            </p>
            <p className={`mb-6 text-lg text-[#8A8A8A] ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              Acompañamiento 360° en su adopción a la nube de <span className="font-bold text-[#8A8A8A]">Huawei</span>.
            </p>
            <p className={`text-lg text-[#8A8A8A] ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>Escuchamos tus necesidades, nos alineamos con sus objetivos y lo apoyamos para que los alcance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
