export const SuperDescripcion = ({ texto, title }) => {
  return (
    <>
      <div className="descripcion w-full  ">
        <div className="container-descripcion  flex flex-col justify-center items-center  m-auto  md:max-w-5xl md:m-auto">
          <div className="item-descripction p-5">
            <h2 className="title-slider  text-2xl  uppercase mb-2  md:text-3xl frase px-5">
              {title}
            </h2>
            <p className="text-justify ">{texto}</p>
          </div>
        </div>
      </div>
    </>
  );
};
