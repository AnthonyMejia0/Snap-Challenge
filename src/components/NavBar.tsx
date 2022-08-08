import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import closeMenu from "../images/icon-close-menu.svg";
import CompanyDropDown from "./CompanyDropDown";
import FeaturesDropDown from "./FeaturesDropDown";
import { useState } from "react";

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className={`absolute h-screen w-screen bg-black z-5 ${
          isExpanded ? "opacity-70" : "hidden"
        }`}
      ></div>
      <header className="h-24 flex justify-between px-5 lg:px-10">
        <div className="flex items-center space-x-16">
          <img className="h-8 mt-2" src={logo} alt="Snap Logo" />
          <div className="hidden lg:flex md:space-x-10 medium-gray">
            <FeaturesDropDown />
            <CompanyDropDown />
            <p className="hover:font-bold cursor-pointer w-20">Careers</p>
            <p className="hover:font-bold cursor-pointer w-20">About</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-8 medium-gray">
          <button className="hover:font-bold">Login</button>
          <button className="h-12 border border-[#696969] hover:border-[#141414] hover:font-bold px-5 py-1 rounded-xl w-28">
            Register
          </button>
        </div>
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center cursor-pointer lg:hidden"
        >
          <img src={menu} alt="Menu Icon" />
        </button>
      </header>
      <div
        className={`absolute top-0 right-0 w-[65%] ${
          isExpanded ? "inline" : "hidden"
        } h-screen bg-white z-10`}
      >
        <button
          onClick={() => setIsExpanded(false)}
          className={`${!isExpanded ? "hidden" : ""} float-right py-9 px-5`}
        >
          <img src={closeMenu} alt="Menu Icon" />
        </button>
        <div className="absolute top-24 py-2 px-8 flex flex-col space-y-8 medium-gray w-full">
          <FeaturesDropDown isMobile />
          <CompanyDropDown isMobile />
          <p className="hover:font-bold cursor-pointer">Careers</p>
          <p className="hover:font-bold cursor-pointer">About</p>
          <button className="hover:font-bold w-full">Login</button>
          <button className="h-12 border border-[#696969] hover:border-[#141414] hover:font-bold px-5 py-1 rounded-xl w-full">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
