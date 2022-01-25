import React from "react";
import Image from 'next/image'
import styles from "@styles/buttonCircle.module.scss"


const ButtonCircle = ({icon, color, click}) => {

  return (
    <button  className={styles.logOutButton} style={{backgroundColor: color}} onClick={click}>
      <div className={styles.imageContainer}>
        <Image src={icon} layout="fill"/>
      </div>
    </button> 
  )
}

export default ButtonCircle