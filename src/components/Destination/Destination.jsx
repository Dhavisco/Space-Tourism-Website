import DestinationHero from "./DestinationHero";
import bgimgdesk from "../../assets/destination/background-destination-desktop.jpg";
import bgimgmob from "../../assets/destination/background-destination-mobile.jpg";
import "../../App.css";
import { useState, useEffect } from "react";

const Destination = () => {
  // Use state to track the screen size
  const [screenSize, setScreenSize] = useState(getScreenSize());
    const [loading, setLoading] = useState(true);

  // Function to get screen size based on window width
  function getScreenSize() {
    const width = window.innerWidth;
    if (width <= 768) {
      return "mobile";
    } else {
      return "desktop";
    }
  }

  // Event listener to update screen size state
  const handleResize = () => {
    setScreenSize(getScreenSize());
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener("resize", handleResize);
     const timer = setTimeout(() => setLoading(false), 1000);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  });

  // Determine background image based on screen size
  let backgroundImage;
  switch (screenSize) {
    case "mobile":
      backgroundImage = bgimgmob;
      break;
    default:
      backgroundImage = bgimgdesk;
      break;
  }

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <DestinationHero />
      </div>
    </div>
  );
};

export default Destination
