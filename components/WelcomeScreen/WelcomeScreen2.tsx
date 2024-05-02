import React from 'react';
import Image from 'next/image';

const WelcomeScreen2 = () => {
    const styles = {
        box: {
          background: "rgba(34, 31, 49, 0.85)", 
          borderRadius: "10px",
        }
      }
  return (
    <>
        <div style={{...styles.box, minHeight: "431px", paddingTop: "20px", paddingLeft: "30px", paddingRight: "30px"}}>
            <div style={{textAlign: "left", color: "#25DBA8", fontWeight: "bold", marginBottom: "30px", fontSize: "24px", opacity: "100%"}}>LAST PLAYED</div>
            {/* FIRST LAST PLAYED GAME */}
              <div style={{display: "flex", width: "100%", flexWrap: "wrap", gap: "30px", marginBottom: "25px"}}>
                <div style={{borderRadius: "20px", overflow: "hidden"}}> 
                  {/* <img src="/images/fort.png" alt="FORTNITE" /> */}
                  <Image src="/images/fort.png" alt='Fortnite' width={239} height={137}></Image>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "5px", flexDirection: "column", alignItems: "start"}}>
                  <div style={{fontSize: "30px", fontStyle: "italic", color: "white", fontWeight: "bold", letterSpacing: "1px"}}>FORTNITE</div>
                  <div style={{fontSize: "18px", color: "#D8D8D8"}}>FPS | BATTLEROYALE</div>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                      <div style={{
                        width: "196px",
                        height: "43px",
                        cursor: "pointer",
                        display: "flex", flexWrap: "wrap", 
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "12px",
                        fontWeight: "bold", // Border radius
                        opacity: 1,
                        fontSize: "16px",
                        color: "#25DBA8", // Opacity
                        background: "rgba(55, 51, 74, 1) 0% 0% no-repeat padding-box"
                      }}>
                        PLAY NOW
                      </div>
                      <div style={{
                        width: "146px",
                        display: "flex",
                        flexWrap: 'wrap',
                        alignItems: "center",
                        justifyContent: "center",
                        height: "43px",
                        border: "2px solid #41477E",
                        cursor: "pointer",
                        borderRadius: "12px", // Border radius
                        opacity: 1,
                        fontSize: "12px",
                        color: "white", // Opacity
                        fontWeight: "bold"
                      }}><span style={{color: '#25DBA8'}}>10 &nbsp;</span>hrs played</div>
                  </div>
                </div>
              </div>
            {/* FIRST LAST PLAYED GAME */}
            {/* SECOND LAST PLAYED GAME */}
            <div style={{width: "100%", display: "flex", flexWrap: "wrap", gap: "30px", paddingTop: "10px", marginBottom: "10px"}}>
                <div style={{borderRadius: "20px", overflow: "hidden"}}> 
                <Image src="/images/VAL.png" alt='Fortnite' width={239} height={137}></Image>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "5px", flexDirection: "column", alignItems: "start"}}>
                    <div style={{fontSize: "30px", fontStyle: "italic", color: "white", fontWeight: "bold", letterSpacing: "1px"}}>VALORANT</div>
                    <div style={{fontSize: "18px", color: "#D8D8D8", marginBottom: "13px"}}>FPS | BATTLEROYALE</div>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                      <div style={{
                        width: "196px",
                        height: "43px",
                        cursor: "pointer",
                        display: "flex", flexWrap: "wrap", 
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "12px",
                        fontWeight: "bold", // Border radius
                        opacity: 1,
                        fontSize: "16px",
                        color: "#25DBA8", // Opacity
                        background: "rgba(55, 51, 74, 1) 0% 0% no-repeat padding-box"
                      }}>
                        PLAY NOW
                      </div>
                      <div style={{
                        width: "146px",
                        display: "flex",
                        flexWrap: 'wrap',
                        alignItems: "center",
                        justifyContent: "center",
                        height: "43px",
                        border: "2px solid #41477E",
                        cursor: "pointer",
                        borderRadius: "12px", // Border radius
                        opacity: 1,
                        fontSize: "12px",
                        color: "white", // Opacity
                        fontWeight: "bold"
                      }}><span style={{color: '#25DBA8'}}>10 &nbsp;</span>hrs played</div>
                  </div>
                </div>
              </div>
            {/* SECOND LAST PLAYED GAME */}
          </div>
    </>
  )
}

export default WelcomeScreen2;