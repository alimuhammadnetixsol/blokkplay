"use client";
import React, { useState, useEffect } from 'react';
import WelcomeScreen1 from './WelcomeScreen1';
import WelcomeScreen2 from './WelcomeScreen2';
import WelcomeScreen3 from './WelcomeScreen3';
import WelcomeScreen4 from './WelcomeScreen4';
import WelcomeScreen5 from './WelcomeScreen5';


const WelcomeScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const smallerScreen = isSmallScreen ? {padding : "2rem 1rem"} : {padding: "1.6rem"} ;
  const firstStyles = isSmallScreen ? { gridTemplateColumns: "1fr" } : { gridTemplateColumns: "1fr 0.65fr" };
  const secondStyles = isSmallScreen ? { gridTemplateColumns: "1fr" } : { gridTemplateColumns: "0.56fr 0.93fr 0.47fr" };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url('/images/blokkplay_PLUS.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "20px",
        ...smallerScreen,
        boxSizing: "border-box"
      }}
    >
         <div
          style={{
            display: "grid",
            gridTemplateRows: "auto auto",
            gap: "10px",
            ...firstStyles,
          }}
        >
            {/* First */}
            <WelcomeScreen1 />
            {/* First */}
            {/* Second */}
            <WelcomeScreen2 />
            {/* Second */}
        </div>
        <div
          style={{
            display: "grid",
            gap: "10px",
            ...secondStyles
          }}
        >
            {/* Third */}
            <WelcomeScreen3 />
            {/* Third */}
            {/* Fourth */}
            <WelcomeScreen4 />
            {/* Fourth */}
            {/* Fifth */}
            <WelcomeScreen5 />
            {/* Fifth */}
        </div>
    </div>
  );
};

export default WelcomeScreen;
