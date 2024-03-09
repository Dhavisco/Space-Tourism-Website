import { useState } from "react";
import bgimg from "../assets/destination/background-destination-desktop.jpg"
import img from "../assets/destination/image-moon.png"
import data from "./store/data.json"

const DestinatonHero = () => {
  const [currentDestination, setCurrentDestination] = useState("Moon");
  const destinations = data.destinations;
  // Find the current destination object
  const currentDestinationDetails = destinations.find(
    (destination) => destination.name === currentDestination
);

  return (
    <div className="hero" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="text-white grid lg:grid-cols-2 gap-8 column w-[100%] h-[100vh] font-sans items-center  content-center px-[8rem]">
        <div className="flex flex-col justify-center gap-8 mt-[10rem]">
          <div className="uppercase font-sans tracking-widest text-[#ffffffe1]">
            01 Pick your destination
          </div>

          <nav>
            {destinations.map((destination) => (
              <button
                className="mx-4 hover:font-bold"
                key={destination.name}
                onClick={() => setCurrentDestination(destination.name)}
              >
                {destination.name}
              </button>
            ))}
          </nav>
          {currentDestinationDetails && (
            <>
              <div className="">
                <img
                  src={(`${currentDestinationDetails.images.png}`)}
                  alt=""
                  className="h-10 w-10"
                />
              </div>
              <div className="font-light uppercase font-serif text-8xl tracking-[0.8rem]">
                {currentDestinationDetails.name}
              </div>
              <div className="tracking-wide w-5/6 font-light text-[#ffffffe0] text-justify leading-relaxed font-sans">
                {currentDestinationDetails.description}
              </div>
              <div className="">
                <hr className="border-t border-white opacity-40 w-[95%]" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DestinatonHero
