import { SuperHero } from "../SuperHero";
import Servicio2 from "../../assets/servicio-2.webp";
import Servicio3 from "../../assets/servicio-cel-2.webp";

export const Estetica = () => {
  return (
    <>
      <SuperHero
        textCategoria={"Diseño de sonrisa"}
        bgCompu={Servicio2}
        bgCel={Servicio3}
      />
    </>
  );
};
