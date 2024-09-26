import { Hero } from "../components/Servicios/Hero";
import { Servicies } from "../components/Home/Servicies";
import { Contacto } from "../components/Contacto";
import { CallToAction } from "../components/CallToAction";
import { ButtonFixed } from "../components/ButtonsFixed";

export const Servicios = () => {
  return (
    <>
      <Hero />
      <Servicies />
      <CallToAction />
      <Contacto />
      <ButtonFixed />
    </>
  );
};
