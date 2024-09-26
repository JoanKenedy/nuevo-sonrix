import ImgCall from "../assets/img-call.webp";
import { MdOutlineAutoAwesome } from "react-icons/md";

export const CallToAction = () => {
  return (
    <>
      <section className="call-to-action  z-10 m-auto flex justify-center items-center  -mb-32 w-full px-5 py-0 mt-10 md:max-w-7xl rounded-md md:pb-24 md:mt-20 md:-mb-0 relative ">
        <div className="container-call-to-action justify-between max-w-6xl  rounded-md md:flex md:absolute md:z-10 bg-blue-500 md:left-0 md:-top-0 md:w-full md:h-80 md:max-w-7xl  ">
          <div className="item-call-action mb-5 relative md:w-6/12 md:-mt-20 ">
            <img src={ImgCall} alt="" className="imgCall  " />
          </div>
          <div className="item-call-action md:w-6/12 flex flex-col justify-center p-7">
            <MdOutlineAutoAwesome className="text-white text-2xl md:text-4xl" />
            <h2 className="text-white text-2xl md:text-3xl">
              Comienza tu tratamiento con Dental Sonrix
            </h2>
            <p className="text-white text-sm md:text-base my-2">
              Hacemos que tu sonrisa sea hermosa y brille por si sola.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=525652700762"
              target="_blank"
              className="bg-white text-black text-center inline-block rounded-xl transition hover:scale-90 w-36 py-2 text-base md:py-2 md:w-40"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
