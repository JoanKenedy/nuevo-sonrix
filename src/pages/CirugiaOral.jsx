import { Cirugia } from "../components/Cirugia/Cirugia";
import { Contacto } from "../components/Contacto";
import { Descripcion } from "../components/Cirugia/Descripcion";

import { Testimonios } from "../components/Cirugia/Testimonios";

export const CirugiaOral = () => {
  return (
    <>
      <Cirugia />
      <Descripcion />
      <Testimonios />
      <Contacto />
    </>
  );
};
