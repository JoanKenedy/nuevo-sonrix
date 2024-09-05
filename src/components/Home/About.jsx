import Nosotros from "../../assets/about.png";
export const About = () => {
  return (
    <>
      <div className="about">
        <div className="container-about py-8 px-5 flex flex-col gap-5 md:flex-row-reverse md:m-auto md:md:max-w-7xl md:py-16">
          <div className="item-about md:px-20 md:flex md:flex-col md:justify-center md:items-center md:gap-2  ">
            <h2 className="text-3xl md:text-4xl uppercase">Dental Sonrix</h2>
            <h4 className="font-semibold md:text-xl">
              Experiencia, confort y talento humano
            </h4>
            <p className="text-justify text-sm md:text-base mb-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              quibusdam sunt rem repudiandae iste itaque aspernatur
              exercitationem doloremque fugiat reiciendis ipsam, laudantium
              perferendis earum nulla consectetur at quasi neque dicta aperiam!
              Expedita, eligendi vel! Eligendi cum beatae repellendus?
            </p>
            <a
              href=""
              className="bg-black text-white text-center inline-block rounded-md w-36 py-1 text-base md:py-2 md:w-40"
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
