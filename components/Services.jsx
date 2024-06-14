const Services = () => {
  return (
    <div className="py-16" id="#services">
      <section className="relative py-14 overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay loop muted className="w-full h-full object-cover brightness-90">
          <source
            src="/videos/whiteLines.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="relative container flex flex-col lg:flex-row  mx-auto">
        <div className="flex items-center justify-center">
          <div className="text-center lg:text-start px-10 lg:px-40">
            <h2 className="text-[#005AAA] text-lg font-bold mb-4">SERVICIOS</h2>
            <h1 className="text-3xl text-white font-bold">
              Transformamos la industria con el poder de la tecnología
            </h1>
          </div>
        </div>
        <div className="relative flex flex-wrap justify-center space-x-4 space-y-4">
          <div className="bg-white flex flex-col justify-between h-[348px] shadow-lg rounded-lg p-8 w-64 text-start transform translate-y-10 lg:-translate-y-10">
            <div className="mb-6">
              <img src="/icons/cloud-service.png" alt="ícono de ciberseguridad" className="w-14 h-14" />
            </div>
            <h4 className="text-xl text-[#005AAA] font-semibold">
              Cloud <br /> Solutions
            </h4>
            <p className="text-[#8A8A8A]">
              Migración y soporte para sistemas en la nube de Huawei
            </p>
            <div className="mt-6 h-[3px] bg-[#8A8A8A] rounded-md"></div>
          </div>
          <div className="bg-white flex flex-col justify-between shadow-lg rounded-lg p-8 text-start w-64 transform translate-y-10 -translate-x-2 md:translate-y-6 md:translate-x-1 lg:translate-y-8">
            <div className="mb-6">
              <img src="/icons/desarrollo-web.png" alt="ícono de ciberseguridad" className="w-14 h-14" /> 
            </div>
            <h4 className="text-xl text-[#005AAA] font-semibold mb-4">
              Diseño y <br /> Desarrollo Web
            </h4>
            <p className="text-[#8A8A8A]">
              Desarrollamos webs para empresas y marcas totalmente modernas y
              responsivas.
            </p>
            <div className="mt-6 h-[3px] bg-[#8A8A8A] rounded-md"></div>
          </div>
          <div className="bg-white flex flex-col justify-between shadow-lg rounded-lg p-8 text-start w-64 transform translate-y-10 -translate-x-2 lg:-translate-y-16 lg:-translate-x-2">
            <div className="mb-6">
              <img src="/icons/ciberseguridad.png" alt="ícono de ciberseguridad" className="w-14 h-14" />
            </div>
            <h4 className="text-xl text-[#005AAA] font-semibold">
              Ciberseguridad
            </h4>
            <p className="text-[#8A8A8A]">
              Asesoría de certificación ISO 27001 y seguridad de datos.
            </p>
            <div className="mt-6 h-[3px] bg-[#8A8A8A] rounded-md"></div>
          </div>
          <div className="bg-white flex flex-col justify-between shadow-lg rounded-lg p-8 text-start w-64 transform translate-y-10 -translate-x-2 lg:-translate-x-1 lg:translate-y-8">
            <div className="mb-6">
              <img src="/icons/ti.png" alt="ícono de ciberseguridad" className="w-14 h-14" />
            </div>
            <h4 className="text-xl text-[#005AAA] font-semibold mb-4">
              Capacitaciones <br /> de TI
            </h4>
            <p className="text-[#8A8A8A]">
              Capacite a su equipo para la transformación digital con nuestros
              planes de formación empresarial.
            </p>
            <div className="mt-6 h-[3px] bg-[#8A8A8A] rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Services;
