import App from "./App.tsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";




const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <p className="mt-10">ana</p> },
      { path: "/structure", element: <p className="mt-10">structure</p> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
