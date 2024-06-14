import Link from "next/link";

const Banner = () => {
  return (
    <div className="py-8">
      <section className="h-full py-10 px-6 lg:px-48">
        <div className="relative flex items-center justify-center h-96 dark:text-white">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full flex gap-8 lg:flex-row flex-col items-center justify-between">
              <div className="relative w-full lg:w-2/3">
                <img
                  src="/img/banner.png"
                  alt="Banner"
                  className="relative z-10"
                />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-end">
                <h1 className="text-4xl text-[#00274A] lg:text-6xl font-bold lg:leading-tight tracking-wider">
                  Soluciones Que <br /> Transforman <br /> Tu Negocio
                </h1>
                <Link href="/contacto">
                  <button className="mt-8 bg-[#005AAA] hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg">
                    Contrata nuestros servicios
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
