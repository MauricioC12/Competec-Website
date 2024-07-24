import Link from "next/link";

const BlogSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-40 mx-auto">
      <h2 className="text-3xl font-extrabold text-[#00274A] mb-8">Blogs Recientes</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Tarjeta principal grande a la izquierda */}
        <div className="lg:col-span-1 h-full flex flex-col overflow-hidden">
          <Link href="/blog/desarrollo-web" className="pointer">
            <img src="/img/blog-web.jpg" alt="Innovación y Creatividad en la web: Lo que debes saber para mantener tu sitio a la vanguardia" className="w-full h-[20.5rem] object-cover rounded-lg" />
          </Link>
          <div className='py-4'>
            <p className="my-3 text-sm text-gray-500">16 May, 2024</p>
            <h3 className="text-lg font-semibold text-gray-800">Innovación y Creatividad en la web: Lo que debes saber para mantener tu sitio a la vanguardia</h3>
            <p className="text-sm text-gray-600 mt-2">En este artículo, exploraremos algunas de las tendencias más relevantes en diseño y desarrollo web para 2024.</p>
            <div className="mt-4">
              <span className="p-2 text-xs font-medium text-blue-600 mr-2 border rounded-lg">Desarrollo Web</span>
              <span className="p-2 text-xs font-medium text-blue-600 mr-2 border rounded-lg">Frontend</span>
              <span className="p-2 text-xs font-medium text-blue-600 border rounded-lg">Tecnología</span>
            </div>
          </div>
        </div>

        {/* Tarjetas pequeñas a la derecha */}
        <div className="flex flex-col gap-5">
          <div className="flex lg:flex-row flex-col items-center overflow-hidden">
            <Link href="/blog/servicios-cloud" className="pointer w-[90%] h-64">
            <img src="/img/cloud-computing.png" alt="Una Guía Completa para Entender el Cloud Computing y sus Beneficios" className="h-full object-cover rounded-lg" />
            </Link>
            <div className="p-4">
              <p className="mb-4 text-sm text-gray-500">19 Jul, 2024</p>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">Una guía completa para entender el Cloud Computing y sus beneficios</h3>
              <p className="text-sm text-gray-600 mt-2">Explora qué son los servicios cloud, sus tipos, beneficios y cómo pueden impactar tu organización.</p>
              <div className="mt-6">
                <span className="p-2 text-xs font-medium text-blue-600 border rounded-lg mr-2">Cloud</span>
                <span className="p-2 text-xs font-medium text-blue-600 border rounded-lg mr-2">TI</span>
                <span className="p-2 text-xs font-medium text-blue-600 border rounded-lg">Tecnología</span>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col items-center overflow-hidden">
            <Link href="/blog/ciberseguridad" className="pointer w-[91.5%] h-64">
              <img src="/img/ciberseguridad.jpg" alt="La Importancia de la Ciberseguridad en 2024" className="h-full object-cover rounded-lg" />
            </Link>
            <div className="p-4">
              <p className="mb-4 text-sm text-gray-500">26 Jul, 2024</p>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">La importancia de la Ciberseguridad: Protección en el mundo digital</h3>
              <p className="text-sm text-gray-600 mt-2">Explora su importancia actual, las amenazas comunes y cómo protegerse eficazmente contra ellas.</p>
              <div className="mt-6">
                <span className="p-2 text-xs font-medium text-blue-600 border rounded-lg mr-2">Ciberseguridad</span>
                <span className="p-2 text-xs font-medium text-blue-600 border rounded-lg">Tecnología</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
