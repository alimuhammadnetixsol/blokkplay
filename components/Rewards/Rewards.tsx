"use client";
import React, { useState, useEffect } from 'react';
import Rewards1 from './Rewards1';
import Rewards2 from './Rewards2';
import Rewards3 from './Rewards3';
import Rewards4 from './Rewards4';
import Rewards5 from './Rewards5';


const Rewards = () => {
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
  const firstStyles = isSmallScreen ? { gridTemplateColumns: "1fr" } : { gridTemplateColumns: "1fr 0.60fr" };
  const secondStyles = isSmallScreen ? { gridTemplateColumns: "1fr" } : { gridTemplateColumns: "1fr 0.48fr 0.48fr" };

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
            <Rewards1 />
            {/* First */}
            {/* Second */}
            <Rewards2 />
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
            <Rewards3 />
            {/* Third */}
            {/* Fourth */}
            <Rewards4 />
            {/* Fourth */}
            {/* Fifth */}
            <Rewards5 />
            {/* Fifth */}
        </div>
    </div>
  );
};

export default Rewards;
