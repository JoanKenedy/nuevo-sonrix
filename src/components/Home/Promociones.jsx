import Promo1 from "../../assets/promo-1.jpg";
import Promo2 from "../../assets/promo-2.jpg";
import Promo3 from "../../assets/promo-3.jpg";
export const Promociones = () => {
  return (
    <>
      <section className="w-full pb-4">
        <h2 className="text-2xl font-bold text-center uppercase md:text-3xl mb-3">
          Nuestras promociones
        </h2>
        <div className="container-promos w-[90%] m-auto grid gap-3 md:grid-cols-3 md:max-w-7xl">
          <figure>
            <img
              src={Promo1}
              alt=""
              className="max-w-[100%] md:hover:scale-95 duration-500"
            />
          </figure>
          <figure>
            <img
              src={Promo2}
              alt=""
              className="max-w-[100%] md:hover:scale-95 duration-500"
            />
          </figure>
          <figure>
            <img
              src={Promo3}
              alt=""
              className="max-w-[100%] md:hover:scale-95 duration-500"
            />
          </figure>
        </div>
      </section>
    </>
  );
};