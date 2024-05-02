import React from 'react';
import Image from 'next/image';

const WelcomeScreen5 = () => {
  const boosts = [
    {
      image: "/images/coins.png",
      price: "+10% BLK$",
      time: "30H 24M",
    },
    {
      image: "/images/fly.png",
      price: "+10% BLK$",
      time: "30H 24M",
    },
    {
      image: "/images/gift.png",
      price: "+10% BLK$",
      time: "30H 24M",
    }
  ];
    const styles = {
        box: {
          background: "#221F31", 
          borderRadius: "10px",

        }
      }
  return (
    <>
        <div style={{...styles.box, minHeight: "506px", paddingTop: "20px", paddingLeft: "30px", textAlign: "left", paddingRight: "30px"}}>
        <div style={{textAlign: "left", color: "#25DBA8", fontWeight: "bold", fontSize: "24px", marginBottom: "10px"}}>
            REWARDS
        </div>
        <div style={{color: "#D8D8D8", marginBottom: "25px", fontSize: "18px"}}>NEXT REWARDS</div>
        {boosts.map(boxes => (
    <div style={{width: "100%", height: "83.32px", display: "flex", gap: "20px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
        <div style={{width:"83px", borderRadius: "20px", overflow: "hidden"}}> 
            <Image style={{boxSizing: "border-box"}} src={boxes.image} alt='Fortnite' width={85} height={85}></Image>
        </div>
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap"}}>
            <div style={{color: "white", fontWeight: "bold", marginBottom: "5px", fontSize: "18px"}}>{boxes.price}</div>
            <div style={{display: "flex", flexWrap: "wrap", gap: "7px" }}>
                <div style={{fontSize: "14px", color: "#8287BC", fontWeight: "bold", fontStyle: "italic"}}>{boxes.time}</div>
            </div>
        </div>
      </div>
    ))}
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "27px", color: "#25DBA8", textAlign: "center", background: "#120F1F", borderRadius: "12px", marginBottom: "10px", cursor: "pointer"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="19.494" height="10.247" viewBox="0 0 19.494 10.247">
                <path id="Stroke_1" data-name="Stroke 1" d="M16.667,0,8.333,7.833,0,0" transform="translate(1.414 1.414)" fill="none" stroke="#25dba8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
        </div>
        <div style={{width: "100%", height: "43px", color: "#25DBA8", textAlign: "center", background: "#37334A", borderRadius: "12px",marginBottom: "10px", padding: "4px 0px", cursor: "pointer", fontSize: "16px", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: 'center'}}>SEE ALL</div>
        </div>  
    </>
  )
}

export default WelcomeScreen5
