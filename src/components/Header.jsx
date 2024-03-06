import logo from "../assets/shared/logo.svg"

const Header = () => {

  return (
    <header>
      <div className="flex items-center font-sans fixed w-[100%] justify-start z-2 text-white mt-8 ml-8">
        <div className="w-[]">
          <img src={logo} alt="" />
        </div>
        <div className="w-[40%] z-10 ">
          <hr className="border-t border-white opacity-25 w-full ml-6" />
        </div>
        <div className="links flex justify-around py-6 px-6 w-[90%] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-4 shadow-md bg-[#1a253b5b]">
          <div>00 Home</div>
          <div>01 Destination</div>
          <div>02 Crew</div>
          <div className="pr-[6rem]">03 Technology</div>
        </div>
      </div>
    </header>
  );
}

export default Header
