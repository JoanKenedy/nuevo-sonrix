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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.8054934253373!2d-99.17739569999999!3d19.377572999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffdd098e6a5f%3A0x1e208a4eb3a6e897!2sDental%20Sonrix!5e0!3m2!1ses-419!2smx!4v1729292458111!5m2!1ses-419!2smx" 
                  style={{border:0, width:600, height:450}} 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
