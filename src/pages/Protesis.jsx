import { ButtonFixed } from "../components/ButtonsFixed";
import { Contacto } from "../components/Contacto";
import { Descripcion } from "../components/Protesis/Descripcion";
import { Prote } from "../components/Protesis/Prote";
import { Testimonios } from "../components/Protesis/Testimonios";

export const Protesis = () => {
  return (
    <>
      <Prote />
      <Descripcion />
      <Testimonios />
      <Contacto />
      <ButtonFixed />
    </>
  );
};
