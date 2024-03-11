import HeroText from "./HeroText";
import bgimgdesk from "../assets/home/background-home-desktop.jpg"
import bgimgtab from "../assets/home/background-home-tablet.jpg";
import bgimgmob from "../assets/home/background-home-mobile.jpg";
import "../App.css";
import { useState, useEffect } from "react";

const Hero = () => {
  // Use state to track the screen size
  const [screenSize, setScreenSize] = useState(getScreenSize());

  // Function to get screen size based on window width
  function getScreenSize() {
    const width = window.innerWidth;
    if (width <= 768) {
      return "mobile";
    } else if (width <= 1024) {
      return "tablet";
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
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine background image based on screen size
  let backgroundImage;
  switch (screenSize) {
    case "mobile":
      backgroundImage = bgimgmob;
      break;
    case "tablet":
      backgroundImage = bgimgtab;
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
        <HeroText />
      </div>
    </div>
  );
}

export default Hero
