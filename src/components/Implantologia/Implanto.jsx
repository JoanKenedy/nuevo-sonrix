import { SuperHero } from "../SuperHero";
import Servicio7 from "../../assets/servicio-7.webp";
import Servicio8 from "../../assets/servicio-cel-7.webp";

export const Implanto = () => {
  return (
    <>
      <SuperHero
        textCategoria={"Implantología"}
        bgCompu={Servicio7}
        bgCel={Servicio8}
      />
    </>
  );
};
