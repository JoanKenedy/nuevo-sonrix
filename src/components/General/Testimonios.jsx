import Ortodoncia1 from "../../assets/blanqueamiento/caso-1.png";
import Ortodoncia2 from "../../assets/desmanchamiento/caso-1.png";
import Ortodoncia3 from "../../assets/desmanchamiento/caso-2.png";
import Ortodoncia4 from "../../assets/desmanchamiento/caso-3.png";

export const Testimonios = () => {
  const CASO1 = [
    {
      id: 1,
      image: Ortodoncia1,
      alt: "Caso 1 ",
      title: "Blanqueamiento",
    },
    {
      id: 2,
      image: Ortodoncia2,
      alt: "Caso 1  ",
      title: "Desmanchamiento",
    },
    {
      id: 3,
      image: Ortodoncia3,
      alt: "Caso 2",
      title: "Desmanchamiento",
    },
    {
      id: 4,
      image: Ortodoncia4,
      alt: "Caso 3",
      title: "Desmanchamiento",
    },
  ];
  return (
    <>
      <div className="testimonio">
        <div className="container-testimonios px-5 md:max-w-6xl py-5 md:m-auto">
          <div className="item-testimonios">
            <h3 className="title-slider text-center text-2xl  uppercase  md:text-3xl  px-5">
              Nuestro Trabajo
            </h3>
            <div className="casos grid gap-2 mt-4 md:grid-cols-4 ">
              {CASO1.map((caso, index) => (
                <div className="item-casos" key={index}>
                  <h3 className="text-center uppercase font-semibold">
                    {caso.title}
                  </h3>
                  <span className="">{caso.alt}</span>
                  <img
                    src={caso.image}
                    alt={caso.alt}
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
