import React, { useEffect, useState } from 'react'
import Slider from '@/components/Slider/Slider'
//import TrendingSlider from '@/components/TrendingSlider'
import { Movie } from 'typings'
import styles from '@/styles/MoviesSection.module.scss'
//import Slider from './Slider/SliderClass'
import {moviesService, Categories} from '@/services/moviesService'
import Footer from './Footer'
interface Props{
  categories: Categories[]
}
function MoviesSection({categories}:Props) {
 const [windowHeight, setWindowHeight] = useState(0)
 

 useEffect(()=>{
   handleWindowHeight(window.innerHeight)
   
 },[])
 const handleWindowHeight = (height:number)=>{
   setWindowHeight(height)
 }

 return (
   <section className={styles.moviesSection} style={{
     marginTop: `-${windowHeight*0.12}px`
   }}>
     
     {categories.map((category)=>(
        <Slider key={category.id} title={category.name} movies={category.movies} />
     ))}
     {/* <Slider title="Top 10 TV Shows in Brazil Today" movies={trendingNow} />
     <Slider title="Critically Acclaimed TV Shows" movies={criticallyMovies} />
     <Slider title="New Releases" movies={newReleases} /> */}
     <Footer/>
   </section>
 )
}


export default MoviesSection