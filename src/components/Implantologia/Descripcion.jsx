import { SuperDescripcion } from "../SuperDescripcion";
export const Descripcion = () => {
  const title = "¿Ques es la Implantología?";
  const description =
    "Es la disciplina encargada del reemplazo de las piezas dentales perdidas mediante la colocación quirúrgica de un aditamento intraóseo (implante dental) y un aditamento protésico (corona, puente o prótesis), tanto en el maxilar como en la mandíbula.";
  return (
    <>
      <SuperDescripcion title={title} texto={description} />
    </>
  );
};
