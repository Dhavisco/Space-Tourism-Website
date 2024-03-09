import HeroText from "./HeroText";
import bgimg from "../assets/home/background-home-desktop.jpg"
import "../App.css";

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bgimg})` }}>
      <div>
        <HeroText />
      </div>
    </div>
  );
}

export default Hero
