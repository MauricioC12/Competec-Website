"use client";
import Image from "next/image";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import LogoHuawei from "@/public/img/huawei-logo.png";
import LogoCpcon from "@/public/img/logoCpcon.png";
import LogoSumtec from "@/public/img/logoSumtec.png";

const Partners = () => {
  const { ref: partnerSectionRef, isVisible } = useScrollAnimation(0.4);

  return (
    <section
      ref={partnerSectionRef}
      className="py-16 px-6 lg:px-40 flex items-center justify-center"
    >
      <div className="mx-auto w-full rounded-lg">
        <div className="grid items-center overflow-hidden rounded-xl lg:divide-x divide-y divide-gray-400 border border-gray-400 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <div
            className={`h-full transition flex items-center justify-center ${
              isVisible ? "animate-fade-in-down delay-150" : "opacity-0"
            }`}
          >
            <div className="space-y-8 py-12 p-8">
              <h5 className="text-3xl text-start font-bold text-[#00274A] dark:text-white transition animate-fade-in-down">
                Nuestros <br /> Socios
              </h5>
            </div>
          </div>
          <div
            className={`h-full transition flex items-center justify-center ${
              isVisible ? "animate-pulse-fade-in delay-150" : "opacity-0"
            }`}
          >
            <div className="relative space-y-8 py-12 p-8">
              <Image src={LogoHuawei} alt="Logo Huawei" className="w-40" />
            </div>
          </div>
          <div
            className={`h-full transition flex items-center justify-center ${
              isVisible ? "animate-pulse-fade-in delay-150" : "opacity-0"
            }`}
          >
            <div className="relative space-y-8 py-12 p-8">
              <Image src={LogoCpcon} alt="Logo Cpcon" className="w-28" />
            </div>
          </div>
          <div
            className={`h-full transition flex items-center justify-center ${
              isVisible ? "animate-pulse-fade-in delay-150" : "opacity-0"
            }`}
          >
            <div className="relative space-y-8 py-12 p-8">
              <Image src={LogoSumtec} alt="Logo Sumtec" className="w-44" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
