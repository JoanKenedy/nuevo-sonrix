import { Contacto } from "../components/Contacto";
import { About } from "../components/Home/About";
import { AgendarCita } from "../components/Home/AgendarCita";
import { Hero } from "../components/Home/Hero";
import { Instalaciones } from "../components/Home/Instalaciones";
import { Servicies } from "../components/Home/Servicies";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <AgendarCita />
      <Servicies />
      <Instalaciones />
      <Contacto />
    </>
  );
};
