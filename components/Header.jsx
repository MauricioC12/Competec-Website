"use client";
import Link from "next/link";
import Image from "next/image";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import LogoCompetec from "@/public/img/Logo2.png";
import { useState } from "react";

const Header = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:px-40 md:py-8 py-4 px-7 md:flex justify-between items-center">
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <Link href="/">
            <Image
              src={LogoCompetec}
              alt="Logo Competec"
              className="w-44 lg:w-56"
              width={224}
              height={126}
              priority
            />
          </Link>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            isOpen ? "top-16" : "top-[-490px]"
          }`}
        >
          <li className="md:my-0 md:ml-8 my-7 font-semibold">
            <Link href="/">Inicio</Link>
          </li>
          <li className="md:my-0 md:ml-8 my-7 font-semibold">
            <Link href="#services">Servicios</Link>
          </li>
          <li className="md:my-0 md:ml-8 my-7 font-semibold">
            <Link href="#about-us">Nosotros</Link>
          </li>
          <li className="md:my-0 md:ml-8 my-7 font-semibold">
            <Link href="#blog">Blog</Link>
          </li>
          <li className="md:my-0 md:ml-8 my-7 font-semibold">
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
