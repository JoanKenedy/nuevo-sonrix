import Slider1 from "../../assets/servicio-1.webp";
import Slider4 from "../../assets/servicio-cel-1.webp";
import { SuperHero } from "../SuperHero";

export const Hero = () => {
  return (
    <>
      <SuperHero
        bgCel={Slider4}
        bgCompu={Slider1}
        textCategoria={"Servicios"}
      />
    </>
  );
};
