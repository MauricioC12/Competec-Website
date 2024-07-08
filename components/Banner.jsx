import Link from "next/link";

const Banner = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-6 lg:px-48">
        <div className="relative flex items-center justify-center h-full min-h-[50vh] lg:min-h-[96] dark:text-white">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full flex flex-col lg:flex-row items-center justify-between lg:items-start">
              <div className="w-full lg:w-1/2">
                <img
                  src="/img/banner.png"
                  alt="Banner"
                  className="mx-auto lg:mx-0"
                />
              </div>
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 text-center lg:text-right">
                <h1 className="text-3xl lg:text-5xl font-bold lg:leading-tight tracking-wider">
                  Soluciones Que <br /> Transforman <br /> Tu Negocio
                </h1>
                <Link href="/contacto" className="mt-8 inline-block bg-[#005AAA] hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg">
                    Cotiza nuestros servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;