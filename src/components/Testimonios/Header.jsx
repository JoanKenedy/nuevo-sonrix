import Slider1 from "../../assets/testimonio.webp";
import Slider4 from "../../assets/testimonio-cel.jpg";
import { SuperHero } from "../SuperHero";

export const Hero = () => {
  return (
    <>
      <SuperHero
        bgCel={Slider4}
        bgCompu={Slider1}
        textCategoria={"Testimonios"}
      />
    </>
  );
};
