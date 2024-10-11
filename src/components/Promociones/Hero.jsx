import Slider1 from "../../assets/promociones.webp";
import Slider4 from "../../assets/promociones-cel.webp";

import { SuperHero } from "../SuperHero";
export const Hero = () => {
  return (
    <>
      <SuperHero
        bgCel={Slider4}
        bgCompu={Slider1}
        textCategoria={"Promociones"}
      />
    </>
  );
};
