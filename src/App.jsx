import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrincipalLayout } from "./layouts/PrincipalLayout";
import { Home } from "./pages/Home";
import { Nosotros } from "./pages/Nosotros";
import "./App.css";
import { Testimonios } from "./pages/Testimonios";
import { Servicios } from "./pages/Servicios";
import { OdontologiaGral } from "./pages/OdontologiaGral";
import { DisenoSonrisa } from "./pages/DisenoSonrisa";
import { Ortodoncia } from "./pages/Ortodoncia";
import { Endodoncia } from "./pages/Endodoncia";
import { Protesis } from "./pages/Protesis";
import { CirugiaOral } from "./pages/CirugiaOral";
import { Implantologia } from "./pages/Implantologia";
import { Periodoncia } from "./pages/Periodoncia";
import { Desmanchamiento } from "./pages/Desmanchamiento";
import { Promociones } from "./pages/Promociones";
import { Contactos } from "./pages/Contactos";

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
        path: "/promociones",
        element: <Promociones />,
      },
      {
        path: "/contacto",
        element: <Contactos />,
      },
      {
        path: "/odontologia-general",
        element: <OdontologiaGral />,
      },
      {
        path: "/diseno-de-sonrisa",
        element: <DisenoSonrisa />,
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
      {
        path: "/desmanchamiento-y-aclaramiento",
        element: <Desmanchamiento />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
