import { Outlet } from "react-router-dom"
import Header from "./components/ui/Header"



function App() {


  return (
    <div className="w-full px-4 md:px-[100px] lg:px-4">
      <Header />
      <Outlet />
    </div>
  );
}

export default App
