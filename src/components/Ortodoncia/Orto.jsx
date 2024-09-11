import { SuperHero } from "../SuperHero";
import Servicio3 from "../../assets/servicio-3.webp";
import Servicio4 from "../../assets/servicio-cel-3.webp";

export const Orto = () => {
  return (
    <>
      <SuperHero
        textCategoria={"Ortodoncia"}
        bgCompu={Servicio3}
        bgCel={Servicio4}
      />
    </>
  );
};
