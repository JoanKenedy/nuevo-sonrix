import Slider1 from "../../assets/abouts.jpg";
import Slider4 from "../../assets/nosotros-cel.webp";

import { SuperHero } from "../SuperHero";
export const Hero = () => {
  return (
    <>
      <SuperHero bgCel={Slider4} bgCompu={Slider1} textCategoria={"Nosotros"} />
    </>
  );
};
