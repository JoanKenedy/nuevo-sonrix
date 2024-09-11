import { SuperHero } from "../SuperHero";
import Servicio6 from "../../assets/servicio-6.webp";
import Servicio7 from "../../assets/servicio-cel-6.webp";

export const Cirugia = () => {
  return (
    <>
      <SuperHero
        textCategoria={"Cirugía Oral"}
        bgCompu={Servicio6}
        bgCel={Servicio7}
      />
    </>
  );
};
