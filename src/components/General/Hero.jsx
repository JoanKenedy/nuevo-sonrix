import { SuperHero } from "../SuperHero";
import Servicio1 from "../../assets/servicio-1.webp";
import Servicio2 from "../../assets/servicio-cel-1.webp";

export const Hero = () => {
  return (
    <>
      <SuperHero
        textCategoria={"Odontología General"}
        bgCompu={Servicio1}
        bgCel={Servicio2}
      />
    </>
  );
};
