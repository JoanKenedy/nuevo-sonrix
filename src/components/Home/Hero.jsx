import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Slider1 from "../../assets/slider-1.jpg";
import Slider2 from "../../assets/slider-2.jpg";
import Slider3 from "../../assets/slider-3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper/modules";
export const Hero = () => {
  const SliderHero = [
    {
      id: 1,
      Img: Slider1,
      textimg: "Somos tu mejor opción",
    },
    {
      id: 2,
      Img: Slider2,
      textimg: "Somos tu mejor opción",
    },
    {
      id: 3,
      Img: Slider3,
      textimg: "Somos tu mejor opción",
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
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[
              Navigation,
              Pagination,
              Mousewheel,
              Keyboard,
              EffectFade,
              Autoplay,
            ]}
            effect="fade"
            navigation={true}
            className="h-[400px] md:h-[700px] "
          >
            {SliderHero.map((el, i) => (
              <SwiperSlide key={i}>
                <img
                  src={el.Img}
                  alt=""
                  className="md:h-[700px] w-full object-cover "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
