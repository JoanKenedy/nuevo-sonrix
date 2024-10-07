import Ortodoncia1 from "../../assets/general/caso-1.webp";
import Ortodoncia2 from "../../assets/general/caso-1.webp";
import Ortodoncia3 from "../../assets/general/caso-2.webp";
import Ortodoncia4 from "../../assets/general/caso-4.webp";
import Ortodoncia5 from "../../assets/general/caso-5.webp";
import Ortodoncia6 from "../../assets/general/caso-6.webp";
import Ortodoncia7 from "../../assets/general/caso-7.webp";

export const Testimonios = () => {
  const CASO1 = [
    {
      id: 1,
      image: Ortodoncia1,
      alt: "Caso 1 ",
    },
    {
      id: 2,
      image: Ortodoncia2,
      alt: "Caso 1  ",
    },
    {
      id: 3,
      image: Ortodoncia3,
      alt: "Caso 2",
    },
    {
      id: 4,
      image: Ortodoncia4,
      alt: "Caso 3",
    },
    {
      id: 5,
      image: Ortodoncia5,
      alt: "Caso 3",
    },
    {
      id: 6,
      image: Ortodoncia6,
      alt: "Caso 3",
    },
    {
      id: 7,
      image: Ortodoncia7,
      alt: "Caso 3",
    },
  ];
  return (
    <>
      <div className="testimonio">
        <div className="container-testimonios px-5 md:max-w-6xl py-5 md:m-auto">
          <div className="item-testimonios">
            <h3 className="title-slider text-center text-2xl  uppercase  md:text-3xl  px-5">
              Casos de éxito
            </h3>
            <div className="casos grid gap-2 mt-4 md:grid-cols-4 ">
              {CASO1.map((caso, index) => (
                <div className="item-casos" key={index}>
                  <img
                    src={caso.image}
                    className="max-w-full hover:scale-90 duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
