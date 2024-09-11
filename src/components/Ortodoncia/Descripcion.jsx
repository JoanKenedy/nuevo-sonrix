import { SuperDescripcion } from "../SuperDescripcion";
export const Descripcion = () => {
  const title = "¿Ques es la Cirugía dental?";
  const description =
    "Se emplea en aquellos casos en los que, por ejemplo, se necesita realizar una elevación del seno maxilar o para promover la regeneración ósea. También cuando se llevan a cabo extracciones complejas o cirugías de la encía.";
  return (
    <>
      <SuperDescripcion title={title} texto={description} />
    </>
  );
};
