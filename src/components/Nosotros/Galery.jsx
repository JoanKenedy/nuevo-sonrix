import Foto1 from "../../assets/galery-1.webp";
import Foto2 from "../../assets/galery-2.webp";
import Foto3 from "../../assets/galery-3.webp";
import Foto4 from "../../assets/galery-4.webp";
import Foto5 from "../../assets/galery-5.webp";
import Foto6 from "../../assets/galery-6.webp";
import Foto7 from "../../assets/galery-7.webp";
import Foto8 from "../../assets/galery-8.webp";
import Foto9 from "../../assets/galery-9.webp";
import Foto10 from "../../assets/galery-10.webp";
import Foto11 from "../../assets/galery-11.webp";
import Foto12 from "../../assets/galery-12.webp";
export const Galery = () => {
  const GALERY = [
    {
      id: 1,
      ImgSrc: Foto1,
    },
    {
      id: 2,
      ImgSrc: Foto2,
    },
    {
      id: 3,
      ImgSrc: Foto3,
    },
    {
      id: 4,
      ImgSrc: Foto4,
    },
    {
      id: 5,
      ImgSrc: Foto5,
    },
    {
      id: 6,
      ImgSrc: Foto6,
    },
    {
      id: 7,
      ImgSrc: Foto7,
    },
    {
      id: 8,
      ImgSrc: Foto8,
    },
    {
      id: 9,
      ImgSrc: Foto9,
    },
    {
      id: 10,
      ImgSrc: Foto10,
    },
    {
      id: 11,
      ImgSrc: Foto11,
    },
    {
      id: 12,
      ImgSrc: Foto12,
    },
  ];
  return (
    <>
      <div className="galery pb-5 pt-8">
        <div className="w-[90%] m-auto md:max-w-6xl">
          <h2 className="title-slider text-center text-black text-xl  uppercase  md:text-3xl frase my-2">
            Todos somos Dental Sonrix
          </h2>
          <ul className="container-galery ">
            {GALERY.map((image, i) => (
              <li
                key={i}
                className="item-galery overflow-hidden md:rounded-lg md:hover:scale-95 duration-700"
              >
                <img
                  src={image.ImgSrc}
                  alt=""
                  className="w-full h-full rounded-lg object-cover  "
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
