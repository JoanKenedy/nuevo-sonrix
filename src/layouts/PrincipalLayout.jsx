import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const PrincipalLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col justify-center items-center ">
        <Outlet />
      </main>
    </>
  );
};