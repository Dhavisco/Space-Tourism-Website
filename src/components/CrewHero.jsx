import { useState } from "react";
import bgimg from "../assets/crew/background-crew-desktop.jpg";
import data from "./store/data.json";
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
    <div className="hero" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="text-white pt-[5rem] grid lg:grid-cols-1 gap-3 column w-[100%] h-[100vh] font-sans items-center content-center px-[10rem]">
        <div className="uppercase font-sans tracking-widest font-semibold text-[#ffffffe1] text-2xl">
          02 <span className="ml-2">Meet your crew</span>
        </div>
        <div className="grid grid-cols-2 justify-center items-center">
          {currentCrewDetails && (
            <div className="flex flex-col lg:gap-5">
              <div className="uppercase font-[Bellefair] text-3xl tracking-wide">
                {currentCrewDetails.role}
              </div>
              <div className="uppercase font-[Bellefair] text-5xl tracking-[0.3rem]">
                {currentCrewDetails.name}
              </div>
              <div className=" w-6/7 font-light text-[#ffffffe0] text-justify font-sans">
                {currentCrewDetails.bio}
              </div>
              <nav>
                <div className="dots flex items-center gap-3">
                  {crew.map((_, index) => (
                    <div
                      className={`dot ${
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
          <div className="flex justify-end rounded-lg overflow-hidden shadow-md">
            <img
              src={currentCrewDetails.images.png}
              alt=""
              className="h-[28rem] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewHero;
