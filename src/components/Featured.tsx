/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '@/styles/Featured.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons'
function Featured() {

  return (
    <section className={styles.featuredDiv}>
        <img className={styles.titleLogo} src={'/formula1.webp'} alt='formula1'></img>
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