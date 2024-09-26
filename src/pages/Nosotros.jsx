import { Fundadores } from "../components/Nosotros/Fundadores";
import { Hero } from "../components/Nosotros/Hero";
import { Contacto } from "../components/Contacto";
import { Parrallax } from "../components/Nosotros/Parallax";
import { Team } from "../components/Nosotros/Team";
import { CallToAction } from "../components/CallToAction";

export const Nosotros = () => {
  return (
    <>
      <Hero />
      <Fundadores />
      <Parrallax />
      <Team />
      <CallToAction />
      <Contacto />
    </>
  );
};
