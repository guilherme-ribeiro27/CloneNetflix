/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Featured.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons'
function Featured() {
 const [windowHeight, setWindowHeight] = useState(0)


 useEffect(()=>{
   handleWindowHeight(window.innerHeight)
 },[])
 const handleWindowHeight = (height:number)=>{
   setWindowHeight(height)
 }
 return (
   <section className={styles.featuredDiv} >
       <img className={styles.titleLogo} src={'/formula1.webp'} alt='formula1' ></img>
       <div className={styles.buttons}>
           <button className={styles.playButton}>
               <FontAwesomeIcon icon={faPlay} />
               Play
           </button>
           <button className={styles.moreInfoButton}>
               <FontAwesomeIcon icon={faInfoCircle} />
               More Info
           </button>
       </div>
   </section>
 )
}


export default Featured
