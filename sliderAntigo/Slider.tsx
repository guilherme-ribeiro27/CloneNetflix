import React, { useRef, useState } from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SlideCard from './SlideCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Movie } from 'typings'
import styles from '@/styles/Slider.module.scss'

interface Props {
    title: string
    movies: Movie[]
}
function Slider({title, movies}:Props) {
  let slideCount = 0

    if(movies.length > 6){
        slideCount = 6
    }else if(movies){
        slideCount = movies.length
    }

  return (
    <>
      <div className={styles.slideContainer}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <div className={styles.sliderContainer}>
          <Splide options={{
            type: 'loop',
            perPage: slideCount,
            perMove:slideCount * 300,
            width: slideCount >3 ? '100vw': 900,
            pagination:false,
            arrows: movies.length > 6 ? true : false,
            drag: movies.length > 6 ? true : false,
            gap: '0.5rem',
            breakpoints:{
              1400:{
                perPage: 5,
              },
              1100:{
                perPage: 4,
              },
              800:{
                perPage: 3,
              },
              500:{
                perPage: 2,
              }
            }
          }}>
            {movies.map((movie)=>(
              <SplideSlide key={movie.id}>
                <SlideCard movie={movie}/>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      
    </>
  )
}

export default Slider