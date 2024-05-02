import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ProgressBar from "@ramonak/react-progress-bar";

const Rewards2 = () => {
    const styles = {
        box: {
          background: "#221F31", 
          borderRadius: "10px",
          opacity: 0.85 
        }
      }
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
    
      const smallerScreen: any = isSmallScreen ? {flexDirection: "column"} : {flexDirection: "row"};
  return (
    <>
        <div style={{ ...styles.box, paddingLeft: "20px", paddingTop: "15px", paddingRight: "15px"}}>
            <div style={{display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "center", justifyContent: "start", marginBottom: "10px"}}>
            <div style={{textAlign: "left", color: "#25DBA8", fontWeight: "bold", fontSize: "24px", textTransform: "uppercase"}}>Season 2</div>
            <div style={{textTransform: "uppercase", color: "#FFFFFF", fontSize: "12px", fontWeight: "bold"}}>ends 20 jun</div>
            </div>
            <div style={{color: "#D8D8D8", fontSize: "14px", letterSpacing: "0.5px"}}>Play supported games and earn rewards.</div>
            <div style={{textTransform: "uppercase", paddingTop: "15px", color: "#FFF7F7", fontSize: "16px", fontWeight: "bold", letterSpacing: "1px", marginBottom: "10px"}}>level 03</div>
            <div style={{display: "grid", gridTemplateColumns: "1fr 0.4fr", alignItems: "center", gap: "16px", marginBottom: "10px"}}>
                <ProgressBar width='full' completed={10} bgColor='#25DBA8' baseBgColor='#120F1F' height='14px' isLabelVisible={false} />
                <div style={{fontSize: "14px", color: "#D8D8D8"}}>1500 / 4000 exp</div>
            </div>
            <div style={{...smallerScreen, display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px"}}>
                <button style={{width: "100%", background: "#37334A", color: "#25DBA8", padding: "6.5px 0px", fontSize: "12px", borderRadius: "12px"}}>ACTIVATE PREMIUM</button>
                <button style={{width: "100%", background: "#37334A", color: "#25DBA8", padding: "6.5px 0px", fontSize: "12px", borderRadius: "12px"}}>FULL VIEW</button>
            </div>
            <div style={{color: "#D8D8D8", marginBottom: "10px"}}>ACTIVE BOOST REWARDS</div>
            <div style={{...smallerScreen, display: "flex", alignItems: "stretch", gap: '5px', marginBottom: "10px"}}>
                <div style={{flex: "1"}}>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "7.5px", background: "#120F1F", opacity: "1", borderRadius: "20px"}}>
                            <div style={{width:"full", borderRadius: "20px", overflow: "hidden"}}> 
                                <Image style={{boxSizing: "border-box"}} src="/images/coins.png" alt='Fortnite' width={60} height={60}></Image>
                            </div>
                            <div style={{width: "full", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap", padding: "8px 10px 5px 5px"}}>
                            <div style={{color: "white", fontWeight: "bold", marginBottom: "5px", fontSize: "14px"}}>+10% BLK$</div>
                            <div style={{display: "flex", flexWrap: "wrap", gap: "7px" }}>
                                <div style={{fontSize: "10px", color: "#8287BC", fontWeight: "bold", fontStyle: "italic"}}>30H 24M</div>
                            </div>
                            </div>
                    </div>
                </div>
                <div style={{flex: "1", display: "flex", flexDirection: "row", gap: "10px", color: "#41499A"}}>
                        <div style={{flex: "1", display: 'flex', alignItems: "center", justifyContent: 'center', background: "#120F1F", borderRadius: "20px", fontSize: "40px", cursor: "pointer"}}>+</div>
                        <div style={{flex: "1", display: 'flex', alignItems: "center", justifyContent: 'center', background: "#120F1F", borderRadius: "20px", fontSize: "40px", cursor: "pointer"}}>+</div>
                        <div style={{flex: "1", display: 'flex', alignItems: "center", justifyContent: 'center', background: "#120F1F", borderRadius: "20px", fontSize: "40px", cursor: "pointer"}}>+</div>
                </div>
    </div>
    </div>
    </>
  )
}

export default Rewards2;