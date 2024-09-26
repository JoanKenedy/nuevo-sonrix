import { Contacto } from "../components/Contacto";
import { Hero } from "../components/Testimonios/Header";
import { Testimonials } from "../components/Testimonios/Testimonials";
import { CallToAction } from "../components/CallToAction";

export const Testimonios = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <CallToAction />
      <Contacto />
    </>
  );
};
