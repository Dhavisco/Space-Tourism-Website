import { useState } from "react";
import bgimg from "../assets/destination/background-destination-desktop.jpg";
import data from "./store/data.json";

const DestinatonHero = () => {
  const [currentDestination, setCurrentDestination] = useState("Moon");
  const destinations = data.destinations;
  // Find the current destination object
  const currentDestinationDetails = destinations.find(
    (destination) => destination.name === currentDestination
  );

  //function to change stylE



  return (
    <div className="hero" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="text-white pt-[4rem] grid lg:grid-cols-1 gap-10 column w-[100%] h-[100vh] font-sans items-center content-center px-[8rem]">
        <div className="uppercase font-sans tracking-widest  text-[#ffffffe1]">
          01 Pick your destination
        </div>
        <div className="grid grid-cols-2 justify-center items-center">
          <div className="w-2/3">
            <img
              src={currentDestinationDetails.images.png}
              alt=""
              className="h-[23rem] w-auto"
            />
          </div>
          {currentDestinationDetails && (
            <div className="flex flex-col lg:gap-6">
              <nav>
                {destinations.map((destination) => (
                  <button
                    className={`mx-4 py-2 font-light hover:font-normal ${
                      currentDestination === destination.name
                        ? "border-b-2 border-white" // Active link style
                        : "hover:border-b-2 hover:border-[#ffffffd3]" // Hover style for non-active links
                    } transition-all duration-200`}
                    key={destination.name}
                    onClick={() => setCurrentDestination(destination.name)}
                  >
                    {destination.name}
                  </button>
                ))}
              </nav>
              <div className="font-light uppercase font-serif text-8xl tracking-[0.8rem]">
                {currentDestinationDetails.name}
              </div>
              <div className=" w-2/3 font-light text-[#ffffffe0] text-justify leading-relaxed font-sans">
                {currentDestinationDetails.description}
              </div>
              <div className="">
                <hr className="border-t border-white opacity-40 w-[95%]" />
              </div>
              <div className="flex gap-28 items-center">
                <div>
                  <p className="text-sm font-light">AVG. DISTANCE</p>
                  <h1 className="text-4xl uppercase">
                    {currentDestinationDetails.distance}
                  </h1>
                </div>
                <div className="">
                  <p className="text-sm font-sans font-light">
                    EST. TRAVEL TIME
                  </p>
                  <h1 className="text-4xl font-serif uppercase font-extralight">
                    {currentDestinationDetails.travel}
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinatonHero;
