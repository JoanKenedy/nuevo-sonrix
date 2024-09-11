import Team1 from "../../assets/team-one.webp";
import Team2 from "../../assets/team-1.webp";
import Team3 from "../../assets/team-2.webp";
import Team4 from "../../assets/team-3.webp";
import Team5 from "../../assets/team-4.webp";
import Team6 from "../../assets/team-5.webp";
export const Team = () => {
  const EQUIPO = [
    {
      id: 1,
      doctor: Team1,
      alt: "Fundadores",
    },
    {
      id: 2,
      doctor: Team2,
      alt: "Carla Hernández",
    },
    {
      id: 3,
      doctor: Team3,
      alt: "Paola Álavrez",
    },
    {
      id: 4,
      doctor: Team4,
      alt: "Raúl Canul",
    },
    {
      id: 5,
      doctor: Team5,
      alt: "Danial Salvatierra",
    },
    {
      id: 6,
      doctor: Team6,
      alt: "Ricardo Rosales",
    },
  ];
  return (
    <>
      <div className="team py-4">
        <h2 className="title-slider text-center text-black text-xl  uppercase  md:text-3xl frase my-2">
          Nuestro equipo
        </h2>
        <div className="container-team grid gap-4 md:grid-cols-3  md:m-auto md:gap-5">
          {EQUIPO.map((team, index) => (
            <div className="item-team overflow-hidden" key={index}>
              <img
                src={team.doctor}
                alt={team.alt}
                className=" img-instalacion max-w-full md:hover:scale-125"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
