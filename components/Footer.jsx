import Link from "next/link";
import Image from "next/image";
import LogoCompetecBlanco from "@/public/img/competec-blanco.png";
import LogoFacebook from "@/public/icons/facebook.png";
import LogoInstagram from "@/public/icons/instagram.png";
import LogoLinkedin from "@/public/icons/linkedin.png";

const Footer = () => {
  return (
    <section className="mt-16 py-12 bg-[#20386C]">
      <div className="mx-auto max-w-7xl px-4  text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-24 pb-14 border-b-2 border-gray-200">
          <div className="block w-full lg:max-w-full max-lg:mx-auto">
            <div className="flex flex-col gap-4 w-full md:max-w-sm">
              <Image
                src={LogoCompetecBlanco}
                alt="Logo Competec en blanco"
                className="w-56 self-center md:self-start"
              />
              <p className="text-base font-normal max-[470px]:text-center leading-8">
                Crece con nosotros! <br /> Llama a nuestro equipo hoy mismo.{" "}
                <br /> Estamos preparados para ayudar.
              </p>
              <div className="mt-2 flex flex-col min-[470px]:flex-row max-[470px]:gap-4 items-center max-[470px]:justify-center">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                  <a
                    className="flex items-center gap-3 transition-all duration-300 hover:font-bold focus-within:outline-0 focus-within:font-bold"
                    href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61559521060311"
                  >
                    <Image
                      src={LogoFacebook}
                      alt="Logo de Facebook"
                      className="w-5"
                    />
                    <span className="text-sm">Facebook</span>
                  </a>
                  <a
                    className="flex items-center gap-3 transition-all duration-300 hover:font-bold focus-within:outline-0 focus-within:font-bold"
                    href="https://www.linkedin.com/company/competec-pe/"
                  >
                    <Image
                      src={LogoLinkedin}
                      alt="Logo de Linkedin"
                      className="w-5"
                    />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    className="flex items-center gap-3 transition-all duration-300 hover:font-bold focus-within:outline-0 focus-within:font-bold"
                    href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61559521060311"
                  >
                    <Image
                      src={LogoInstagram}
                      alt="Logo de Instagram"
                      className="w-5"
                    />
                    <span className="text-sm">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto flex flex-col min-[470px]:flex-row max-[470px]:items-center min-[470px]:justify-between gap-8 lg:gap-10">
            <div>
              <h6 className="text-lg font-bold mb-7 max-[470px]:text-center">
                Nuestros Servicios
              </h6>
              <ul className="flex flex-col max-[470px]:items-center gap-6">
                <li>
                  <a
                    href="#services"
                    className="text-base font-normal max-lg:text-center whitespace-nowrap transition-all duration-300 hover:font-bold focus-within:outline-0 focus-within:font-bold"
                  >
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-base font-normal max-lg:text-center whitespace-nowrap transition-all duration-300 hover:font-bold focus-within:outline-0 focus-within:font-bold"
                  >
                    Desarrollo Web
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-base font-normal max-lg:text-center whitespace-nowrap transition-all duration-300 hover:font-bold focus-within:outline-0 focus-within:font-bold"
                  >
                    Ciberseguridad
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-base font-normal max-lg:text-center whitespace-nowrap transition-all duration-300 hover:font-bold focus-within:outline-0 focus-within:font-bold"
                  >
                    Capacitaciones
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-lg font-bold max-[470px]:text-center mb-7">
                Menú
              </h6>
              <ul className="flex flex-col max-[470px]:items-center gap-12">
                <li>
                  <Link
                    href="#about-us"
                    className="text-base font-normal max-lg:text-center whitespace-nowrap transition-all duration-300 hover:font-bold focus-within:outline-0 focus-within:font-bold"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-base font-normal max-lg:text-center whitespace-nowrap transition-all duration-300 hover:font-bold focus-within:outline-0 focus-within:font-bold"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-base font-normal max-lg:text-center whitespace-nowrap transition-all duration-300 hover:font-bold focus-within:outline-0 focus-within:font-bold"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-lg font-bold max-[470px]:text-center mb-7">
                Contacto
              </h6>
              <ul className="flex flex-col max-[470px]:items-center gap-12">
                <li>
                  <span className="text-base font-normal max-lg:text-center whitespace-nowrap">
                    info@competec.com.pe
                  </span>
                </li>
                <li>
                  <span className="text-base font-normal max-lg:text-center whitespace-nowrap">
                    +51 957 061 045
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-5 md:flex-row items-center first-letter:items-center justify-between pt-7">
          <p className="font-normal text-center text-sm">
            © Copyright 2024, Competec. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
