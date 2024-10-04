import { Fundadores } from "../components/Nosotros/Fundadores";
import { Hero } from "../components/Nosotros/Hero";
import { Contacto } from "../components/Contacto";
import { Parrallax } from "../components/Nosotros/Parallax";
import { Team } from "../components/Nosotros/Team";
import { CallToAction } from "../components/CallToAction";
import { ButtonFixed } from "../components/ButtonsFixed";
import { Galery } from "../components/Nosotros/Galery";

export const Nosotros = () => {
  return (
    <>
      <Hero />
      <Fundadores />
      <Parrallax />
      <Team />
      <Galery />
      <CallToAction />
      <Contacto />
      <ButtonFixed />
    </>
  );
};
