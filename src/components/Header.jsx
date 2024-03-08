import logo from "../assets/shared/logo.svg"
import classes from "./Header.module.css"
import { useState } from "react";

const Header = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState("home");

  // Function to update the active link
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <div className="flex items-center font-sans fixed w-[100%] justify-start z-2 text-white mt-8 ml-8">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="w-[40%] z-10">
          <hr className="border-t border-white opacity-25 w-[95%] ml-14" />
        </div>
        <div className="links flex justify-around pt-6 px-10 w-[90%] pr-[8rem] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-4 shadow-md bg-[#e0e0e01c] uppercase">
          <a
            href="#"
            className={`${activeLink === "home" ? `${classes.active}` : ""}`}
            onClick={() => handleSetActiveLink("home")}
          >
            <span className="font-bold">00</span> Home
          </a>
          <a
            href="#"
            className={`${
              activeLink === "destination" ? `${classes.active}` : ""
            }`}
            onClick={() => handleSetActiveLink("destination")}
          >
            <span className="font-bold">01</span> Destination
          </a>
          <a
            href="#"
            className={`${activeLink === "crew" ? `${classes.active}` : ""}`}
            onClick={() => handleSetActiveLink("crew")}
          >
            <span className="font-bold">02</span> Crew
          </a>
          <a
            href="#"
            className={`${
              activeLink === "technology" ? `${classes.active}` : ""
            }`}
            onClick={() => handleSetActiveLink("technology")}
          >
            <span className="font-bold">03</span> Technology
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header
