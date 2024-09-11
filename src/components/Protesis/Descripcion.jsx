import { SuperDescripcion } from "../SuperDescripcion";
export const Descripcion = () => {
  const title = "¿Ques es una prótesis?";
  const description =
    "Representan una solución apropiada para aquellas personas que necesitan recuperar el correcto funcionamiento de la boca, ya que se trata de dispositivos diseñados especialmente para reemplazar los dientes perdidos y favorecer la oclusión dental.";
  return (
    <>
      <SuperDescripcion title={title} texto={description} />
    </>
  );
};
