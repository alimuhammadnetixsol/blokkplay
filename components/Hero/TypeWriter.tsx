import React from "react";
import Typewriter from "typewriter-effect";
import desktop from "@/public/navbar-assets/desktop-icon.svg";
import Image from "next/image";
const TypeWriter: React.FC = () => {
  const buttonHoverHandler = () => {
    const ele = document.getElementById("Path_645");
  };
  return (
    <div className="text-white z-50 h-screen flex  flex-col items-start justify-center">
      <div className="h-screen md:h-[500px] w-full uppercase text-[30px] text-center leading-[32px] md:text-[70px] lg:w-1/2 md:leading-[75px] font-medium flex justify-center items-center flex-col pt-10">
        <Typewriter
          options={{
            strings: ["Earn to play<br /> the games <br />you love!"],
            autoStart: true,
            loop: true,
            delay: 300,
          }}
        />
        {/* buttons */}
      </div>
      <div className="flex flex-col md:justify-start md:items-start justify-center items-center w-full gap-6 mt-10">
        <button className="hover:bg-[#25dba8] uppercase flex justify-center gap-4 items-center h-[43px] w-[241px] btn_border text-[14px] font-bold button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.6"
            height="18.198"
            viewBox="0 0 24.6 18.198"
            className="svg-icon"
          >
            <path
              id="Path_645"
              data-name="Path 645"
              d="M118.274,1.4H96.534a1.43,1.43,0,0,0-1.43,1.43v11.9a1.43,1.43,0,0,0,1.43,1.43h9.332l-.893,2.122h-1.721a1.317,1.317,0,0,0-1.317,1.316h10.937a1.316,1.316,0,0,0-1.316-1.316h-1.721l-.893-2.122h9.332a1.43,1.43,0,0,0,1.43-1.43V2.835a1.43,1.43,0,0,0-1.43-1.43m.423,12.933a.733.733,0,0,1-.733.733H96.844a.733.733,0,0,1-.733-.733V3.232a.733.733,0,0,1,.733-.733h21.12a.733.733,0,0,1,.733.733Z"
              transform="translate(-95.104 -1.405)"
              fill="currentColor"
            />
          </svg>
          download desktop
        </button>
        <button className="hover:bg-[#25dba8] uppercase flex justify-center gap-4 items-center h-[43px] w-[241px] btn_border text-[14px] font-bold button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.895"
            height="23.158"
            viewBox="0 0 13.895 23.158"
            className="svg-icon"
          >
            <path
              id="Path_646"
              data-name="Path 646"
              d="M11.655,0H2.24A2.24,2.24,0,0,0,0,2.24V20.918a2.24,2.24,0,0,0,2.24,2.24h9.414a2.24,2.24,0,0,0,2.24-2.24V2.24A2.24,2.24,0,0,0,11.655,0m1.164,20.693a1.23,1.23,0,0,1-1.23,1.23H2.306a1.23,1.23,0,0,1-1.23-1.23V2.465a1.23,1.23,0,0,1,1.23-1.23H4.335v.658a.854.854,0,0,0,.854.854H8.707a.854.854,0,0,0,.854-.854V1.235h2.029a1.23,1.23,0,0,1,1.23,1.23Z"
              fill="#25dba8"
            />
          </svg>
          download mobile
        </button>
      </div>
    </div>
  );
};

export default TypeWriter;
