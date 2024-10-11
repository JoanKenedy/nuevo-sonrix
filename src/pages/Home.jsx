import { Contacto } from "../components/Contacto";
import { About } from "../components/Home/About";
import { AgendarCita } from "../components/Home/AgendarCita";
import { Hero } from "../components/Home/Hero";
import { Instalaciones } from "../components/Home/Instalaciones";
import { Servicies } from "../components/Home/Servicies";
import { CallToAction } from "../components/CallToAction";
import { ButtonFixed } from "../components/ButtonsFixed";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <AgendarCita />
      <Servicies />
      <Instalaciones />
      <CallToAction />
      <Contacto />
      <ButtonFixed />
    </>
  );
};
