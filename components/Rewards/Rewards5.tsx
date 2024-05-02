import React, { useState } from 'react';
import Image from 'next/image';
import { transform } from 'next/dist/build/swc';

const Rewards5 = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const rotationSpeed = 8; // Rotation duration in seconds

  const handleSpinClick = () => {
    // Rotate the image by 360 degrees over 4 seconds
    const rotationIncrement = 360 * (rotationSpeed / 2.53);
    setRotationAngle(rotationAngle + rotationIncrement);
  };

  const styles = {
    box: {
      background: "#221F31", 
      borderRadius: "10px",
      opacity: 0.85,
    },
    image: {
      transition: "transform 1s",
    },
  };

  return (
    <>
      <div style={{...styles.box, paddingTop: "10px", paddingLeft: "15px", paddingRight: "15px",textAlign: "left"}}>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "18px", fontWeight: "bold"}}>
              <div style={{textAlign: "left", color: "#25DBA8", fontWeight: "bold", fontSize: "24px"}}>
              DAILY LOOT REWARD
              </div>
            </div>
            <div style={{fontSize: "13px", color: "#D8D8D8", marginBottom: "12px"}}>SPIN & COLLECT FREE LOOT</div>
            <div style={{display: "flex", alignItems: "center", justifyItems: 'center'}}>
            <div style={{display: "flex", alignItems: 'center', justifyContent: "center"}}>
              <div
              style={{
                backgroundImage: "url('/images/outer.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: "28px",
                margin: "20px",
                marginBottom: "20px",
              }}
              >
              <Image
                src="/images/inner.png"
                alt=''
                width={300}
                height={300}
                style={{...styles.image,cursor: "pointer", transform: `rotate(${rotationAngle}deg)`}}
                onClick={handleSpinClick}
                ></Image>
              </div>
            </div>
            </div>
          </div>
    </>
  )
}

export default Rewards5;
