import logo from "../assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Accessing location object to get the current pathname

  // This function checks if the path argument matches the current location's pathname
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header>
      <div className="flex md:items-center font-[Bellefair] fixed w-[100%] md:justify-start z-2 text-white md:mt-7 lg:mt-12">
        <div className="header flex md:items-center font-[Bellefair] fixed w-full z-10 py-4 px-2 md:px-0 lg:bg-transparent text-white">
          <div className="flex gap-2 md:gap-0 w-[100%] md:pt-5 lg:pt-10 ml-4">
            <div className="md:flex items-center">
              <Link to="/">
                <img src={logo} alt="Logo" className=" h-6 md:h-10 w-auto" />
              </Link>
            </div>
            <div className="hidden w-[35%] lg:flex z-20 items-center lg:relative">
              <hr className="border-t border-white opacity-25 w-[95%] ml-[3.8rem] lg:absolute z-10" />
            </div>
            <nav
              className={`sm:flex gap-1 md:justify-between md:items-center text-sm lg:text-lg tracking-wide lg:px-16 md:px-5 lg:w-[65%] md:pr-[5rem] lg:pr-[10rem] ${
                isMenuOpen ? "flex flex-col sm:flex-row" : "hidden"
              }  lg:bg-[#e0e0e01c] lg:bg-clip-padding lg:backdrop-filter lg:backdrop-blur-lg lg:shadow-md uppercase`}
            >
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isActive("/")
                    ? "border-b-2 w-auto border-white shadow"
                    : "hover:border-b-2 hover:border-[#ffffffd3]"
                } transition-all duration-100 px-4 block sm:inline-block items-center hover:text-gray-300 md:py-2 lg:py-6`}
              >
                <span className="font-bold">00</span> Home
              </Link>

              <Link
                to="/destination"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isActive("/destination")
                    ? "border-b-2 border-white shadow"
                    : "hover:border-b-2 hover:border-[#ffffffd3]"
                } transition-all duration-100 px-4 block sm:inline-block hover:text-gray-300 md:py-2 lg:py-6`}
              >
                <span className="font-bold">01</span> Destination
              </Link>

              <Link
                to="/crew"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isActive("/crew")
                    ? "border-b-2 border-white shadow"
                    : "hover:border-b-2 hover:border-[#ffffffd3]"
                } transition-all duration-100 px-4 block sm:inline-block hover:text-gray-300 md:py-2 lg:py-6`}
              >
                <span className="font-bold">02</span> Crew
              </Link>
              <Link
                to="/technology"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isActive("/technology")
                    ? "border-b-2 border-white shadow"
                    : "hover:border-b-2 hover:border-[#ffffffd3]"
                } transition-all duration-100 px-4 block sm:inline-block hover:text-gray-300 md:py-2 lg:py-6`}
              >
                <span className="font-bold">03</span> Technology
              </Link>
            </nav>
          </div>
          <div className="sm:hidden flex items-start mr-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-xl p-2 focus:outline-none"
            >
              {isMenuOpen ? (
                <img src={close} alt="" className=""/>
              ) : (
                <img src={hamburger} alt="" />
              )}
            </button>
          </div>
        </div>

        {/* <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="w-[40%] z-10">
          <hr className="border-t border-white opacity-25 w-[95%] ml-14" />
        </div>
        <div className="links flex justify-around pt-6 px-10 w-[90%] pr-[8rem] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-4 shadow-md bg-[#e0e0e01c] uppercase">
          <Link
            to="/"
            className={`${
              isActive("/")
                ? "border-b-2 border-white shadow"
                : "hover:border-b-2 hover:border-[#ffffffd3]"
            } transition-all duration-100 pb-6`}
          >
            <span className="font-bold">00</span> Home
          </Link>
          <Link
            to="/destination"
            className={`${
              isActive("/destination")
                ? "border-b-2 border-white shadow"
                : "hover:border-b-2 hover:border-[#ffffffd3]"
            } transition-all duration-100 pb-6`}
          >
            <span className="font-bold">01</span> Destination
          </Link>
          <Link
            to="/crew"
            className={`${
              isActive("/crew")
                ? "border-b-2 border-white shadow"
                : "hover:border-b-2 hover:border-[#ffffffd3]"
            } transition-all duration-100 pb-6`}
          >
            <span className="font-bold">02</span> Crew
          </Link>
          <Link
            to="/technology"
            className={`${
              isActive("/technology")
                ? "border-b-2 border-white shadow"
                : "hover:border-b-2 hover:border-[#ffffffd3]"
            } transition-all duration-100 pb-6`}
          >
            <span className="font-bold">03</span> Technology
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
