import { SuperDescripcion } from "../SuperDescripcion";
export const Descripcion = () => {
  const title = "¿Ques es la Periodoncia?";
  const description =
    "Es la encargada del estudio, prevención y tratamiento de aquellas patologías que afectan a los tejidos que protegen, rodean y sujetan los dientes: encía, hueso alveolar, ligamento periodontal y cemento radicular.";
  return (
    <>
      <SuperDescripcion title={title} texto={description} />
    </>
  );
};
