import React, { useState, useEffect } from 'react'
import Image from 'next/image';

const WelcomeScreen4 = () => {
  const rewards = [
    {
      image: "/images/New.png",
      name : "VALORANT",
      price: "30.9 BLK$",
      status: "KEEP PLAYING"
    },
    {
      image: "/images/1.png",
      name : "FC24",
      price: "30.9 BLK$",
      status: "KEEP PLAYING"
    },
    {
      image: "/images/2.png",
      name : "GENSHIN",
      price: "30.9 BLK$",
      status: "KEEP PLAYING"
    },
    {
      image: "/images/3.png",
      name : "FORTNITE",
      price: "30.9 BLK$",
      status: "KEEP PLAYING"
    },
  ]
  const claimed = [
    {
      image: "/images/New.png",
      name : "VALORANT",
      price: "30.9 BLK$",
      status: "CLAIM NOW"
    },
    {
      image: "/images/1.png",
      name : "FC24",
      price: "30.9 BLK$",
      status: "CLAIM NOW"
    },
    {
      image: "/images/2.png",
      name : "GENSHIN",
      price: "30.9 BLK$",
      status: "CLAIM NOW"
    },
    {
      image: "/images/3.png",
      name : "FORTNITE",
      price: "30.9 BLK$",
      status: "CLAIM NOW"
    },
  ]
    const styles = {
        box: {
          background: "#221F31", 
          borderRadius: "10px",
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
          <div style={{...styles.box, paddingTop: "20px", paddingLeft: "30px" ,textAlign: "left", paddingRight: "30px", minHeight: "506px"}}>
          <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "10px", fontWeight: "bold"}}>
              <div style={{textAlign: "left", color: "#25DBA8", fontWeight: "bold", fontSize: "24px"}}>
                REWARDS
              </div>
              <div style={{width: "80px", height: "25px", color: "#25DBA8", background: "#37334A", borderRadius: "50px", opacity: 1, fontSize: "9px", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", letterSpacing: '1px'}}>SEE ALL +</div>
            </div>
          <div style={{...smallScreen4, display: "flex", gap: "18px"}}>
            {/* NEXT REWARDS */}
            <div style={{flex: 1}}>
              <div style={{color: "#D8D8D8", marginBottom: "25px", fontSize: "18px"}}>NEXT REWARDS</div>
              {rewards.map(box => (
              <div style={{width: "100%", height: "83.32px", display: "flex", gap: "15px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
                  <div style={{width: "123px", borderRadius: "12px", overflow: "hidden"}}>
                      <Image style={{boxSizing: "border-box", borderRadius: "12px"}} src={box.image} alt='Fortnite' width={123} height={83.2}></Image>
                  </div>
                  <div style={{display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap"}}>
                      <div style={{color: "white", fontWeight: "bold", fontStyle: "italic", marginBottom: "5px", fontSize: "20px", letterSpacing: "1px"}}>{box.name}</div>
                      <div style={{display: "flex", flexWrap: "wrap", gap: "10px" }}>
                          <div style={{fontSize: "12px", color: "#8287BC", fontWeight: "bold"}}>{box.price}</div>
                          <div style={{fontSize: "12px", color: "#F32971", cursor: "pointer", textTransform: "uppercase", fontWeight: "bold"}}>{box.status}</div>
                      </div>
                  </div>
              </div>
            ))}
            </div>
            {/* NEXT REWARDS */}
            {/* SINGLE LINE */}
                <div style={{...smallerScreen2, width: "1px" , background: "#37334A"}}></div>
            {/* SINGLE LINE */}
            {/* TO BE CLAIMED */}
            <div style={{flex: 1}}>
            <div style={{color: "#D8D8D8", marginBottom: "25px", fontSize: "18px"}}>TO BE CLAIMED</div>
              {claimed.map(box => (
              <div style={{width: "100%", height: "83.32px", display: "flex", gap: "15px", background: "#120F1F", opacity: "1", borderRadius: "20px", marginBottom: "10px"}}>
                  <div style={{width: "123px", borderRadius: "12px", overflow: "hidden"}}>
                      <Image src={box.image} alt='Fortnite' width={123} height={83.2}></Image>
                  </div>
                  <div style={{display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap"}}>
                      <div style={{color: "white", fontWeight: "bold", fontStyle: "italic", marginBottom: "5px", fontSize: "20px", letterSpacing: "1px"}}>{box.name}</div>
                      <div style={{display: "flex", flexWrap: "wrap", gap: "10px" }}>
                          <div style={{fontSize: "12px", color: "#8287BC", fontWeight: "bold"}}>{box.price}</div>
                          <div style={{fontSize: "12px", color: "#25DBA8", cursor: "pointer", textTransform: "uppercase", fontWeight: "bold", textDecoration: "underline", letterSpacing: "1px"}}>{box.status}</div>
                      </div>
                  </div>
              </div>
            ))}
            
            </div>
            {/* TO BE CLAIMED */}
          </div>
          </div>
    </>
  )
}

export default WelcomeScreen4