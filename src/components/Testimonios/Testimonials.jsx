import Testimonio1 from "../../assets/testimonio-1.png";
import Testimonio2 from "../../assets/testimonio-2.png";
import Testimonio3 from "../../assets/testimonio-3.png";
import Testimonio4 from "../../assets/testimonio-4.png";
export const Testimonials = () => {
  const TESTIMONIOS = [
    {
      id: 1,
      nameTestimonio: "Lizbeth Jacob",
      testimonio:
        "Es un trato profesional y muy cordial. Muy buen trabajo y estoy totalmente satisfecha. Lo recomiendo ampliamente. Respetan citas, presupuestos y muy buena atención.",
      imgPerfil: Testimonio1,
    },
    {
      id: 2,
      nameTestimonio: "Loren Guerrero",
      testimonio:
        "Muy recomendables. Desde que llegas te ponen en el espejito una bienvenida personalizada, muy lindo detalle. Te suuuper explican a detalle tu diagnóstico y la atención muy minuciosa. El costo muy accesible. Sali con sonrisa nueva. Muy buenos profesionales.",
      imgPerfil: Testimonio2,
    },
    {
      id: 3,
      nameTestimonio: "Daniela Nava",
      testimonio:
        "Todo excelente    los doctores capacitados y pendientes de ti en todo momento, limpio y precios accesibles. Super contenta con mi diseño de sonrisa 😀",
      imgPerfil: Testimonio3,
    },
    {
      id: 4,
      nameTestimonio: "Luis Gonzales Aguilar",
      testimonio:
        "Las consultas son rápidas y amenas.Los doctores Diego y Marisol son excelentes profesionales siempre muy amables y atentos.",
      imgPerfil: Testimonio3,
    },
  ];
  return (
    <>
      <div className="testimonials">
        <h2>Escucha lo que nuestros clientes satisfechos tienen que decir.</h2>
        <div className="container-testimonials">
          <div className="item-testimonials"></div>
        </div>
      </div>
    </>
  );
};
