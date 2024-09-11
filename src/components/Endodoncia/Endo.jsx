import { SuperHero } from "../SuperHero";
import Servicio4 from "../../assets/servicio-4.webp";
import Servicio5 from "../../assets/servicio-cel-4.webp";

export const Endo = () => {
  return (
    <>
      <SuperHero
        textCategoria={"Endodoncia"}
        bgCompu={Servicio4}
        bgCel={Servicio5}
      />
    </>
  );
};
