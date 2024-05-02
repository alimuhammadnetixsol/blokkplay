import React from 'react';
import Chart from '../Chart/Chart';

const WelcomeScreen3 = () => {
    const styles = {
        box: {
          background: "#221F31", 
          borderRadius: "10px",
          opacity: 0.85 
        }
      }
    return (
    <>
         <div style={{...styles.box, paddingTop: "10px", paddingLeft: "25px",textAlign: "left"}}>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "18px", fontWeight: "bold"}}>
              <div style={{textAlign: "left", color: "#25DBA8", fontWeight: "bold", fontSize: "24px"}}>
                ACHEIVEMENTS
              </div>
              <div style={{color: "#25DBA8", background: "#37334A", borderRadius: "50px", opacity: 1, fontSize: "9px", padding: "5px 8px", fontWeight: "bold", display: "flex", alignItems: "center", cursor: "pointer"}}>SEE ALL +</div>
            </div>
            <div style={{color: "#D8D8D8", marginBottom: "3px", fontWeight: "bold", fontSize: "18px"}}>MOST PLAYED</div>
            <div style={{display: "flex",gap: "30px", flexWrap: "wrap", alignItems: "center"}}>
              <div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "10px"}}>
                  <div style={{width: "12px", height: "12px", borderRadius: "50px", background: "#F32971"}}></div>
                  <div style={{color: "white"}}>Valorant</div>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "10px"}}>
                  <div style={{width: "12px", height: "12px", borderRadius: "50px", background: "#EE953B"}}></div>
                  <div style={{color: "white"}}>Fortnite</div>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "10px"}}>
                  <div style={{width: "12px", height: "12px", borderRadius: "50px", background: "#25DBA8"}}></div>
                  <div style={{color: "white"}}>FIFA 24</div>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "10px"}}>
                  <div style={{width: "12px", height: "12px", borderRadius: "50px", background: "#16516B"}}></div>
                  <div style={{color: "white"}}>Other</div>
                </div>
                
              </div>
              <div> <Chart /> </div>
            </div>
            <div style={{color: "#D8D8D8", fontWeight: "bold", marginBottom: "8px"}}>MOST REWARDED</div>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginBottom: "8px"}}>
              <div style={{color: "white"}}>Valorant</div>
              <div style={{color: "white"}}>Fortnite</div>
              <div style={{color: "white"}}>FIFA 24</div>
            </div>

            <div style={{display: "flex", flexDirection: "column", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginBottom: "8px"}}>
              <div style={{display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center"}}>
                <div style={{width: "8.8rem", padding: "10px 10px", background: "#F32971",   borderRadius: "0 5px 5px 0" , boxShadow: "0px 0px 8px #F32971"}}></div>
                <div style={{color: "#8287BC", fontSize: "0.9rem"}}>39.9 BLK$</div>
              </div>
              <div style={{display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center"}}>
              <div style={{width: "5rem", padding: "10px 10px", background: "#EE953B",   borderRadius: "0 5px 5px 0", boxShadow: "0px 0px 8px #EE953B" }}></div>
              <div style={{color: "#8287BC", fontSize: "0.9rem"}}>10.4 BLK$</div>
              </div>
              <div style={{display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center"}}>
                <div style={{width: "2rem", padding: "10px 10px", background: "#25DBA8",   borderRadius: "0 5px 5px 0", boxShadow: "0px 0px 8px #25DBA8" }}></div>
                <div style={{color: "#8287BC", fontSize: "0.9rem"}}>0.9 BLK$</div>
              </div>
              
            </div>
            </div>
          </div>
    </>
  )
}

export default WelcomeScreen3;
