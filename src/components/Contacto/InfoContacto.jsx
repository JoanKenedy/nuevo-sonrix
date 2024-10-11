import Foto from "../../assets/foto-cont.webp";
import { IoLogoWhatsapp } from "react-icons/io";

export const InfoContacto = () => {
  return (
    <>
      <section className="py-8 md:py-12">
        <div className="container-info w-[85%] m-auto grid gap-4 md:grid-cols-2 md:max-w-6xl">
          <div className="item-info">
            <img src={Foto} alt="" className="w-full md:w-[470px] " />
          </div>
          <div className="item-info flex flex-col justify-center items-center gap-1">
            <h3 className="text-xl text-sky-400 font-semibold md:text-2xl">
              Envíanos un mensaje
            </h3>
            <h6 className="text-gray-600  text-base font-medium md:text-lg">
              Recuerda que el equipo esta siempre atento a whatsapp en nuestro
              horario corporativo
            </h6>
            <p className="text-gray-600 text-sm text-justify md:text-base">
              En Whastapp podras enviar tus fotografias, dudas o solicitudes,
              escribenos directamente! Te invitamos a que vivas la experiencia
              con “Dental Sonrix”.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=525652700762"
              target="_blank"
              className="bg-green-600 border rounded-2xl flex items-center justify-center gap-1 px-3 py-3 my-2 md:hover:scale-95 duration-300"
            >
              <IoLogoWhatsapp className="text-white w-7 h-7" />
              <p className="text-sm text-white md:text-base">
                ¿Necesitas ayuda? Escribenos
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
