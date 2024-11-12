import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import SideBar from "./SideBar";
import { useState } from "react";

const TopBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="h-[60px] bg-white fixed right-0 left-0 top-0 flex items-center justify-between px-4 shadow-sm lg:h-[80px] md:px-10 lg:px-[80px] z-50 ">
        <div className="name flex items-center gap-2 lg:gap-3">
          <button onClick={() => setOpen(true)}>
            {open ? (
              <IoClose className="lg:text-[28px]" />
            ) : (
              <FiMenu className="lg:text-[28px]" />
            )}
          </button>
          <p className="text-[18px] font-bold lg:text-[28px]">Hello, John 👋</p>
        </div>

        <img
          src="/profilePic.png"
          className="w-[40px] h-[40px] rounded-50 object-cover object-center lg:w-[50px] lg:h-[50px]"
          alt="profilePic"
        />
      </div>
      <SideBar open={open} setOpen={setOpen} />
    </>
  );
};

export default TopBar;
