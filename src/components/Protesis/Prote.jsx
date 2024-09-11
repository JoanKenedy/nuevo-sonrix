import { SuperHero } from "../SuperHero";
import Servicio5 from "../../assets/servicio-5.webp";
import Servicio6 from "../../assets/servicio-cel-5.webp";

export const Prote = () => {
  return (
    <>
      <SuperHero
        bgCompu={Servicio5}
        textCategoria={"Prótesis"}
        bgCel={Servicio6}
      />
    </>
  );
};
