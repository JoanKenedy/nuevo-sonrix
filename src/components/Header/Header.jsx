import { useState } from "react";
import Logo from "../../assets/logo-dental-sonrix.png";
import { RiCloseLargeLine } from "react-icons/ri";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);
  const handleNabvar = () => {
    setIsNavbar(!isNavbar);
  };
  const navbarBackground = () => {
    if (window.scrollY > 90) {
      setIsNavbar(true);
    } else {
      setIsNavbar(false);
    }
  };
  window.addEventListener("scroll", navbarBackground);
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
      <div
        className={`${
          isNavbar ? "bg-black" : "menu"
        }  w-screen fixed z-20 left-0 top-0 duration-700  `}
      >
        <div className="container-menu px-7 py-2 md:py-4  md:max-w-7xl m-auto flex flex-row justify-between items-center md:justify-between md:px-8 ">
          <div className="logo-menu">
            <img src={Logo} alt="" className="w-32 md:w-44" />
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
            <ul className="flex flex-col justify-between items-center md:flex-row">
              {MENU.map((data, index) => (
                <li
                  className="pt-14 text-white text-base  md:pt-2 md:mx-5"
                  key={index}
                >
                  <a
                    href={data.link}
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    className="link"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              <div className="redes-header flex justify-center items-center gap-5 pt-14 md:pt-2 md:ml-9 ">
                <a href="">
                  <FaInstagramSquare className="text-white text-2xl md:text-3xl" />
                </a>

                <a href="">
                  <FaFacebook className="text-white text-2xl md:text-3xl" />
                </a>

                <a href="">
                  <FaWhatsappSquare className="text-white text-2xl md:text-3xl" />
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
