import { useState } from "react";
import bgimg from "../assets/technology/background-technology-desktop.jpg";
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
    <div className="hero" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="text-white pt-[5rem] grid lg:grid-cols-1 gap-10 column w-[100%] h-[100vh] font-sans items-center content-center px-[5rem]">
        <div className="uppercase font-sans tracking-widest font-semibold text-[#ffffffe1] text-2xl">
          03 <span className="ml-2 text-white">Space Launch 101</span>
        </div>
        <div className="grid grid-cols-2 justify-center items-center gap-2">
          {currenttechDetails && (
            <div className="flex items-center gap-5 w-[95%]">
              <nav>
                <div className="dots flex flex-col justify-center items-center gap-5">
                  {tech.map((_, index) => (
                    <div
                      className={`dot ${
                        index === currentTechIndex ? "active" : ""
                      } flex justify-center items-center font-serif text-2xl`}
                      key={index}
                      onClick={() => handletechChange(index)}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </nav>
              <div className="flex flex-col lg:gap-5 ">
                <div className="uppercase font-serif text-base tracking-wide text-[#ffffffe1]">
                  The terminology...
                </div>
                <div className="uppercase font-[Bellefair] text-5xl tracking-[0.3rem]">
                  {currenttechDetails.name}
                </div>
                <div className="w-6/7 font-light text-[#ffffffe0] text-justify font-sans leading-6">
                  {currenttechDetails.description}
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-end rounded-lg overflow-hidden shadow-md">
            <img
              src={currenttechDetails.images.landscape}
              alt=""
              className="h-[20rem] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyHero;
