import Dentista from "../../assets/dentista.png";
import Silla from "../../assets/silla.png";
import Diente from "../../assets/diente-feliz.png";

export const AgendarCita = () => {
  return (
    <>
      <div className="agenda   w-screen relative md:mt-32 md:h-64 ">
        <div className="container-agenda flex flex-col gap-5  p-8  rounded-md md:grid md:grid-cols-3 md:max-w-6xl md:m-auto relative  ">
          <div className="item-agenda bg-white flex justify-center flex-col gap-2 items-center px-8 py-4 rounded-md md:absolute md:w-[350px] md:h-[250px]  md:-top-20 md:left-0 md:hover:scale-110 md:duration-500  ">
            <img src={Dentista} alt="" className="w-20" />
            <h3 className="text-base font-semibold">Agenda tu cita</h3>
            <p className="text-sm text-center">
              El primer paso para una sonrisa espectacular es agendar tu
              comsulta.
            </p>
          </div>
          <div className="item-agenda bg-white flex justify-center flex-col gap-2 items-center px-8 py-4  rounded-md md:absolute md:w-[350px] md:h-[280px] md:-top-28 md:left-[33.33%] md:hover:scale-110 md:duration-500  ">
            <img src={Silla} alt="" className="w-20" />
            <h3 className="text-base font-semibold">Nuestros tratamientos</h3>
            <p className="text-sm text-center">
              Explora tratamientos personalizados con nuestros especialistas
            </p>
          </div>
          <div className="item-agenda bg-white flex justify-center flex-col gap-2 items-center px-8 py-4  rounded-md md:absolute md:w-[350px] md:h-[250px]  md:-top-20 md:left-[66.66%] md:hover:scale-110 md:duration-500">
            <img src={Diente} alt="" className="w-20" />
            <h3 className="text-base font-semibold">Transforma tu sonrisa</h3>
            <p className="text-sm text-center">
              Elige mejorar tu salud bucal y deja que tu sonrisa brilla
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
