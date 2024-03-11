import logo from "../assets/shared/logo.svg"
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // Accessing location object to get the current pathname

  // This function checks if the path argument matches the current location's pathname
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header>
      <div className="flex items-center font-[Bellefair] fixed w-[100%] justify-start z-2 text-white mt-8 ml-8">
        <div>
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
        </div>
      </div>
    </header>
  );
};

export default Header;