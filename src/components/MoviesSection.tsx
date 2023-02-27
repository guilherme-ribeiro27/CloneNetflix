import React from 'react'
import Slider from '@/components/Slider/Slider'
//import TrendingSlider from '@/components/TrendingSlider'
import { Movie } from 'typings'
import styles from '@/styles/MoviesSection.module.scss'

function MoviesSection() {
  const criticallyMovies : Movie[] = [
    {
      id: 1,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 2,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 3,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 4,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 5,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 6,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 7,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 8,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 9,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 10,
      thumbanailUrl: '/Whindersson.webp'
    }
  ]
  const trendingNow : Movie[] = [
    {
      id: 1,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 2,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 3,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 4,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 5,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 6,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 7,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 8,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 9,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 10,
      thumbanailUrl: '/Whindersson.webp'
    }
  ]
  const newReleases : Movie[] = [
    {
      id: 1,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 2,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 3,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 4,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 5,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 6,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 7,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 8,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 9,
      thumbanailUrl: '/Whindersson.webp'
    },
    {
      id: 10,
      thumbanailUrl: '/Whindersson.webp'
    }
  ]
  return (
    <section className={styles.moviesSection}>
      {/* <TrendingSlider /> */}
      <Slider title="Top 10 TV Shows in Brazil Today" movies={trendingNow} />
      <Slider title="Critically Acclaimed TV Shows" movies={criticallyMovies} />
      <Slider title="New Releases" movies={newReleases} />
    </section>
  )
}

export default MoviesSection