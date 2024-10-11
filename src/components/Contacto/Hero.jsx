import { SuperHero } from "../SuperHero";
import Servicio1 from "../../assets/contacto.webp";
import Servicio2 from "../../assets/contacto-cel.webp";

export const Hero = () => {
  return (
    <>
      <SuperHero
        textCategoria={"Contacto"}
        bgCompu={Servicio1}
        bgCel={Servicio2}
      />
    </>
  );
};
