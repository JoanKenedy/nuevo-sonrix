import { SuperDescripcion } from "../SuperDescripcion";

export const Descripcion = () => {
  const title = "¿Ques es la Odontología?";
  const description =
    "Es la especialidad que se centra en el diagnóstico, tratamiento y prevención de los problemas primarios de la salud bucodental. Estos incluyen problemas que afectan a los dientes, a las encías, el tejido periodontal y la articulación temporomandibular.";
  return (
    <>
      <SuperDescripcion title={title} texto={description} />
    </>
  );
};
