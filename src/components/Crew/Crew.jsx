import CrewHero from "./CrewHero"
import bgimgdesk from "../../assets/crew/background-crew-desktop.jpg";
import bgimgtab from "../../assets/crew/background-crew-tablet.jpg";
import bgimgmob from "../../assets/crew/background-crew-mobile.jpg";
import "../../App.css";
import { useState, useEffect } from "react";
import Loading from "../../Loading";

const Crew = () => {
  // Use state to track the screen size
  const [screenSize, setScreenSize] = useState(getScreenSize());
  const [loading, setLoading] = useState(true);

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
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  });

  if (loading) {
    return <Loading/>;
  }

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
        <CrewHero />
      </div>
    </div>
  );
};

export default Crew
