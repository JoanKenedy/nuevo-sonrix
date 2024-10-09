import { Formulario } from "./Formulario";
export const Contacto = () => {
  return (
    <>
      <div className="contacto bg-black">
        <div className="container-contacto flex flex-col gap-10 px-7 pt-40 pb-10 md:grid md:grid-cols-2 md:max-w-7xl md:mx-auto  md:gap-10 md:pt-60 md:mt-10 md:pb-10 md:px-5 ">
          <div className="item-contacto">
            <Formulario />
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
