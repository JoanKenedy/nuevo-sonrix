import Nosotros from "../../assets/about.png";
export const About = () => {
  return (
    <>
      <div className="about">
        <div className="container-about py-10 px-5 flex flex-col-reverse gap-5 md:flex-row-reverse md:m-auto md:max-w-7xl md:py-16">
          <div className="item-about md:px-20 md:flex md:flex-col md:justify-center md:items-center md:gap-2  flex flex-col  ">
            <h3 className=" title-about md:text-4xl uppercase   ">
              Dental Sonrix
            </h3>
            <h4 className="font-semibold text-xl md:text-xl">
              Experiencia, confort y talento humano.
            </h4>
            <p className="text-justify text-sm md:text-base mb-2 ">
              Somos una clínica dental vanguardista y actualizada en los últimos
              conceptos de la odontología, permitiéndonos ofrecer tratamientos
              innovadores y estéticos, devolviendo la salud y función de las
              estructuras orales. Trabajando de la mano con un equipo de
              especialistas, ofreciendo la más alta calidad en cada uno de
              nuestros servicios. Con un enfoque en odontología estética.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=525652700762"
              target="_blank"
              className="bg-black text-white text-center inline-block rounded-md w-36 py-2 text-base md:py-2 md:w-40"
            >
              Contacto
            </a>
          </div>
          <div className="item-about md:ml-14">
            <img
              src={Nosotros}
              alt=""
              className="md:max-w-[500px] md:max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
