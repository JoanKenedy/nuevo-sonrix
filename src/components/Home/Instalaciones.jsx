import Instalacion1 from "../../assets/instalacion-3.webp";
import Instalacion2 from "../../assets/instalacion-4.webp";
import Instalacion3 from "../../assets/instalacion-1.webp";
import Instalacion4 from "../../assets/instalacion-2.webp";
import Instalacion5 from "../../assets/instalacion-5.webp";

export const Instalaciones = () => {
  const Instalaciones = [
    {
      id: 1,
      src: Instalacion1,
      alt: "Instalación numero 1",
    },
    {
      id: 2,
      src: Instalacion2,
      alt: "Instalación numero 2",
    },
    {
      id: 3,
      src: Instalacion2,
      alt: "Instalación numero 3",
    },
    {
      id: 4,
      src: Instalacion4,
      alt: "Instalación numero 4",
    },
    {
      id: 5,
      src: Instalacion5,
      alt: "Instalación numero 5",
    },
    {
      id: 6,
      src: Instalacion3,
      alt: "Instalación numero 2",
    },
    {
      id: 7,
      src: Instalacion4,
      alt: "Instalación numero 3",
    },
    {
      id: 8,
      src: Instalacion5,
      alt: "Instalación numero 4",
    },
    {
      id: 9,
      src: Instalacion5,
      alt: "Instalación numero 5",
    },
  ];
  return (
    <>
      <div className="instalaciones">
        <h2 className="text-2xl font-bold text-center uppercase md:text-3xl">
          Instalaciones
        </h2>
        <div className="container-instalaciones grid grid-cols-1 gap-3 py-3 md:grid-cols-3 md:max-w-7xl md:m-auto md:py-6">
          {Instalaciones.map((instalacion, i) => (
            <div className="item-instalaciones overflow-hidden" key={i}>
              <img
                src={instalacion.src}
                alt={instalacion.alt}
                className="img-instalacion max-w-full md:hover:scale-125 "
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
