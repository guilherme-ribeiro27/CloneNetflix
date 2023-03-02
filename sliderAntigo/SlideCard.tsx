/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '@/styles/SlideCard.module.scss'
import { Movie } from 'typings'

interface Props {
    movie: Movie
    
}
function SlideCard({movie}:Props) {
 return (
    <>
        <img src={movie.thumbanailUrl} alt="movieThumbnail" className={styles.img}/>
    </>
 )
}

export default SlideCard