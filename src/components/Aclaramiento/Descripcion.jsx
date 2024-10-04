import { SuperDescripcion } from "../SuperDescripcion";
export const Descripcion = () => {
  const title = "Descubre tu mejor sonrisa";
  const description =
    "Con nuestros tratamientos de desmanchamiento y blanqueamiento dental. En Dental Sonrix, utilizamos tecnología avanzada para devolverle el brillo natural a tus dientes, ofreciéndote resultados visibles desde la primera sesión. ¡Agenda tu cita hoy y luce una sonrisa más blanca y radiante!";
  return (
    <>
      <SuperDescripcion title={title} texto={description} />
    </>
  );
};
