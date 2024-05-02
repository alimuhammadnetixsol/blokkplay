"use client";
import React, { useState, useEffect } from 'react';
import { setInterval } from 'timers';

const WelcomeScreen1 = () => {
  const styles = {
    box: {
      background: "#221F31", 
      borderRadius: "10px",
    }
  }
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [image, setImage]: any = useState('/images/RANT.png');
  const [game, setGame]: any = useState();
  const [color1, setColor1]: any = useState();
  const [color2, setColor2]: any = useState("#FFFFFF7A");
  const [color3, setColor3]: any = useState("#FFFFFF7A");

  useEffect(() => {
    setImage('/images/RANT.png');
    setGame('VALORANT');
    setColor1("#25DBA8");
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
    setImage('/images/RANT.png');
    setGame('DAYS OF PLAY');
    setColor1("#25DBA8");
    setColor2("#FFFFFF7A");
    setColor3("#FFFFFF7A");
  }

  const hanldeImage2: any = () => {
    setImage('/images/GEN.png');
    setGame('GENSHIN');
    setColor1("#FFFFFF7A");
    setColor2("#25DBA8");
    setColor3("#FFFFFF7A");
  }

  const hanldeImage3: any = () => {
    setImage('/images/GTA.png');
    setGame('GRAND THEFT AUTO');
    setColor1("#FFFFFF7A");
    setColor2("#FFFFFF7A");
    setColor3("#25DBA8");
  }

  const handleImages = () => {
    if (image == '/images/RANT.png'){
      setImage('/images/GTA.png')
    }
    else if (image == '/images/GTA.png'){
      setImage('/images/GEN.png');
    }
    else {
      setImage('/images/RANT.png');
    }
  }

  const smallerScreen = isSmallScreen ? {padding : "2rem 1rem"} : {padding: "2.8rem"} ;
  const firstStyles = isSmallScreen ? { gridTemplateColumns: "1fr" } : { gridTemplateColumns: "1fr 0.65fr" };
  const secondStyles = isSmallScreen ? { gridTemplateColumns: "1fr" } : { gridTemplateColumns: "0.70fr 0.93fr 0.45fr" };
  return (
    <>
        <div className="container"     
        style={{
          ...styles.box,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          minHeight: "431px",
          borderRadius: "10px",
          boxSizing: "border-box",          
        }} onClick={handleImages}>
          <div style={{textAlign: "left", color: "white", fontWeight: "bold", padding: "12px", fontSize: "22px", opacity: "1"}}>GAME BOOST</div>
          <div style={{width: "10px", height: "10px", borderRadius: "50px", background: `${color1}`, marginBottom: "5px", marginLeft: "15px", cursor: "pointer"}} onClick={hanldeImage1}></div>
          <div style={{width: "10px", height: "10px", borderRadius: "50px", background: `${color2}`, marginBottom: "5px", marginLeft: "15px",cursor: "pointer"}} onClick={hanldeImage2}></div>
          <div style={{width: "10px", height: "10px", borderRadius: "50px", background: `${color3}`, marginLeft: "15px", cursor: "pointer"}} onClick={hanldeImage3}></div>
          <div style={{...styles.box, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", width: "100%", minHeight: "85px", position: "absolute", bottom: "0px", padding: "15px 30px", opacity: "0.85"}}>
            <div style={{display: "flex", alignItems: "center", flexWrap: "wrap", gap: "28px", color: "white", fontWeight: "bold"}}> 
              <div style={{fontSize: "22px", color: "white", opacity: 1}}>{game}</div>
              <div style={{fontSize: "16px", color: "#25DBA8", fontWeight: "bold", opacity: "100%"}}>EARN UPTO 35% APY</div>
            </div>
            <div>
              <div style={{display: "flex", alignItems: "center", color: 'white', fontWeight: "bold", cursor: "pointer", fontSize: "22px"}}>PLAY NOW &nbsp; <img style={{display: "inline"}} src="/images/rightarrow.png" alt="" />
            </div>
            </div>
          </div>
        </ div>
    </>
  )
}

export default WelcomeScreen1;
