import { ButtonFixed } from "../components/ButtonsFixed";
import { CallToAction } from "../components/CallToAction";
import { Contacto } from "../components/Contacto";
import { Hero } from "../components/Promociones/Hero";
import { Promocion } from "../components/Promociones/Promocion";

export const Promociones = () => {
  return (
    <>
      <Hero />
      <Promocion />
      <CallToAction />
      <Contacto />
      <ButtonFixed />
    </>
  );
};
