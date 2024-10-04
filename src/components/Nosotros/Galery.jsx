import Foto1 from "../../assets/galery-1.jpg";
import Foto2 from "../../assets/galery-2.jpg";
import Foto3 from "../../assets/galery-3.jpg";
import Foto4 from "../../assets/galery-4.jpg";
import Foto5 from "../../assets/galery-5.jpg";
import Foto6 from "../../assets/galery-6.jpg";
import Foto7 from "../../assets/galery-7.jpg";
import Foto8 from "../../assets/galery-8.jpg";
import Foto9 from "../../assets/galery-9.jpg";
import Foto10 from "../../assets/galery-10.jpg";
import Foto11 from "../../assets/galery-11.jpg";
import Foto12 from "../../assets/galery-12.jpg";
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
          <h2 className="text-2xl mb-2 font-semibold md:text-5xl pl-5 md:mb-4">
            Todos somos Dental Sonrix
          </h2>
          <ul className="container-galery ">
            {GALERY.map((image, i) => (
              <li key={i} className="item-galery overflow-hidden md:rounded-lg">
                <img
                  src={image.ImgSrc}
                  alt=""
                  className="w-full h-full rounded-lg object-cover md:hover:scale-125  duration-1000  "
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
