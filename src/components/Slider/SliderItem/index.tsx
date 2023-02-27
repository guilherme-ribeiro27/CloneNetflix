/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './styles.module.scss'
import { Movie } from 'typings'
interface Props{
    movie : Movie
    width : number
}
function SliderItem ({movie, width} : Props) {
  return (
    <div className={styles.sliderItem} style={{ width: `${width}%` }}>
        <img
        className={styles.sliderImg}
        src={`${movie.thumbanailUrl}`}
        alt="title"
        />
  </div>
  )
}

export default SliderItem 