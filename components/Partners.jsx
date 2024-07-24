const Partners = () => {
  return (
    <div className="py-16 px-6 lg:px-40 flex items-center justify-center">
      <div className="mx-auto w-full rounded-lg dark:bg-[#141416]">
        <div className="grid divide-x divide-y items-center divide-gray-400 overflow-hidden rounded-xl border border-gray-400 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <div className="h-full transition flex items-center justify-center">
            <div className="space-y-8 py-12 p-8">
              <h5 className="text-3xl text-start font-bold text-[#00274A] dark:text-white transition">
                Nuestros <br /> Socios
              </h5>
            </div>
          </div>
          <div className="h-full transition flex items-center justify-center">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/huawei-logo.png"
                alt="Logo Huawei"
                className="w-40"
              />
            </div>
          </div>
          <div className="h-full transition flex items-center justify-center">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/logoCpcon.png"
                className="w-28"
                alt="Logo Cpcon"
              />
            </div>
          </div>
          <div className="h-full transition flex items-center justify-center">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/logoSumtec.png"
                className="w-44"
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
