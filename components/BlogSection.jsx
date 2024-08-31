import Image from "next/image";
import Link from "next/link";
import BlogWeb from "@/public/img/blog-web.jpg";
import BlogComputing from "@/public/img/cloud-computing.png";
import BlogCibersecurity from "@/public/img/ciberseguridad.jpg";
import BlogCapacitaciones from "@/public/img/capacitaciones.jpg";

const BlogSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-40 mx-auto" id="blog">
      <h2 className="text-3xl font-extrabold text-[#00274A] mb-8">
        Blogs Recientes
      </h2>
      <div className="container py-6 mx-auto space-y-6 sm:space-y-12">
        {/* Tarjeta Grande */}
        <div className="lg:px-7 block max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12">
          <Link href="/blog/desarrollo-web" className="pointer lg:col-span-7">
            <Image
              src={BlogWeb}
              className="w-full h-64 sm:h-96 object-cover rounded"
              alt="Innovación y Creatividad en la web: Lo que debes saber para mantener tu sitio a la vanguardia"
            />
          </Link>
          <div className="p-4 space-y-2 lg:col-span-5">
            <h3 className="mb-3 text-xl font-semibold sm:text-4xl">
              Innovación y creatividad en la web: Lo que debes saber para
              mantener tu sitio a la vanguardia
            </h3>
            <span className="text-xs">February 19, 2021</span>
            <p>
              ¿Es esencial que las empresas mantengan sus sitios web con las
              últimas tendencias? En este artículo, exploraremos algunas de las
              tendencias más relevantes en diseño y desarrollo web para 2024.
            </p>
            <div className="pt-3 flex gap-2">
              <span className="blog-badge">Desarrollo Web</span>
              <span className="blog-badge">Frontend</span>
              <span className="blog-badge">Tecnología</span>
            </div>
          </div>
        </div>

        {/* Card 1 */}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
            <Link href="/blog/servicios-cloud">
              <Image
                src={BlogComputing}
                className="object-cover w-full rounded h-52"
                alt="Una guía completa para entender el Cloud Computing y sus beneficios"
              />
            </Link>
            <div className="py-6 px-2 space-y-2">
              <h3 className="mb-2 text-xl font-semibold">
                Una guía completa para entender el Cloud Computing y sus
                beneficios
              </h3>
              <span className="text-xs">January 21, 2021</span>
              <p>
                ¿Las organizaciones adoptan soluciones cloud para mejorar y
                reducir costos? En este artículo, exploramos las principales
                ventajas del cloud computing para empresas en 2024.
              </p>
              <div className="pt-3 flex gap-2">
                <span className="blog-badge">Cloud</span>
                <span className="blog-badge">TI</span>
                <span className="blog-badge">Tecnología</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
            <Link href="/blog/ciberseguridad">
              <Image
                src={BlogCibersecurity}
                className="object-cover w-full rounded h-52"
                alt="La importancia de la Ciberseguridad en 2024"
              />
            </Link>
            <div className="py-6 px-2 space-y-2">
              <h3 className="mb-2 text-xl font-semibold">
                La importancia de la Ciberseguridad en 2024: Protección en el
                mundo digital
              </h3>
              <span className="text-xs">January 21, 2021</span>
              <p>
                Este artículo explora la importancia de la ciberseguridad en
                2024, las amenazas más comunes y cómo protegerse eficazmente
                contra ellas.
              </p>
              <div className="pt-3 flex gap-2">
                <span className="blog-badge">Ciberseguridad</span>
                <span className="blog-badge">Seguridad</span>
                <span className="blog-badge">Tecnología</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
            <Link href="/blog/ti">
              <Image
                src={BlogCapacitaciones}
                className="object-cover w-full rounded h-52"
                alt="Capacitaciones de TI: Clave para el crecimiento profesional en la era digital"
              />
            </Link>
            <div className="py-6 px-2 space-y-2">
              <h3 className="mb-2 text-xl font-semibold">
                Capacitaciones de TI: Clave para el crecimiento profesional en
                la era digital
              </h3>
              <span className="text-xs">January 21, 2021</span>
              <p>
                ¿Estas capacitaciones son esenciales en el campo tech? Este
                artículo explora su importancia, sus beneficios y cómo elegir el
                programa adecuado para tu carrera.
              </p>
              <div className="pt-3 flex gap-2">
                <span className="blog-badge">Capacitaciones</span>
                <span className="blog-badge">TI</span>
                <span className="blog-badge">Tecnología</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline"
          >
            Load more posts...
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default BlogSection;
