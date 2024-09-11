import Testimonio1 from "../../assets/testimonio-1.png";
import Testimonio2 from "../../assets/testimonio-2.png";
import Testimonio3 from "../../assets/testimonio-3.png";
import Testimonio4 from "../../assets/testimonio-4.png";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";
export const Testimonials = () => {
  const TESTIMONIOS = [
    {
      id: 1,
      nameTestimonio: "Lizbeth Jacob",
      testimonio:
        "Es un trato profesional y muy cordial. Muy buen trabajo y estoy totalmente satisfecha. Lo recomiendo ampliamente. Respetan citas, presupuestos y muy buena atención.",
      imgPerfil: Testimonio1,
    },
    {
      id: 2,
      nameTestimonio: "Loren Guerrero",
      testimonio:
        "Muy recomendables. Desde que llegas te ponen en el espejito una bienvenida personalizada, muy lindo detalle. Te suuuper explican a detalle tu diagnóstico y la atención muy minuciosa. El costo muy accesible. Sali con sonrisa nueva. Muy buenos profesionales.",
      imgPerfil: Testimonio2,
    },
    {
      id: 3,
      nameTestimonio: "Daniela Nava",
      testimonio:
        "Todo excelente    los doctores capacitados y pendientes de ti en todo momento, limpio y precios accesibles. Super contenta con mi diseño de sonrisa 😀",
      imgPerfil: Testimonio3,
    },
    {
      id: 4,
      nameTestimonio: "Luis Gonzales Aguilar",
      testimonio:
        "Las consultas son rápidas y amenas.Los doctores Diego y Marisol son excelentes profesionales siempre muy amables y atentos.",
      imgPerfil: Testimonio4,
    },
  ];
  return (
    <>
      <div className="testimonials w-full px-4 py-6">
        <h2 className="title-slider text-xl font-bold text-center uppercase md:text-3xl md:px-5">
          Escucha lo que nuestros pacientes satisfechos tienen que decir.
        </h2>
        <div className="container-testimonials max-w-6xl p-4 grid gap-4 md:m-auto">
          {TESTIMONIOS.map((testimonio, i) => (
            <div
              className="item-testimonials my-5 flex flex-col gap-2 cursor-pointer  md:px-10 md:gap-3 relative p-3 rounded-md shadow-lg shadow-gray-300"
              key={i}
            >
              <FaQuoteLeft className="absolute right-7 top-0  text-3xl md:text-5xl text-slate-300 " />
              <div className="calificaciones flex">
                <GiRoundStar className="text-yellow-500 text-xl md:text-2xl" />
                <GiRoundStar className="text-yellow-500 text-xl md:text-2xl" />
                <GiRoundStar className="text-yellow-500 text-xl md:text-2xl" />
                <GiRoundStar className="text-yellow-500 text-xl md:text-2xl" />
                <GiRoundStar className="text-yellow-500 text-xl md:text-2xl" />
              </div>
              <p className="text-justify">{testimonio.testimonio}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonio.imgPerfil}
                  alt=""
                  className="w-14 h-14 object-cover"
                />
                <h3 className="font-medium">{testimonio.nameTestimonio}</h3>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="https://lc.cx/pz9n0F"
          target="_blank"
          className="block m-auto w-[50%] bg-black text-white text-base p-3 text-center rounded-xl md:w-[20%]"
        >
          Ver todas las opiniones
        </Link>
      </div>
    </>
  );
};
