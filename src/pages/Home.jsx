import { Contacto } from "../components/Contacto";
import { About } from "../components/Home/About";
import { AgendarCita } from "../components/Home/AgendarCita";
import { Hero } from "../components/Home/Hero";
import { Servicies } from "../components/Home/Servicies";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <AgendarCita />
      <Servicies />
      <Contacto />
    </>
  );
};
