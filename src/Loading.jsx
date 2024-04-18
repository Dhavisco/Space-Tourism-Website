import { RiLoader2Fill } from "react-icons/ri";
import img from "../public/assets/destination/image-moon.png";

function Loading() {
  return (
    <div
      role="status"
      className="flex items-center place-content-center bg-black h-screen w-screen relative"
    >
      <div className="flex-1 text-center pt-2 justify-center items-center flex relative flex-col">
        <img src={img} alt="loader" loading="lazy" className="w-[20%] h-auto pb-2" />{" "}
        <RiLoader2Fill className="text-white mt-2 animate-spin" />
        <p
          className="lg:text-4xl mt-1 text-white text-2xl  text-center tracking-wide animate-pulse"
          style={{ fontFamily: "Dancing Script" }}
        >
          LOADING...
        </p>
      </div>
    </div>
  );
}

export default Loading;
