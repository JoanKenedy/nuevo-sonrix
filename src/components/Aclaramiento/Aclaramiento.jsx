import { SuperHero } from "../SuperHero";
import Servicio6 from "../../assets/aclaramiento.jpg";
import Servicio7 from "../../assets/aclaramiento-cel.webp";

export const Aclaramiento = () => {
  return (
    <>
      <SuperHero
        textCategoria={"Desmanchamiento y Aclaramiento"}
        bgCompu={Servicio6}
        bgCel={Servicio7}
      />
    </>
  );
};
