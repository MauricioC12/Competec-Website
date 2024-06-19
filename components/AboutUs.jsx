const AboutUs = () => {
  return (
    <section className="py-20 px-6 lg:px-48 -scroll-mt-20" id="about-us">
      <div className="relative flex flex-col lg:flex-row h-screen dark:text-white border border-gray-400 rounded-xl dark:bg-[#141416]">
        <div className="relative lg:w-2/3 h-full flex items-center justify-center border-r border-gray-400">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover rounded-tl-xl rounded-bl-lg brightness-75"
          >
            <source
              src="/videos/about-us.mp4"
              type="video/mp4"
            />
          </video>
          <div className="relative z-10 flex items-center justify-center p-8 bg-opacity-60 text-center">
            <h1 className="text-4xl font-bold text-white">¿Quiénes Somos?</h1>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md">
            <p className="text-lg p-4 lg:p-20  text-[#8A8A8A]">
              Somos <span className="font-bold text-[#00274A]">Competec</span>,
              empresa especializada en consultoría y asesoramiento en
              Tecnologías Cloud. Con experiencia en el sector y un equipo
              calificado, ayudamos a las empresas a adoptar y optimizar
              soluciones en la nube.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
