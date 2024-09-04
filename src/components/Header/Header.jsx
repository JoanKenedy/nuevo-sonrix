import { useState } from "react";
import Logo from "../../assets/logo-dental-sonrix.png";
import { RiCloseLargeLine } from "react-icons/ri";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const MENU = [
    {
      id: 1,
      name: "Inicio",
      link: "#inicio",
    },
    {
      id: 2,
      name: "Beneficios",
      link: "#beneficios",
    },
    {
      id: 3,
      name: "Servicios",
      link: "#servicios",
    },
    {
      id: 4,
      name: "Academy",
      link: "https://academy.dentarios.com.mx/",
    },
    {
      id: 5,
      name: "Testimonios",
      link: "#testimonios",
    },
  ];
  return (
    <>
      <div className="menu bg-black w-screen fixed z-20 left-0 top-0">
        <div className="container-menu px-7 py-1  md:max-w-7xl m-auto flex flex-row justify-between items-center md:justify-between md:px-8 ">
          <div className="logo-menu">
            <img src={Logo} alt="" className="w-20" />
          </div>
          <nav
            className={`${
              isOpenMenu ? "left-0" : "-left-full"
            } absolute top-0  w-full h-screen z-50 duration-700 md:left-auto  md:h-auto md:w-auto md:relative  `}
          >
            <RiCloseLargeLine
              className="absolute z-40 text-white top-8 right-8 font-semibold text-2xl md:hidden"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            />
            <ul className="md:flex  justify-between">
              {MENU.map((data, index) => (
                <li
                  className="pt-14 text-white text-lg  md:pt-2 md:mx-5"
                  key={index}
                >
                  <a
                    href={data.link}
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              <div className="redes-header flex justify-center items-center gap-5 pt-14 md:pt-2 md:ml-9 ">
                <a href="">
                  <FaInstagramSquare className="text-white text-2xl" />
                </a>

                <a href="">
                  <FaFacebook className="text-white text-2xl" />
                </a>

                <a href="">
                  <FaWhatsappSquare className="text-white text-2xl" />
                </a>
              </div>
            </ul>
          </nav>

          <div className="menu-bar md:hidden">
            <HiBars3BottomLeft
              className="text-white text-4xl font-extrabold"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
