import { ButtonFixed } from "../components/ButtonsFixed";
import { Descripcion } from "../components/Periodoncia/Descripcion";
import { Period } from "../components/Periodoncia/Period";
import { Contacto } from "../components/Contacto";
import { Testimonios } from "../components/Periodoncia/Testimonios";

export const Periodoncia = () => {
  return (
    <>
      <Period />
      <Descripcion />
      <Testimonios />
      <Contacto />
      <ButtonFixed />
    </>
  );
};
