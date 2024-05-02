import React from 'react';
import Chart from '../Chart/Chart';

const WelcomeScreen3 = () => {
    const styles = {
        box: {
          background: "#221F31", 
          borderRadius: "10px",

        }
      }
    return (
    <>
         <div style={{...styles.box, paddingTop: "20px", paddingLeft: "30px" ,textAlign: "left", minHeight: "506"}}>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "10px", fontWeight: "bold"}}>
              <div style={{textAlign: "left", color: "#25DBA8", fontWeight: "bold", fontSize: "24px"}}>
                ACHIEVEMENTS
              </div>
              <div style={{width: "80px", height: "25px", color: "#25DBA8", background: "#37334A", borderRadius: "50px", opacity: 1, fontSize: "9px", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", letterSpacing: '1px'}}>SEE ALL +</div>
            </div>
            <div style={{color: "#D8D8D8", fontSize: "18px"}}>MOST PLAYED</div>
            <div style={{width: "100%", display: "flex",justifyContent: "start", flexWrap: "wrap", alignItems: "center"}}>
              <div style={{flex: 1}}>
                <div style={{display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "10px"}}>
                  <div style={{width: "21px", height: "21px", borderRadius: "50px", background: "#F32971"}}></div>
                  <div style={{color: "white", fontSize: "16px"}}>Valorant</div>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "10px"}}>
                  <div style={{width: "21px", height: "21px", borderRadius: "50px", background: "#EE953B"}}></div>
                  <div style={{color: "white",  fontSize: "16px"}}>Fortnite</div>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "10px"}}>
                  <div style={{width: "21px", height: "21px", borderRadius: "50px", background: "#25DBA8"}}></div>
                  <div style={{color: "white",  fontSize: "16px"}}>FIFA 24</div>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "10px"}}>
                  <div style={{width: "21px", height: "21px", borderRadius: "50px", background: "#16516B"}}></div>
                  <div style={{color: "white",  fontSize: "16px"}}>Other</div>
                </div>
                
              </div>
              <div style={{flex: 1}}> <Chart /> </div>
            </div>
            <div style={{color: "#D8D8D8", fontSize: "18px", marginBottom: "18px"}}>MOST REWARDED</div>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginBottom: "8px"}}>
              <div style={{color: "white",fontSize: "16px"}}>Valorant</div>
              <div style={{color: "white",fontSize: "16px"}}>Fortnite</div>
              <div style={{color: "white",fontSize: "16px"}}>FIFA 24</div>
            </div>

            <div style={{display: "flex", flexDirection: "column", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginBottom: "8px"}}>
              <div style={{display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center"}}>
                <div style={{width: "177px", height: "19px" , background: "#F32971",   borderRadius: "0 5px 5px 0" , boxShadow: "0px 0px 8px #F32971"}}></div>
                <div style={{color: "#8287BC", fontSize: "12px", fontWeight: "bold"}}>39.9 BLK$</div>
              </div>
              <div style={{display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center"}}>
              <div style={{width: "82px", height: "19px" , background: "#EE953B",   borderRadius: "0 5px 5px 0", boxShadow: "0px 0px 8px #EE953B" }}></div>
              <div style={{color: "#8287BC", fontSize: "12px",fontWeight: "bold"}}>10.4 BLK$</div>
              </div>
              <div style={{display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center"}}>
                <div style={{width: "21px", height: "19px" , background: "#25DBA8",   borderRadius: "0 5px 5px 0", boxShadow: "0px 0px 8px #25DBA8" }}></div>
                <div style={{color: "#8287BC", fontSize: "12px", fontWeight: "bold"}}>0.9 BLK$</div>
              </div>
              
            </div>
            </div>
          </div>
    </>
  )
}

export default WelcomeScreen3;
