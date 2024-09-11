import Ortodoncia1 from "../../assets/protesis/protesis-1.webp";
import Ortodoncia2 from "../../assets/protesis/protesis-1.2.webp";
import Ortodoncia3 from "../../assets/protesis/protesis-1.3.webp";
import Ortodoncia4 from "../../assets/protesis/protesis-1.4.webp";
import Ortodoncia5 from "../../assets/protesis/protesis-1.5.webp";
import Ortodoncia6 from "../../assets/protesis/protesis-1.6.webp";

export const Testimonios = () => {
  const CASO1 = [
    {
      id: 1,
      image: Ortodoncia1,
      alt: "Primer caso de éxito",
    },
    {
      id: 2,
      image: Ortodoncia2,
      alt: "Primer caso de éxito",
    },
    {
      id: 3,
      image: Ortodoncia3,
      alt: "Primer caso de éxito",
    },
    {
      id: 4,
      image: Ortodoncia4,
      alt: "Primer caso de éxito",
    },
    {
      id: 5,
      image: Ortodoncia5,
      alt: "Primer caso de éxito",
    },
    {
      id: 6,
      image: Ortodoncia6,
      alt: "Primer caso de éxito",
    },
  ];
  return (
    <>
      <div className="testimonio">
        <div className="container-testimonios px-5 md:max-w-6xl py-5 md:m-auto">
          <div className="item-testimonios">
            <h3 className="title-slider text-center text-2xl  uppercase  md:text-3xl  px-5">
              Caso 1
            </h3>
            <div className="casos grid gap-2 md:grid-cols-3 ">
              {CASO1.map((caso, index) => (
                <div className="item-casos" key={index}>
                  <img
                    src={caso.image}
                    alt={caso.alt}
                    className="max-w-full hover:scale-90 duration-300"
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
