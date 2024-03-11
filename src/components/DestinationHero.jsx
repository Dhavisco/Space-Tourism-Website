import { useState } from "react";
import data from "./store/data.json";

const DestinationHero = () => {
  const [currentDestination, setCurrentDestination] = useState("Moon");
  const destinations = data.destinations;
  // Find the current destination object
  const currentDestinationDetails = destinations.find(
    (destination) => destination.name === currentDestination
  );

  //function to change stylE



  return (
    <div className="hero">
      <div className="text-white lg:pt-[5rem] grid lg:grid-cols-1 gap-4 column w-[100%] h-[100vh] font-sans items-center content-center lg:px-[6rem]">
        <div className="uppercase text-lg lg:text-2xl font-sans tracking-widest font-semibold text-[#ffffffe1]">
          01 <span className="ml-2 text-white">Pick your destination</span>
        </div>
        <div className="grid lg:grid-cols-2 justify-center items-center">
          <div className="w-2/3">
            <img
              src={currentDestinationDetails.images.png}
              alt=""
              className="h-[6rem] lg:h-[20rem] w-auto"
            />
          </div>
          {currentDestinationDetails && (
            <div className="flex flex-col gap-4 lg:gap-3">
              <nav>
                {destinations.map((destination) => (
                  <button
                    className={`lg:mx-4 mx-2 py-2 font-light hover:font-normal ${
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
              <div className="font-light uppercase font-serif text-6xl lg:text-8xl tracking-[0.8rem]">
                {currentDestinationDetails.name}
              </div>
              <div className=" lg:w-4/5 w-6/7 md:w-4/5 font-light text-sm lg:text-base text-[#ffffffe0] text-justify lg:leading-relaxed font-sans">
                {currentDestinationDetails.description}
              </div>
              <div className="">
                <hr className="border-t border-white opacity-40 w-[95%]" />
              </div>
              <div className="flex gap-8 lg:justify-between md:gap-20 lg:items-start items-center">
                <div>
                  <p className="lg:text-sm text-xs font-light">AVG. DISTANCE</p>
                  <h1 className="lg:text-4xl text-2xl uppercase">
                    {currentDestinationDetails.distance}
                  </h1>
                </div>
                <div className="">
                  <p className="lg:text-sm text-xs font-sans font-light">
                    EST. TRAVEL TIME
                  </p>
                  <h1 className="lg:text-4xl text-2xl font-serif uppercase font-extralight">
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

export default DestinationHero;
