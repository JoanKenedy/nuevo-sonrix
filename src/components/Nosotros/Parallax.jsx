import Back from "../../assets/fondo-clinica.jpg";
export const Parrallax = () => {
  return (
    <>
      <div
        className="parallax bg-black h-[400px] flex flex-col justify-center items-center bg-fixed bg-cover md:h-[700px]"
        style={{ backgroundImage: `url(${Back})` }}
      >
        <div className="container-parallax bg-white p-5 w-[90%] m-auto md:max-w-4xl md:px-8 md:py-10">
          <h2 className="text-center title-slider text-black text-xl  uppercase  md:text-3xl frase mb-2">
            Nosotros
          </h2>
          <p className="text-justify text-sm md:text-lg">
            <span className="text-center title-slider text-black text-xl  uppercase  md:text-3xl frase">
              EN Dental sonrix
            </span>{" "}
            estamos avalados y certificados en nuestra especialidad. Estamos
            para brindarte una atención personalizada y un servicio integral,
            para lograr que tu sonrisa se vea como la imaginas.Nos mantenemos
            constantemente actualizados para ofrecerte lo último en tecnología y
            los tratamientos más innovadores.
          </p>
        </div>
      </div>
    </>
  );
};
