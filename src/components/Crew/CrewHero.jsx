import { useState } from "react";
import data from "../store/data.json";
import "./CrewHero.css"

const CrewHero = () => {
  // const [currentCrew, setCurrentCrew] = useState("Commander");
  const [currentCrewIndex, setCurrentCrewIndex] = useState(0); // Initially display the first crew member
  const crew = data.crew;
  // Find the current crew object
  // const currentCrewDetails = crew.find((crew) => crew.role === currentCrew);

  // Function to handle crew member change
  const handleCrewChange = (index) => {
    setCurrentCrewIndex(index);
  };

  const currentCrewDetails = crew[currentCrewIndex];

  return (
    <div className="hero">
      <div className="crewhero text-white lg:pt-[5rem] grid lg:grid-cols-1 lg:gap-3 column w-[100%] h-[100vh] font-sans items-center content-center lg:px-[3rem]">
        <div className="uppercase text-lg lg:text-2xl font-sans tracking-widest font-semibold text-[#ffffffe1]">
          02 <span className="lg:ml-2 text-white">Meet your crew</span>
        </div>
        <div className="grid lg:grid-cols-2  gap-6 justify-center items-center">
          {currentCrewDetails && (
            <div className="flex flex-col gap-3 lg:gap-5">
              <div className="uppercase sm:text-6xl md:text-4xl font-[Bellefair] tracking-wide">
                {currentCrewDetails.role}
              </div>
              <div className="uppercase font-[Bellefair] text-2xl md:text-6xl lg:tracking-[0.3rem] tracking-wide">
                {currentCrewDetails.name}
              </div>
              <div className=" w-6/7 md:w-4/5 font-light text-[#ffffffe0] text-sm lg:text-base text-justify font-sans">
                {currentCrewDetails.bio}
              </div>
              <nav>
                <div className="dots flex items-center gap-3">
                  {crew.map((_, index) => (
                    <div
                      className={`dot-crew ${
                        index === currentCrewIndex ? "active" : ""
                      }`}
                      key={index}
                      onClick={() => handleCrewChange(index)}
                    ></div>
                  ))}
                </div>

                {/* {crew.map((crew) => (
                  <button
                    className={`mx-4 py-2 font-light hover:font-normal ${
                      currentCrew === crew.role
                        ? "border-b-2 border-white" // Active link style
                        : "hover:border-b-2 hover:border-[#ffffffd3]" // Hover style for non-active links
                    } transition-all duration-200`}
                    key={crew.role}
                    onClick={() => setCurrentCrew(crew.role)}
                  >
                    {crew.role}
                  </button>
                ))} */}
              </nav>
            </div>
          )}
          <div className="flex justify-center lg:justify-end rounded-lg overflow-hidden shadow-md">
            <img
              src={currentCrewDetails.images.png}
              loading="lazy"
              alt=""
              className="lg:h-[28rem] h-[15rem] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewHero;
