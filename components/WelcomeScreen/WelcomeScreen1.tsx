"use client";
import React, { useState, useEffect } from 'react';

const WelcomeScreen1 = () => {
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
    setImage('/images/VALORANT.png');
    setGame('VALORANT');
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
    setImage('/images/Group.png');
    setGame('DAYS OF PLAY');
  }

  const hanldeImage2: any = () => {
    setImage('/images/GEN.png');
    setGame('GENSHIN');
  }

  const hanldeImage3: any = () => {
    setImage('/images/GTA.png');
    setGame('GRAND THEFT AUTO');
  }

  const smallerScreen = isSmallScreen ? {padding : "2rem 1rem"} : {padding: "2.8rem"} ;
  const firstStyles = isSmallScreen ? { gridTemplateColumns: "1fr" } : { gridTemplateColumns: "1fr 0.65fr" };
  const secondStyles = isSmallScreen ? { gridTemplateColumns: "1fr" } : { gridTemplateColumns: "0.70fr 1fr 0.45fr" };
  return (
    <>
        <div style={{
          ...styles.box,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          height: "320px",
          borderRadius: "10px",
          boxSizing: "border-box",
          
        }}>
          <div style={{textAlign: "left", color: "white", fontWeight: "bold", padding: "15px", fontSize: "22px"}}>GAME BOOST</div>
          <div style={{width: "10px", height: "10px", borderRadius: "50px", background: "red", marginBottom: "5px", marginLeft: "15px", cursor: "pointer"}} onClick={hanldeImage1}></div>
          <div style={{width: "10px", height: "10px", borderRadius: "50px", background: "green", marginBottom: "5px", marginLeft: "15px",cursor: "pointer"}} onClick={hanldeImage2}></div>
          <div style={{width: "10px", height: "10px", borderRadius: "50px", background: "yellow", marginLeft: "15px", cursor: "pointer"}} onClick={hanldeImage3}></div>
          <div style={{...styles.box, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", width: "100%", position: "absolute", bottom: "0px", padding: "15px 30px"}}>
            <div style={{display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", color: "white", fontWeight: "bold"}}> 
              <div style={{fontSize: "22px"}}>{game}</div>
              <div style={{fontSize: "13px", color: "#25DBA8", fontWeight: "bold"}}>EARN UPTO 35% APY</div>
            </div>
            <div>
              <div style={{color: 'white', fontWeight: "bold", cursor: "pointer", fontSize: "22px"}}>PLAY NOW <span style={{fontSize: "20px", color: "#25DBA8"}}>&gt;</span></div>
            </div>
          </div>
        </ div>
    </>
  )
}

export default WelcomeScreen1;
