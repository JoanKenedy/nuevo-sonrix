import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Slider1 from "../../assets/slider-1.jpg";
import Slider2 from "../../assets/slider-2.jpg";
import Slider3 from "../../assets/slider-3.png";
import Slider4 from "../../assets/slider-cel-1.png";
import Slider5 from "../../assets/slider-cel-2.png";
import Slider6 from "../../assets/slider-cel-3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/modules";
import { useEffect, useState } from "react";
export const Hero = () => {
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
  const SliderHero = [
    {
      id: 1,
      Img: Slider1,
      imgCel: Slider4,
      textimg: "Sonríe con seguridad",
    },
    {
      id: 2,
      Img: Slider2,
      imgCel: Slider5,
      textimg: "Brilla con nosotros",
    },
    {
      id: 3,
      Img: Slider3,
      imgCel: Slider6,
      textimg: "La paz comienza con una sonrisa",
    },
  ];
  return (
    <>
      <div className="hero top-0">
        <div className="container-slider-hero w-screen ">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              678: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, EffectFade]}
            effect="fade"
            navigation={true}
            className="h-full w-full  "
          >
            {SliderHero.map((el, i) => (
              <SwiperSlide key={i} className="relative ">
                {width < mobile ? (
                  <img src={el.imgCel} alt="" className=" " />
                ) : (
                  <img
                    src={el.Img}
                    alt=""
                    className="md:h-[850px] w-full object-cover "
                  />
                )}

                <div className="phrase absolute left-0 top-0 w-full h-full flex justify-center items-end ">
                  <div className="container-phrase mb-24 ">
                    <h2 className="text-white text-2xl  uppercase  md:text-5xl frase px-5">
                      {el.textimg}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
