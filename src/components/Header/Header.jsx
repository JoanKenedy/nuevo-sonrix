import { useState } from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/1-logo.png";
import Logo2 from "../../assets/2-logo.png";
import { RiCloseLargeLine } from "react-icons/ri";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

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
      link: "/",
    },
    {
      id: 2,
      name: "Nosotros",
      link: "/nosotros",
    },
    {
      id: 3,
      name: "Servicios",
      link: "/servicios",
    },
    {
      id: 4,
      name: "Testimonios",
      link: "/testimonios",
    },
  ];
  return (
    <>
      <div
        className={`${
          isNavbar ? "bg-black" : "menu"
        }  w-screen fixed z-20 left-0 top-0 duration-700  `}
      >
        <div className="container-menu px-7 py-3 md:py-4  md:max-w-7xl m-auto flex flex-row justify-between items-center md:justify-between md:px-8 ">
          <div className="logo-menu flex justify-center items-center">
            <img src={Logo1} alt="" className="w-15 logo-1" />{" "}
            <img src={Logo2} alt="" className="w-36 md:w-44" />
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
                  <Link
                    to={data.link}
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    className="link"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
              <div className="redes-header flex justify-center items-center gap-5 pt-14 md:pt-2 md:ml-9 ">
                <a
                  href="https://www.facebook.com/dentalsonrix.mx/"
                  target="_blank"
                >
                  <FaFacebook className="text-white text-2xl md:text-3xl" />
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=525652700762"
                  target="_blank"
                >
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
