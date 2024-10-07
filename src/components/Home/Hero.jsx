import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Slider1 from "../../assets/slider-2.webp";
import Slider2 from "../../assets/slider-1.webp";
import Slider3 from "../../assets/slider-3.webp";
import Slider4 from "../../assets/slider-cel-2.png";
import Slider5 from "../../assets/slider-cel-1.png";
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
      <div className="hero ">
        <div className="container-slider-hero ">
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
            className="w-screen h-full"
          >
            {SliderHero.map((el, i) => (
              <SwiperSlide
                key={i}
                className=" swiper-container relative bg-cover  "
                style={
                  width < mobile
                    ? { backgroundImage: `url(${el.imgCel})` }
                    : { backgroundImage: `url(${el.Img})` }
                }
              >
                <div className="phrase absolute left-0 top-0 w-full h-full flex justify-center items-end md:items-center">
                  <div className="container-phrase ">
                    <h2 className="title-slider text-white text-2xl text-center mb-60 uppercase  md:text-5xl frase md:mb-0 ">
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
