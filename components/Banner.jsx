import Link from "next/link";

const Banner = () => {
  return (
    <section className="py-12 lg:py-24 md:h-screen h-[30rem] lg:h-full">
      <div className="container mx-auto w-full px-6 lg:px-20 h-full">
        <div className="relative flex items-center justify-center h-full min-h-[50vh] dark:text-white">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between">
            <div
        className="absolute inset-x-0 top-[-5rem] transform-gpu overflow-hidden blur-3xl lg:top-[3rem] lg:left-[-21rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#4FA9FA] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] lg:w-[45rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
              <div className="w-full md:w-3/4 lg:w-1/2">
                <img
                  src="/img/banner.png"
                  alt="Banner"
                  className="mx-auto lg:mx-0"
                />
              </div>
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-right">
                <h1 className="lg:pl-10 text-3xl lg:text-[3.7rem] text-[#00274A] font-bold lg:leading-tight tracking-wider">
                  Soluciones Que Transforman Tu Negocio
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