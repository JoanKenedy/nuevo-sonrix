import { Contacto } from "../components/Contacto";
import { Hero } from "../components/Testimonios/Header";
import { Testimonials } from "../components/Testimonios/Testimonials";
import { CallToAction } from "../components/CallToAction";
import { ButtonFixed } from "../components/ButtonsFixed";

export const Testimonios = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <CallToAction />
      <Contacto />
      <ButtonFixed />
    </>
  );
};
