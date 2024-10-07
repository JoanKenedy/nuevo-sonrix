import { useEffect, useState } from "react";
export const SuperHero = ({ bgCompu, bgCel, textCategoria }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const mobile = 768;

  const fotosChanges = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", fotosChanges);

    return () => {
      window.removeEventListener("resize", fotosChanges);
    };
  });
  return (
    <>
      <div className="hero w-screen h-full">
        <div className="container-slider-hero w-screen h-full">
          <div
            className="swiper-container relative bg-cover"
            style={
              width < mobile
                ? { backgroundImage: `url(${bgCel})` }
                : { backgroundImage: `url(${bgCompu})` }
            }
          >
            <div className="phrase absolute left-0 top-0 w-full h-full flex justify-center items-center ">
              <div className="container-phrase  ">
                <h2 className="title-slider text-center  text-white text-3xl  uppercase  md:text-6xl frase px-5">
                  {textCategoria}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
