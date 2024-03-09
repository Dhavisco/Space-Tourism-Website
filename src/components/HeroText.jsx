const HeroText = () => {
  return (
    <>
      <div className="text-white grid lg:grid-cols-2 gap-8 column w-[100%] h-[100vh] font-sans items-center  content-center px-[8rem]">
        <div className="flex flex-col justify-center gap-8 mt-[10rem]">
          <div className="uppercase font-sans tracking-widest text-[#ffffffe1]">
            01 Pick your destination
          </div>
          <div className="font-light uppercase font-serif text-8xl tracking-[0.8rem]">
            Space
          </div>
          <div className="tracking-wide w-5/6 font-light text-[#ffffffe0] text-justify leading-relaxed font-sans">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <div className="flex flex-col justify-end items-end mt-[14.2rem]">
          <div className="flex justify-center items-center tracking-widest leading-relaxed text-2xl font-[Sans-serif] font-[50] bg-white text-[#111142c9] rounded-full w-[13rem] h-[13rem] uppercase cursor-pointer hover:bg-[#b1b1ee] hover:text-[#111142f1] transition-colors duration-300">
            Explore
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroText;
