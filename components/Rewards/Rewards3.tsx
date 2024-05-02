import React, { useState, useEffect } from 'react'
import Image from 'next/image';

const Rewards3 = () => {
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

  const smallScreen4: any = isSmallScreen ? {flexDirection: "column"} : {flexDirection: "row"};
  const smallerScreen2 = isSmallScreen ? {width: "300px"} : {width: "1px"};
  // const smallScreen5: any = isSmallScreen ? {flexDirection: "row"} : {flexDirection: "column"}
  return (
      <>    
          <div style={{...styles.box, paddingTop: "10px", paddingLeft: "15px",textAlign: "left", paddingRight: "15px"}}>
          <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "18px", fontWeight: "bold"}}>
              <div style={{textAlign: "left", color: "#25DBA8", fontWeight: "bold", fontSize: "24px"}}>
                REWARDS
              </div>
          </div>
          <div style={{...smallScreen4, display: "flex", gap: "18px", marginBottom: "10px"}}>
            {/* NEXT REWARDS */}
            <div style={{ flex: "1" }}>
                    <div style={{color: "#D8D8D8", marginBottom: "25px", fontWeight: "bold", fontSize: "18px"}}>NEXT REWARDS</div>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "7.5px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
                        <div style={{width:"full", borderRadius: "20px", overflow: "hidden"}}> 
                            <Image style={{boxSizing: "border-box"}} src="/images/fort.png" alt='Fortnite' width={100} height={150}></Image>
                        </div>
                        <div style={{width: "full", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap", padding: "8px 10px 5px 5px"}}>
                        <div style={{color: "white", fontWeight: "bold", fontStyle: "italic", marginBottom: "5px"}}>FORTNITE</div>
                        <div style={{display: "flex", flexWrap: "wrap", gap: "7px" }}>
                            <div style={{fontSize: "10px", color: "#8287BC", fontWeight: "bold"}}>30.9 BLK$</div>
                            <div style={{fontSize: "10px", color: "#F32971", cursor: "pointer", textTransform: "uppercase", fontWeight: "bold"}}>Keep Playing</div>
                        </div>
                        </div>
                    </div>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "7.5px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
                        <div style={{width:"full", borderRadius: "20px", overflow: "hidden"}}> 
                            <Image style={{boxSizing: "border-box"}} src="/images/VAL.png" alt='Fortnite' width={100} height={150}></Image>
                        </div>
                        <div style={{width: "full", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap", padding: "8px 10px 5px 5px"}}>
                        <div style={{color: "white", fontWeight: "bold", fontStyle: "italic", marginBottom: "5px"}}>VALORANT</div>
                        <div style={{display: "flex", flexWrap: "wrap", gap: "7px" }}>
                            <div style={{fontSize: "10px", color: "#8287BC", fontWeight: "bold"}}>30.9 BLK$</div>
                            <div style={{fontSize: "10px", color: "#F32971", cursor: "pointer", textTransform: "uppercase", fontWeight: "bold"}}>Keep Playing</div>
                        </div>
                        </div>
                    </div>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "7.5px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
                        <div style={{width:"full", borderRadius: "20px", overflow: "hidden"}}> 
                            <Image style={{boxSizing: "border-box"}} src="/images/fort.png" alt='Fortnite' width={100} height={150}></Image>
                        </div>
                        <div style={{width: "full", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap", padding: "8px 10px 5px 5px"}}>
                        <div style={{color: "white", fontWeight: "bold", fontStyle: "italic", marginBottom: "5px"}}>FORTNITE</div>
                        <div style={{display: "flex", flexWrap: "wrap", gap: "7px" }}>
                            <div style={{fontSize: "10px", color: "#8287BC", fontWeight: "bold"}}>30.9 BLK$</div>
                            <div style={{fontSize: "10px", color: "#F32971", cursor: "pointer", textTransform: "uppercase", fontWeight: "bold"}}>Keep Playing</div>
                        </div>
                        </div>
                    </div>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "7.5px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
                    <div style={{width:"full", borderRadius: "20px", overflow: "hidden"}}> 
                        <Image style={{boxSizing: "border-box"}} src="/images/EA.png" alt='Fortnite' width={100} height={150}></Image>
                    </div>
                    <div style={{width: "full", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap", padding: "8px 10px 5px 5px"}}>
                    <div style={{color: "white", fontWeight: "bold", fontStyle: "italic", marginBottom: "5px"}}>EA SPORTS FC24</div>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "7px" }}>
                        <div style={{fontSize: "10px", color: "#8287BC", fontWeight: "bold"}}>30.9 BLK$</div>
                        <div style={{fontSize: "10px", color: "#F32971", cursor: "pointer", textTransform: "uppercase", fontWeight: "bold"}}>Keep Playing</div>
                    </div>
                    </div>
                    </div>
            </div>
            {/* NEXT REWARDS */}
            {/* SINGLE LINE */}
                <div style={{...smallerScreen2, width: "1px" , background: "#37334A"}}></div>
            {/* SINGLE LINE */}
            {/* TO BE CLAIMED */}
            <div style={{flex: "1"}}>
              <div style={{color: "#D8D8D8", marginBottom: "25px", fontWeight: "bold", fontSize: "18px"}}>TO BE CLAIMED</div>
              <div style={{display: "flex", flexWrap: "wrap", gap: "7.5px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
                <div style={{width:"full", borderRadius: "20px", overflow: "hidden"}}> 
                    <Image style={{boxSizing: "border-box"}} src="/images/fort.png" alt='Fortnite' width={100} height={150}></Image>
                </div>
                <div style={{width: "full", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap", padding: "8px 10px 5px 5px"}}>
                  <div style={{color: "white", fontWeight: "bold", fontStyle: "italic", marginBottom: "5px"}}>FORTNITE</div>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "7px" }}>
                    <div style={{fontSize: "10px", color: "#8287BC", fontWeight: "bold"}}>30.9 BLK$</div>
                    <div style={{fontSize: "10px", color: "#25DBA8", cursor: "pointer", textTransform: "uppercase", fontWeight: "bold", textDecoration: "underline"}}>Claim Now</div>
                  </div>
                </div>
              </div>
              <div style={{display: "flex", flexWrap: "wrap", gap: "7.5px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
                <div style={{width:"full", borderRadius: "20px", overflow: "hidden"}}> 
                    <Image style={{boxSizing: "border-box"}} src="/images/EA.png" alt='Fortnite' width={100} height={150}></Image>
                </div>
                <div style={{width: "full", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap", padding: "8px 10px 5px 5px"}}>
                  <div style={{color: "white", fontWeight: "bold", fontStyle: "italic", marginBottom: "5px"}}>EA SPORTS FC24</div>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "7px" }}>
                    <div style={{fontSize: "10px", color: "#8287BC", fontWeight: "bold"}}>30.9 BLK$</div>
                    <div style={{fontSize: "10px", color: "#25DBA8", cursor: "pointer", textTransform: "uppercase", fontWeight: "bold", textDecoration: "underline"}}>Claim Now</div>
                  </div>
                </div>
              </div>
              <div style={{display: "flex", flexWrap: "wrap", gap: "7.5px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
                <div style={{width:"full", borderRadius: "20px", overflow: "hidden"}}> 
                    <Image style={{boxSizing: "border-box"}} src="/images/VAL.png" alt='Fortnite' width={100} height={150}></Image>
                </div>
                <div style={{width: "full", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap", padding: "8px 10px 5px 5px"}}>
                  <div style={{color: "white", fontWeight: "bold", fontStyle: "italic", marginBottom: "5px"}}>VALORANT</div>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "7px" }}>
                    <div style={{fontSize: "10px", color: "#8287BC", fontWeight: "bold"}}>30.9 BLK$</div>
                    <div style={{fontSize: "10px", color: "#25DBA8", cursor: "pointer", textTransform: "uppercase", fontWeight: "bold", textDecoration: "underline"}}>Claim Now</div>
                  </div>
                </div>
              </div>
              <div style={{display: "flex", flexWrap: "wrap", gap: "7.5px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
                <div style={{width:"full", borderRadius: "20px", overflow: "hidden"}}> 
                    <Image style={{boxSizing: "border-box"}} src="/images/fort.png" alt='Fortnite' width={100} height={150}></Image>
                </div>
                <div style={{width: "full", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap", padding: "8px 10px 5px 5px"}}>
                  <div style={{color: "white", fontWeight: "bold", fontStyle: "italic", marginBottom: "5px"}}>FORTNITE</div>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "7px" }}>
                    <div style={{fontSize: "10px", color: "#8287BC", fontWeight: "bold"}}>30.9 BLK$</div>
                    <div style={{fontSize: "10px", color: "#25DBA8", cursor: "pointer", textTransform: "uppercase", fontWeight: "bold", textDecoration: "underline"}}>Claim Now</div>
                  </div>
                </div>
              </div>
            
            </div>
            {/* TO BE CLAIMED */}
          </div>
          </div>
    </>
  )
}

export default Rewards3;