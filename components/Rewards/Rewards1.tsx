"use client";
import React, { useState, useEffect } from 'react';
import { Luckiest_Guy } from "next/font/google";

const lucky = Luckiest_Guy ({
  subsets: ["latin"],
  weight: [ "400" ]
})

const Rewards1 = () => {
  const styles = {
    box: {
      background: "#221F31", 
      borderRadius: "10px",
      opacity: 0.85 
    }
  }
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [image, setImage]: any = useState();
  const [game, setGame]: any = useState();

  useEffect(() => {
    setImage('/images/GROUP.png');
    setGame('DAYS OF PLAY');
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const hanldeImage1: any = () => {
    setImage('/images/VALORANT.png');
    setGame('VALORANT');
  }

  const hanldeImage2: any = () => {
    setImage('/images/GEN.png');
    setGame('GENSHIN');
  }

  const hanldeImage3: any = () => {
    setImage('/images/GTA.png');
    setGame('GRAND THEFT AUTO');
  }

  return (
    <>
        <div style={{
          ...styles.box,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          minHeight: "320px",
          borderRadius: "10px",
          boxSizing: "border-box",
          
        }}>
          <div style={{textAlign: "left", color: "white", fontWeight: "bold", padding: "15px", fontSize: "22px"}}>2X BOOST</div>
          <div style={{width: "10px", height: "10px", borderRadius: "50px", background: "#25DBA8", marginBottom: "5px", marginLeft: "15px", cursor: "pointer"}} onClick={hanldeImage1}></div>
          <div style={{width: "10px", height: "10px", borderRadius: "50px", background: "#FFFFFF7A", marginBottom: "5px", marginLeft: "15px", cursor: "pointer"}} onClick={hanldeImage2}></div>
          <div style={{width: "10px", height: "10px", borderRadius: "50px", background: "#FFFFFF7A", marginLeft: "15px", cursor: "pointer"}} onClick={hanldeImage3}></div>
          <div className={lucky.className} style={{lineHeight: "2.2rem", fontSize: "40px", textAlign: "left", color: "#FFFFFF", fontWeight: "bold", padding: "15px", letterSpacing: "3px", paddingLeft: "3.8rem"}}>DOUBLE<br />REWARDS</div>
          <div style={{...styles.box, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", width: "100%", position: "absolute", bottom: "0px", padding: "15px 30px"}}>
            <div style={{display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", color: "white", fontWeight: "bold"}}> 
              <div style={{fontSize: "22px"}}>{game}</div>
              <div style={{fontSize: "13px", color: "#25DBA8", fontWeight: "bold"}}>2X MORE REWARDS</div>
            </div>
            <div>
              <div style={{color: 'white', fontWeight: "bold", cursor: "pointer", fontSize: "22px"}}>PLAY NOW <span style={{fontSize: "20px", color: "#25DBA8"}}>&gt;</span></div>
            </div>
          </div>
        </ div>
    </>
  )
}

export default Rewards1;
