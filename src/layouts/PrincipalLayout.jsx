import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import ScrollTop from "../components/ScrollTop";

export const PrincipalLayout = () => {
  return (
    <>
      <ScrollTop />
      <Header />
      <main className="  ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
