import { Outlet } from "react-router-dom"
import TopBar from "./components/ui/TopBar";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";



function App() {

  const { i18n } = useTranslation();

      useEffect(() => {
        if (i18n.language === "ar") {
          document.body.classList.add("arabic");
        } else {
          document.body.classList.remove("arabic");
        }
      }, [i18n.language]);


  return (
    <div className="w-full px-4 md:px-[40px] lg:px-[100px]">
      <TopBar />
      <div className="main mainCss mt-[60px] lg:mt-[80px]">
        <Outlet />
      </div>

    </div>
  );
}

export default App
