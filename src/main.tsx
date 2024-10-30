import App from "./App.tsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";




const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/structure", element: <MainPage /> },
      { path: "/structure/:elements", element: <MainPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
