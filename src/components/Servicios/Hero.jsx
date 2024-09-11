import Slider1 from "../../assets/Servicios.jpg";
import Slider4 from "../../assets/servicio-cel.jpg";
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
