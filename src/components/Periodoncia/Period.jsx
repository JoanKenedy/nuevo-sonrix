import { SuperHero } from "../SuperHero";
import Servicio8 from "../../assets/servicio-8.webp";
import Servicio9 from "../../assets/servicio-cel-8.webp";

export const Period = () => {
  return (
    <>
      <SuperHero
        bgCompu={Servicio8}
        textCategoria={"Periodoncia"}
        bgCel={Servicio9}
      />
    </>
  );
};
