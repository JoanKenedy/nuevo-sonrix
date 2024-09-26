import Logo from "../../assets/2-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export const Footer = () => {
  const Company = [
    {
      id: 1,
      name: "Inicio",
      link: "#inicio",
    },
    {
      id: 2,
      name: "Nosotros",
      link: "#beneficios",
    },
    {
      id: 3,
      name: "Servicios",
      link: "#servicios",
    },
    {
      id: 4,
      name: "Testimonios",
      link: "#testimonios",
    },
    {
      id: 5,
      name: "Contacto",
      link: "#contacto",
    },
  ];
  const Features = [
    {
      id: 1,
      name: "Odontología general",
      link: "#servicios",
    },
    {
      id: 2,
      name: "Éstetica dental",
      link: "#servicios",
    },
    {
      id: 3,
      name: "Ortodoncia",
      link: "#servicios",
    },
    {
      id: 4,
      name: "Endodoncia",
      link: "#servicios",
    },
    {
      id: 5,
      name: "Todos los servicios",
      link: "#servicios",
    },
  ];
  const Helps = [
    {
      id: 1,
      name: "Contacto",
      link: "https://api.whatsapp.com/send?phone=525575791467",
    },
    {
      id: 2,
      name: "Ubicación",
      link: "#paquetes",
    },
    {
      id: 2,
      name: "¿Cómo llegar?",
      link: "#paquetes",
    },
  ];
  return (
    <>
      <footer className="footer w-full  h-auto relative m-auto ">
        <div className="container-footer max-w-7xl  flex flex-col justify-start gap-3 w-11/12  m-auto pt-10 md:grid md:grid-cols-4  md:pb-3 md:pt-20 ">
          <div className="item-footer flex flex-col gap-4 ">
            <img src={Logo} alt="" className="max-w-40" />
            <p className="text-white text-sm">
              Brindamos soluciones personalizadas adaptadas a las necesidades y
              objetivos únicos de nuestros clientes.
            </p>
            <div className="link-redes-foote flex gap-3">
              <a
                href="https://www.facebook.com/dentalsonrix.mx/"
                target="_blank"
              >
                <FaFacebook className="text-xl text-white" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=525652700762"
                target="_blank"
              >
                <FaWhatsappSquare className="text-xl text-white" />
              </a>
            </div>
          </div>
          <div className="item-footer md:flex md:flex-col md:items-center">
            <h4 className="font-semibold text-white text-sm md:text-base">
              Menú
            </h4>
            <ul className="menu-footer flex justify-start flex-col md:gap-3">
              {Company.map((com, index) => (
                <li className="text-sm text-white font-light" key={index}>
                  <a href={com.link}>{com.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="item-footer md:flex md:flex-col md:items-center">
            <h4 className="font-semibold text-white text-sm md:text-base">
              Servicios
            </h4>
            <ul className="menu-footer flex justify-start flex-col md:gap-3">
              {Features.map((feature, index) => (
                <li className="text-sm text-white font-light" key={index}>
                  <a href={feature.link}>{feature.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="item-footer ml-0 md:flex md:flex-col md:items-center">
            <h4 className="font-semibold text-white text-sm md:text-base">
              Ayuda
            </h4>
            <ul className="menu-footer flex justify-start flex-col md:gap-3">
              {Helps.map((help, index) => (
                <li className="text-sm text-white font-light" key={index}>
                  <a href={help.link}>{help.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hr-div bg-neutral-500 max-w-7xl m-auto my-2"></div>
        <div
          className="item md:flex md:flex-row justify-between max-w-7xl
       m-auto p-2 "
        >
          <p className="text-xs text-white font-light">
            @2024 Dental Sonrix. Todos los derechos reservados
          </p>
          <div className="terminos flex gap-5">
            <a href="" className="text-xs text-white font-light">
              Política de privacidad
            </a>
            <a href="" className="text-xs text-white font-light">
              Desarrollado por Agencia Dentarios
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
