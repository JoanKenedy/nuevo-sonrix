import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrincipalLayout } from "./layouts/PrincipalLayout";
import { Home } from "./pages/Home";
import { Nosotros } from "./pages/Nosotros";
import "./App.css";
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
