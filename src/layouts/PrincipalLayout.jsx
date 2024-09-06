import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const PrincipalLayout = () => {
  return (
    <>
      <Header />
      <main className="  ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
