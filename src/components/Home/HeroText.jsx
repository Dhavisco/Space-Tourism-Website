import { Link } from "react-router-dom";

const HeroText = () => {
  return (
    <>
      <div className="hero text-white grid lg:grid-cols-2 gap-20 lg:gap-8 column w-[100%] h-[100vh] px-2 font-sans items-center  content-center md:px-16 lg:px-[8rem]">
        <div className="flex flex-col justify-center mt-[7rem]">
          <div className="uppercase font-sans text-sm md:text-lg tracking-widest text-[#ffffffe1]">
            So, you want to travel to
          </div>
          <div className="font-light uppercase font-serif lg:text-[7rem] text-6xl  tracking-[0.8rem]">
            Space
          </div>
          <div className="tracking-wide md:w-5/6 font-light text-sm sm:text-sm text-[#ffffffe0] text-justify md:leading-relaxed font-sans">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <Link to="/destination">
          <div className="flex flex-col justify-end items-end lg:mt-[14.2rem]">
            <div className="flex justify-center items-center tracking-widest leading-relaxed text-xl lg:text-2xl font-[Sans-serif] font-[50] bg-white text-[#111142c9] rounded-full w-[10rem] h-[10rem] lg:w-[13rem] lg:h-[13rem] uppercase cursor-pointer hover:bg-[#b1b1ee] hover:text-[#111142f1] transition-colors duration-300">
              Explore
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HeroText;
