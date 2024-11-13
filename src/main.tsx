import App from "./App.tsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import Users from "./pages/Users.tsx";
import Regions from "./pages/Regions.tsx";





const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/categories", element: <MainPage /> },
      { path: "/users", element: <Users /> },
      { path: "/features", element: <MainPage /> },
      { path: "/listings", element: <MainPage /> },
      { path: "/regions", element: <Regions /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
