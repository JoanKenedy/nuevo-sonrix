import { useForm } from "react-hook-form";

export const Contacto = () => {
  return (
    <>
      <div className="contacto bg-black">
        <div className="container-contacto flex flex-col gap-10 px-7 pt-40 pb-10 md:grid md:grid-cols-2 md:max-w-7xl md:mx-auto  md:gap-10 md:pt-60 md:mt-10 md:pb-10 md:px-5 ">
          <div className="item-contacto">
            <form
              action=""
              className="bg-white px-5 py-3 flex flex-col gap-2 rounded-lg md:px-10 md:py-12 md:flex-row md:flex-wrap"
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
          <div className="item-contacto ">
            <h3 className="text-white text-center my-2 text-3xl font-bold uppercase md:text-4xl">
              Ubicación
            </h3>
            <div className="relative h-[360px] md:h-auto">
              <div className="absolute top-0 left-0 w-full h-full ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.80537692248!2d-99.17997062405885!3d19.377578042434294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff9b678aabc3%3A0xe0f997387f0db84f!2sAv.%20Insurgentes%20Sur%201188%2C%20Tlacoquemecatl%20del%20Valle%2C%20Benito%20Ju%C3%A1rez%2C%2003200%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1727129004379!5m2!1ses-419!2smx"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="max-h-[350px] max-w-full md:max-h-[450px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
