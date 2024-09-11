import { SuperDescripcion } from "../SuperDescripcion";
export const Descripcion = () => {
  const title = "¿Ques es uan endodoncia?";
  const description =
    "Es un procedimiento que tiene como finalidad preservar las piezas dentales dañadas, evitando su pérdida. Para ello, se extrae la pulpa dental y la cavidad resultante, se rellena y sella con material inerte y biocompatible.";
  return (
    <>
      <SuperDescripcion title={title} texto={description} />
    </>
  );
};
