"use client";
import Navbar from "../Navbar/Navbar";
import TypeWriter from "./TypeWriter";

const Hero: React.FC = () => {
  return (
    <div className="h-[1080px] bg_img">
      <div className="h-full max-w-screen-lg">
        <Navbar />
        <TypeWriter />
      </div>
    </div>
  );
};

export default Hero;
