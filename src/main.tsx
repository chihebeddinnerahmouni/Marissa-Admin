import App from "./App.tsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import Users from "./pages/Users.tsx";
import Regions from "./pages/Regions.tsx";
import english from "./locales/english.json";
import arabic from "./locales/arabic.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Categories from "./pages/Categories.tsx";
import Boats from "./pages/boats/Boats.tsx";
import UpdateBoat from "./pages/boats/UpdateBoat.tsx";
import Help from "./pages/Help.tsx";
import Features from "./pages/Features.tsx";
import Submissions from "./pages/Submissions.tsx";






const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/categories", element: <Categories /> },
      { path: "/users", element: <Users /> },
      { path: "/features", element: <Features /> },
      { path: "/listings", element: <Boats /> },
      { path: "/listings/update-boat/:boatId", element: <UpdateBoat /> },
      { path: "/regions", element: <Regions /> },
      { path: "/help", element: <Help /> },
      { path: "/submissions", element: <Submissions /> },
    ],
  },
]);




// i18n for translation
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: english,
      },
      ar: {
        translation: arabic,
      },
    },
    lng: localStorage.getItem("i18nextLng") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "ar" ? "rtl" : "ltr"
    );

    i18n.on("languageChanged", (lng) => {
      document.documentElement.setAttribute(
        "dir",
        lng === "ar" ? "rtl" : "ltr"
      );
    });
  });





ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
