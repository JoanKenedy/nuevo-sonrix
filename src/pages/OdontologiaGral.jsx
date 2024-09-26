import { Descripcion } from "../components/General/Descripcion";
import { Hero } from "../components/General/Hero";
import { Testimonios } from "../components/General/Testimonios";
import { ButtonFixed } from "../components/ButtonsFixed";
import { Contacto } from "../components/Contacto";

export const OdontologiaGral = () => {
  return (
    <>
      <Hero />
      <Descripcion />
      <Testimonios />
      <Contacto />
      <ButtonFixed />
    </>
  );
};
