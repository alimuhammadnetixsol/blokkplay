import React from 'react';
import Image from 'next/image';

const Rewards4 = () => {
    const styles = {
        box: {
          background: "#221F31", 
          borderRadius: "10px",
          opacity: 0.85 
        }
      }
    return (
    <>
         <div style={{...styles.box, paddingTop: "10px", paddingLeft: "15px", paddingRight: "15px",textAlign: "left"}}>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "18px", fontWeight: "bold"}}>
              <div style={{textAlign: "left", color: "#25DBA8", fontWeight: "bold", fontSize: "24px"}}>
                REWARDS BOX
              </div>
            </div>
            <div style={{fontSize: "13px", color: "#D8D8D8"}}>OPEN BOXES TO EARN UNIQUE REWARDS</div>
            <div style={{display: "flex", alignItems: "center", justifyItems: 'center'}}>
                <Image src="/images/treas.png" alt='' width={400} height={300}></Image>
            </div>
            <div>
              <button style={{width: "100%", color: "#25DBA8", background: "#37334A", borderRadius: "20px", padding: "5px 0px", fontSize :"13px", fontWeight: "bold", letterSpacing: "1px"}}>EXPLORE BOXES</button>
            </div>
          </div>
    </>
  )
}

export default Rewards4;
