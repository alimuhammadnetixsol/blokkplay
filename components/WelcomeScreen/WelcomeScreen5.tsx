import React from 'react';
import Image from 'next/image';

const WelcomeScreen5 = () => {
    const styles = {
        box: {
          background: "#221F31", 
          borderRadius: "10px",
          opacity: 0.85 
        }
      }
  return (
    <>
        <div style={{...styles.box, paddingTop: "10px", paddingLeft: "20px",textAlign: "left", paddingRight: "18px"}}>
        <div style={{textAlign: "left", color: "#25DBA8", fontWeight: "bold", fontSize: "24px", marginBottom: "18px"}}>
            BOOSTS
        </div>
        <div style={{color: "#D8D8D8", marginBottom: "25px", fontWeight: "bold", fontSize: "18px"}}>ACTIVE BOOSTS</div>
        <div style={{display: "flex", flexWrap: "wrap", gap: "7.5px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
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
        <div style={{display: "flex", flexWrap: "wrap", gap: "7.5px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
                <div style={{width:"full", borderRadius: "20px", overflow: "hidden"}}> 
                    <Image style={{boxSizing: "border-box"}} src="/images/fly.png" alt='Fortnite' width={60} height={60}></Image>
                </div>
                <div style={{width: "full", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap", padding: "8px 10px 5px 5px"}}>
                  <div style={{color: "white", fontWeight: "bold", marginBottom: "5px", fontSize: "14px"}}>+10% BLK$</div>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "7px" }}>
                    <div style={{fontSize: "10px", color: "#8287BC", fontWeight: "bold", fontStyle: "italic"}}>Unlimited</div>
                  </div>
                </div>
        </div>
        <div style={{display: "flex", flexWrap: "wrap", gap: "7.5px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
                <div style={{width:"full", borderRadius: "20px", overflow: "hidden"}}> 
                    <Image style={{boxSizing: "border-box"}} src="/images/gift.png" alt='Fortnite' width={60} height={60}></Image>
                </div>
                <div style={{width: "full", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap", padding: "8px 10px 5px 5px"}}>
                  <div style={{color: "white", fontWeight: "bold", marginBottom: "5px", fontSize: "14px"}}>+10% BLK$</div>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "7px" }}>
                    <div style={{fontSize: "10px", color: "#8287BC", fontWeight: "bold", fontStyle: "italic"}}>Unlimited</div>
                  </div>
                </div>
        </div>
        <div style={{width: "full", color: "#25DBA8", textAlign: "center", background: "#120F1F", borderRadius: "12px", marginBottom: "10px", cursor: "pointer"}}>v</div>
        <div style={{width: "full", color: "#25DBA8", textAlign: "center", background: "#37334A", borderRadius: "12px",marginBottom: "10px", padding: "4px 0px", cursor: "pointer"}}>SEE ALL</div>
        </div>  
    </>
  )
}

export default WelcomeScreen5
