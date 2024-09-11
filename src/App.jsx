import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrincipalLayout } from "./layouts/PrincipalLayout";
import { Home } from "./pages/Home";
import { Nosotros } from "./pages/Nosotros";
import "./App.css";
import { Testimonios } from "./pages/Testimonios";
import { Servicios } from "./pages/Servicios";
import { OdontologiaGral } from "./pages/OdontologiaGral";
import { EsteticaDental } from "./pages/EsteticaDental";
import { Ortodoncia } from "./pages/Ortodoncia";
import { Endodoncia } from "./pages/Endodoncia";
import { Protesis } from "./pages/Protesis";
import { CirugiaOral } from "./pages/CirugiaOral";
import { Implantologia } from "./pages/Implantologia";
import { Periodoncia } from "./pages/Periodoncia";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrincipalLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        index: false,
        path: "/nosotros",
        element: <Nosotros />,
      },
      {
        index: false,
        path: "/servicios",
        element: <Servicios />,
      },
      {
        path: "/testimonios",
        element: <Testimonios />,
      },
      {
        path: "/odontologia-general",
        element: <OdontologiaGral />,
      },
      {
        path: "/estetica-dental",
        element: <EsteticaDental />,
      },
      {
        path: "/ortodoncia",
        element: <Ortodoncia />,
      },
      {
        path: "/endodoncia",
        element: <Endodoncia />,
      },
      {
        path: "/protesis",
        element: <Protesis />,
      },
      {
        path: "/cirugia-oral",
        element: <CirugiaOral />,
      },
      {
        path: "/implantologia",
        element: <Implantologia />,
      },
      {
        path: "/periodoncia",
        element: <Periodoncia />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
