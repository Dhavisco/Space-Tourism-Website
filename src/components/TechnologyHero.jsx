import { useState } from "react";
import data from "./store/data.json";
import "./TechnologyHero.css";

const TechnologyHero = () => {
  const [currentTechIndex, setcurrentTechIndex] = useState(0); // Initially display the first tech
  const tech = data.technology;

  // Function to handle tech change
  const handletechChange = (index) => {
    setcurrentTechIndex(index);
  };

  const currenttechDetails = tech[currentTechIndex];

  return (
    <div className="techhero">
      <div className="text-white lg:pt-[5rem] grid lg:grid-cols-1 gap-10 column w-[100%] h-[100vh] font-sans items-center content-center lg:px-[5rem]">
        <div className="uppercase font-sans tracking-widest font-semibold text-[#ffffffe1] text-xl lg:text-2xl">
          03 <span className="ml-2 text-white">Space Launch 101</span>
        </div>
        <div className="grid lg:grid-cols-2 justify-center items-center gap-6 md:gap-2">
          {currenttechDetails && (
            <div className="flex items-center gap-2 md:gap-5 w-[95%]">
              <nav>
                <div className="dots flex flex-col justify-center items-center gap-5">
                  {tech.map((_, index) => (
                    <div
                      className={`dot ${
                        index === currentTechIndex ? "active" : ""
                      } flex justify-center items-center font-serif md:text-2xl`}
                      key={index}
                      onClick={() => handletechChange(index)}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </nav>
              <div className="flex flex-col gap-2 lg:gap-5 ">
                <div className="uppercase font-serif text-sm md:text-base tracking-wide text-[#ffffffe1]">
                  The terminology...
                </div>
                <div className="uppercase font-[Bellefair] text-2xl lg:text-5xl tracking-wide lg:tracking-[0.3rem]">
                  {currenttechDetails.name}
                </div>
                <div className="w-6/7 font-light text-[#ffffffe0] sm:text-justify font-sans leading-6">
                  {currenttechDetails.description}
                </div>
              </div>
            </div>
          )}
          <div className="flex lg:justify-end justify-center rounded-lg overflow-hidden shadow-md">
            <img
              src={currenttechDetails.images.landscape}
              loading="lazy"
              alt=""
              className="lg:h-[20rem] w-auto md:w-[80%] md:h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyHero;
