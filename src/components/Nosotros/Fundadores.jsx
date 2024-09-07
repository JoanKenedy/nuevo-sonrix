import Marisol from "../../assets/dra-marisol.jpg";
import Diego from "../../assets/dr-diego.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const Fundadores = () => {
  const [openDrop, setOpenDrop] = useState(false);
  return (
    <>
      <div className="fundadores mb-5">
        <div className="p-5  md:max-w-7xl md:m-auto md:flex md:flex-col md:gap-2 md:py-8">
          <h3 className="title-slider font-bold text-xl text-center md:text-4xl uppercase   ">
            Dental Sonrix
          </h3>
          <h4 className="font-semibold text-center text-base md:text-xl">
            Experiencia, confort y talento humano.
          </h4>
          <p className="text-justify text-sm md:text-base mb-2 md:px-12 ">
            Somos una clínica dental vanguardista y actualizada en los últimos
            conceptos de la odontología, permitiéndonos ofrecer tratamientos
            innovadores y estéticos, devolviendo la salud y función de las
            estructuras orales. Trabajando de la mano con un equipo de
            especialistas, ofreciendo la más alta calidad en cada uno de
            nuestros servicios. Con un enfoque en odontología estética.
          </p>
        </div>

        <div className="container-fundadores flex flex-col gap-2 md:grid md:grid-cols-2 md:max-w-6xl md:m-auto ">
          <div className="item-fundadores mb-2 md:flex md:justify-center md:items-center md:flex-col">
            <img
              src={Marisol}
              alt=""
              className="w-[438px] md:h-[438px] object-cover"
            />
            <div
              className="btn-curriculum flex justify-between items-center p-2"
              onClick={() => setOpenDrop(!openDrop)}
            >
              <h2 className="title-slider text-black text-xl  uppercase  md:text-3xl frase ">
                Dra. Marisol Atayde
              </h2>
              <IoIosArrowDown className="text-base md:hidden" />
            </div>
            <div
              className={`${
                openDrop
                  ? "h-[120px] overflow-visible opacity-100 "
                  : "h-0 overflow-hidden opacity-0"
              } info-curriculum duration-500 md:h-auto md:overflow-visible md:opacity-100 md:px-8`}
            >
              <p className="text-sm text-justify p-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                repellat dicta asperiores repellendus ipsum veniam rem totam
                culpa. Temporibus, molestiae praesentium adipisci corporis optio
                libero animi dicta ea incidunt soluta!
              </p>
            </div>
          </div>
          <div className="item-fundadores md:flex md:justify-center md:items-center md:flex-col">
            <img
              src={Diego}
              alt=""
              className="w-[438px] md:h-[438px] object-cover"
            />
            <div
              className="btn-curriculum flex justify-between items-center p-2 "
              onClick={() => setOpenDrop(!openDrop)}
            >
              <h2 className="title-slider text-black text-xl  uppercase  md:text-3xl frase">
                Dr. Diego Camacho
              </h2>
              <IoIosArrowDown className="text-base md:hidden" />
            </div>
            <div
              className={`${
                openDrop
                  ? "h-[120px] overflow-visible opacity-100  "
                  : "h-0 overflow-hidden opacity-0"
              } info-curriculum  duration-500 md:h-auto md:overflow-visible md:opacity-100 md:px-8`}
            >
              <p className="text-sm text-justify p-2  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                repellat dicta asperiores repellendus ipsum veniam rem totam
                culpa. Temporibus, molestiae praesentium adipisci corporis optio
                libero animi dicta ea incidunt soluta!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
