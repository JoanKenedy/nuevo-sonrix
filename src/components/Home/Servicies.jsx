import Servicio1 from "../../assets/odongral.jpg";
import Servicio2 from "../../assets/estetica-dental.jpg";
import Servicio3 from "../../assets/ortodoncia.jpg";
import Servicio4 from "../../assets/endodoncia.jpg";
import Servicio5 from "../../assets/protesis.jpg";
import Servicio6 from "../../assets/cirugia.jpg";
import Servicio7 from "../../assets/implantes.jpg";
import Servicio8 from "../../assets/periodoncia.jpg";

export const Servicies = () => {
  const Servicios = [
    {
      id: 1,
      title: "Odontología General",
      imgSrc: Servicio1,
    },
    {
      id: 2,
      title: "Éstetica dental",
      imgSrc: Servicio2,
    },
    {
      id: 3,
      title: "Ortodonica",
      imgSrc: Servicio3,
    },
    {
      id: 4,
      title: "Endodoncia",
      imgSrc: Servicio4,
    },
    {
      id: 5,
      title: "Prótesis",
      imgSrc: Servicio5,
    },
    {
      id: 6,
      title: "Cirugía oral",
      imgSrc: Servicio6,
    },
    {
      id: 7,
      title: "Implantología dental",
      imgSrc: Servicio7,
    },
    {
      id: 8,
      title: "Periodoncia",
      imgSrc: Servicio8,
    },
  ];
  return (
    <>
      <section className="servicios w-full py-8 px-5 md:py-12 ">
        <h2 className="text-2xl font-bold text-center uppercase md:text-3xl">
          Nuestros Servicios
        </h2>
        <div className="container-servicios grid grid-rows-8 gap-4 md:grid-cols-3 my-5  md:max-w-7xl md:m-auto md:gap-5 md:grid-rows-3 md:my-8">
          {Servicios.map((servicio, i) => (
            <div className="item-servicios" key={i}>
              <img
                src={servicio.imgSrc}
                alt=""
                className="max-w-full rounded-lg"
              />
              <h3 className="text-center font-medium mt-2">{servicio.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
