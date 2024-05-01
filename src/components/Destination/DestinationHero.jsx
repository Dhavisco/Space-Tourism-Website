import { useEffect, useState } from "react";
import data from "../store/data.json";
import "../../App.css";

const DestinationHero = () => {
  const [currentDestination, setCurrentDestination] = useState("Moon");
  const destinations = data.destinations;
  // Find the current destination object
  const currentDestinationDetails = destinations.find(
    (destination) => destination.name === currentDestination
  );

  //Auto  Scroll Animation
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      const currentIndex = destinations.findIndex(d => d.name === currentDestination);
      const nextIndex = (currentIndex + 1) % destinations.length;
      setCurrentDestination(destinations[nextIndex].name);
    }, 10000); // changes every 3 seconds

    return () => clearInterval(intervalId); //clear intercal on component unmount

  }, [currentDestination, destinations]); // dependency



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
              loading="lazy"
              alt=""
              className="h-[6rem] lg:h-[20rem] w-auto"
            />
          </div>
          {currentDestinationDetails && (
            <div className="flex flex-col gap-4 lg:gap-3">
              <nav>
                {destinations.map((destination) => (
                  <button
                    className={`lg:mx-4 mx-2 py-[0.4rem] font-light tracking-[0.1rem] ${
                      currentDestination === destination.name
                        ? "border-b-4 font-normal border-yellow-700" // Active link style
                        : "" // Hover style for non-active links
                    } transition-all duration-200`}
                    key={destination.name}
                    onClick={() => setCurrentDestination(destination.name)}
                  >
                    {destination.name}
                  </button>
                ))}
              </nav>
              <div className="dname font-light uppercase font-serif sm:text-6xl lg:text-8xl tracking-[0.7rem]">
                {currentDestinationDetails.name}
              </div>
              <div className="d-desc lg:w-4/5 w-6/7 md:w-4/5 font-light text-sm lg:text-base text-[#ffffffe0] text-justify lg:leading-relaxed font-sans">
                {currentDestinationDetails.description}
              </div>
              <div className="">
                <hr className="border-t border-white opacity-40 w-[95%]" />
              </div>
              <div className="flex gap-8 lg:justify-between md:gap-20 lg:items-start items-center">
                <div>
                  <p className="lg:text-sm text-xs font-light">AVG. DISTANCE</p>
                  <h1 className="lg:text-4xl text-xl tracking-[0.1rem] uppercase">
                    {currentDestinationDetails.distance}
                  </h1>
                </div>
                <div className="">
                  <p className="lg:text-sm text-xs font-sans font-light">
                    EST. TRAVEL TIME
                  </p>
                  <h1 className="lg:text-4xl text-xl font-serif uppercase tracking-[0.1rem] font-extralight">
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
