import Image from "next/image";

const Partners = () => {
  return (
    <div className="flex items-center justify-center py-28 px-6 lg:px-48">
      <div className="mx-auto w-full rounded-lg dark:bg-[#141416]">
        <div className="grid divide-x divide-y items-center divide-gray-700 overflow-hidden rounded-xl border border-gray-400 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <div className="h-full transition flex items-center justify-center">
            <div className="space-y-8 py-12 p-8">
              <h5 className="text-3xl text-start font-bold text-[#00274A] dark:text-white transition">
                Nuestros <br /> Socios
              </h5>
            </div>
          </div>
          <div className="h-full transition flex items-center justify-center">
            <div className="relative space-y-8 py-12 p-8">
              <Image
                src="/img/huawei-logo.png"
                width={160}
                height={160}
                alt="Logo Huawei"
              />
            </div>
          </div>
          <div className="h-full transition flex items-center justify-center">
            <div className="relative space-y-8 py-12 p-8">
              <Image
                src="/img/logoCpcon.png"
                width={120}
                height={120}
                alt="Logo Cpcon"
              />
            </div>
          </div>
          <div className="h-full transition flex items-center justify-center">
            <div className="relative space-y-8 py-12 p-8">
              <Image
                src="/img/logoSumtec.png"
                width={180}
                height={180}
                alt="Logo Sumtec"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
