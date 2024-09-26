import Dentista from "../../assets/dentista.png";
import Silla from "../../assets/silla.png";
import Diente from "../../assets/diente-feliz.png";
import { Link } from "react-router-dom";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from "react";

export const AgendarCita = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className="agenda w-full  relative md:mt-32 md:h-64 ">
        <div className="container-agenda flex flex-col gap-5  p-8  rounded-md md:grid md:grid-cols-3 md:max-w-6xl md:m-auto relative  ">
          <div
            className="item-agenda bg-white flex justify-center flex-col gap-2 items-center px-8 py-4 rounded-md md:absolute md:w-[350px] md:h-[250px]  md:-top-20 md:left-0 md:hover:scale-110 md:duration-500  "
            onClick={() => setIsOpenModal(!isOpenModal)}
          >
            <img src={Dentista} alt="" className="w-20" />
            <h3 className="text-base font-semibold">Agenda tu cita</h3>
            <p className="text-sm text-center">
              El primer paso para una sonrisa espectacular es agendar tu
              comsulta.
            </p>
          </div>
          <Link to="/servicios">
            <div className="item-agenda bg-white flex justify-center flex-col gap-2 items-center px-8 py-4  rounded-md md:absolute md:w-[350px] md:h-[280px] md:-top-28 md:left-[33.33%] md:hover:scale-110 md:duration-500  ">
              <img src={Silla} alt="" className="w-20" />
              <h3 className="text-base font-semibold">Nuestros tratamientos</h3>
              <p className="text-sm text-center">
                Explora tratamientos personalizados con nuestros especialistas
              </p>
            </div>
          </Link>
          <Link to="/estetica-dental">
            <div className="item-agenda bg-white flex justify-center flex-col gap-2 items-center px-8 py-4  rounded-md md:absolute md:w-[350px] md:h-[250px]  md:-top-20 md:left-[66.66%] md:hover:scale-110 md:duration-500">
              <img src={Diente} alt="" className="w-20" />
              <h3 className="text-base font-semibold">Transforma tu sonrisa</h3>
              <p className="text-sm text-center">
                Elige mejorar tu salud bucal y deja que tu sonrisa brilla
              </p>
            </div>
          </Link>
        </div>
        <div
          className={`${
            isOpenModal ? "scale-100" : "scale-0"
          } modal-contacto fixed w-full h-full flex justify-center items-center z-30 left-0 top-0 duration-700`}
        >
          <RiCloseLargeLine
            className="absolute z-30 text-white top-4 right-4 font-semibold text-2xl md:top-4 "
            onClick={() => setIsOpenModal(!isOpenModal)}
          />
          <div className="container-modal w-[85%]  m-auto relative md:w-[35%]">
            <form
              action=""
              className="bg-white h-full px-5 py-3 flex flex-col gap-2 rounded-lg md:px-10 md:py-12 md:flex-row md:flex-wrap"
            >
              <div className="flex justify-center items-center w-full">
                <h3 className="text-3xl font-bold uppercase md:text-4xl">
                  Contacto
                </h3>
              </div>

              <div className="flex flex-col gap-1 md:w-[97%]">
                <label htmlFor="" className="text-sm">
                  Nombre
                </label>
                <input
                  type="text"
                  name=""
                  className="border-gray-300 rounded-lg "
                />
              </div>
              <div className="flex flex-col gap-1 md:w-[48%]">
                <label htmlFor="" className="text-sm">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name=""
                  className=" border-gray-300 rounded-lg "
                />
              </div>
              <div className="flex flex-col gap-1 md:w-[48%]">
                <label htmlFor="" className="text-sm">
                  Tipo de paciente
                </label>
                <select name="" id="" className="border-gray-300 rounded-lg  ">
                  <option value="adulto">Adulto</option>
                  <option value="infantil">Infantil</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 md:w-[48%]">
                <label htmlFor="" className="text-sm">
                  Tipo de cita
                </label>
                <select name="" id="" className="border-gray-300 rounded-lg ">
                  <option value="valoracion">Valoración</option>
                  <option value="urgencia">Urgencia</option>
                  <option value="limpieza">Limpieza dental</option>
                  <option value="diseno">Diseño de sonrisa</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 md:w-[48%]">
                <label htmlFor="" className="text-sm">
                  Preferencia de horario
                </label>
                <select name="" id="" className="border-gray-300 rounded-lg  ">
                  <option value="dia">8am a 12pm</option>
                  <option value="tarde">12pm a 4pm</option>
                  <option value="noche">4pm a 7pm</option>
                </select>
              </div>
              <div className=" w-full md:w-[98%] flex flex-col ">
                <label htmlFor="" className="text-sm w-full">
                  Mensaje
                </label>
                <textarea
                  name=""
                  id=""
                  className="border-gray-300 rounded-lg "
                ></textarea>
              </div>

              <div className="flex flex-col  w-[48%] m-auto ">
                <input
                  type="submit"
                  name=""
                  value="Enviar"
                  className="bg-black text-white py-2 rounded-lg mt-2 md:text-base"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
