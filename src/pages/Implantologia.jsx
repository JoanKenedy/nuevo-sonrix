import { Descripcion } from "../components/Implantologia/Descripcion";
import { Implanto } from "../components/Implantologia/Implanto";
import { ButtonFixed } from "../components/ButtonsFixed";
import { Contacto } from "../components/Contacto";

export const Implantologia = () => {
  return (
    <>
      <Implanto />
      <Descripcion />
      <Contacto />
      <ButtonFixed />
    </>
  );
};
