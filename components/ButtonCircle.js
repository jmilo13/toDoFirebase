import React from "react";
import Image from 'next/image'
import styles from "@styles/buttonCircle.module.scss"


const ButtonCircle = ({icon, color, click}) => {

  return (
    <button  className={styles.logOutButton} style={{backgroundColor: color}} onClick={click}>
      <div className={styles.imageContainer}>
        <div className="svgEmbebed" data-src={icon}></div>
      </div>
    </button> 
  )
}

export default ButtonCircle