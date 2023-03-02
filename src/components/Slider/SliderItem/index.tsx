/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './styles.module.scss'
import { Movie } from 'typings'
interface Props{
    movie : any
    width : number
}
function SliderItem ({movie, width} : Props) {
  return (
    <div className={styles.sliderItem} style={{ width: `${width}%` }}>
        <img
        className={styles.sliderImg}
        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
        alt="title"
        />
    </div>
  )
}

export default SliderItem 