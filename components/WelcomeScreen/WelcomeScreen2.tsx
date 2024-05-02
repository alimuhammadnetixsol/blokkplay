import React from 'react';
import Image from 'next/image';

const WelcomeScreen2 = () => {
    const styles = {
        box: {
          background: "#221F31", 
          borderRadius: "10px",
          opacity: 0.85 
        }
      }
  return (
    <>
        <div style={{...styles.box}}>
            <div style={{textAlign: "left", paddingTop: "15px", paddingLeft: "20px", color: "#25DBA8", fontWeight: "bold", marginBottom: "15px", fontSize: "24px"}}>LAST PLAYED</div>
            {/* FIRST LAST PLAYED GAME */}
              <div style={{display: "flex", flexWrap: "wrap", gap: "15px", paddingLeft: "15px", marginBottom: "8px"}}>
                <div style={{borderRadius: "20px", overflow: "hidden"}}> 
                  {/* <img src="/images/fort.png" alt="FORTNITE" /> */}
                  <Image src="/images/fort.png" alt='Fortnite' width={180} height={100}></Image>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "5px", flexDirection: "column", alignItems: "start"}}>
                  <div style={{fontSize: "20px", fontStyle: "italic", color: "white", fontWeight: "bold"}}>FORTNITE</div>
                  <div style={{fontSize: "14px", color: "#D8D8D8"}}>FPS | BATTLEROYALE</div>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                      <div style={{
                        cursor: "pointer",
                        display: "flex", flexWrap: "wrap", 
                        alignItems: "center",
                        padding: "6px 35px 6px 35px",
                        background: "#37334A", // Background color
                        borderRadius: "12px", // Border radius
                        opacity: 1,
                        fontSize: "0.7rem",
                        color: "white" // Opacity
                      }}>
                        PLAY NOW
                      </div>
                      <div style={{
                        border: "2px solid #41477E",
                        cursor: "pointer",
                        padding: "6px 20px 6px 20px",
                        borderRadius: "12px", // Border radius
                        opacity: 1,
                        fontSize: "0.7rem",
                        color: "white" // Opacity
                      }}><span style={{color: '#25DBA8'}}>10</span> hrs played</div>
                  </div>
                </div>
              </div>
            {/* FIRST LAST PLAYED GAME */}
            {/* SECOND LAST PLAYED GAME */}
            <div style={{display: "flex", flexWrap: "wrap", gap: "15px", paddingTop: "10px", paddingLeft: "15px", marginBottom: "10px"}}>
                <div style={{borderRadius: "20px", overflow: "hidden"}}> 
                <Image src="/images/VAL.png" alt='Fortnite' width={180} height={100}></Image>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "5px", flexDirection: "column", alignItems: "start"}}>
                  <div style={{fontSize: "20px", fontStyle: "italic", color: "white", fontWeight: "bold"}}>VALORANT</div>
                  <div style={{fontSize: "14px", color: "#D8D8D8"}}>FPS | BATTLEROYALE</div>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                      <div style={{
                        cursor: "pointer",
                        display: "flex", flexWrap: "wrap", 
                        alignItems: "center",
                        padding: "6px 35px 6px 35px",
                        background: "#37334A", // Background color
                        borderRadius: "12px", // Border radius
                        opacity: 1,
                        fontSize: "0.7rem",
                        color: "white" // Opacity
                      }}>
                        PLAY NOW
                      </div>
                      <div style={{
                        border: "2px solid #41477E",
                        cursor: "pointer",
                        padding: "6px 20px 6px 20px",
                        borderRadius: "12px", // Border radius
                        opacity: 1,
                        fontSize: "0.7rem",
                        color: "white" // Opacity
                      }}><span style={{color: '#25DBA8'}}>10</span> hrs played</div>
                  </div>
                </div>
              </div>
            {/* SECOND LAST PLAYED GAME */}
          </div>
    </>
  )
}

export default WelcomeScreen2;