import { ButtonFixed } from "../components/ButtonsFixed";
import { Descripcion } from "../components/Ortodoncia/Descripcion";
import { Orto } from "../components/Ortodoncia/Orto";
import { Testimonios } from "../components/Ortodoncia/Testimonios";

export const Ortodoncia = () => {
  return (
    <>
      <Orto />
      <Descripcion />
      <Testimonios />
      <ButtonFixed />
    </>
  );
};
