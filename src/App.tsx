import { Outlet } from "react-router-dom"
import TopBar from "./components/ui/TopBar";
// import { useState } from "react";



function App() {


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
