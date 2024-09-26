import { Descripcion } from "../components/Endodoncia/Descripcion";
import { Contacto } from "../components/Contacto";
import { Endo } from "../components/Endodoncia/Endo";

import { Testimonios } from "../components/Endodoncia/Testimonios";

export const Endodoncia = () => {
  return (
    <>
      <Endo />
      <Descripcion />
      <Testimonios />
      <Contacto />
    </>
  );
};
