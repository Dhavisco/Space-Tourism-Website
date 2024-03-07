import logo from "../assets/shared/logo.svg"

const Header = () => {

  return (
    <header>
      <div className="flex items-center font-sans fixed w-[100%] justify-start z-2 text-white mt-8 ml-8">
        <div className="w-[]">
          <img src={logo} alt="" />
        </div>
        <div className="w-[40%] z-10 ">
          <hr className="border-t border-white opacity-25 w-[95%] ml-14" />
        </div>
        <div className="links flex justify-around py-6 px-10 w-[90%] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-4 shadow-md bg-[#e0e0e01c] uppercase">
          <div>
            {" "}
            <span className="font-bold">00</span> Home
          </div>
          <div>
            {" "}
            <span className="font-bold">01</span> Destination
          </div>
          <div>
            {" "}
            <span className="font-bold">02</span> Crew
          </div>
          <div className="pr-[6rem]">
            <span className="font-bold">03</span> Technology
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
