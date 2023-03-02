import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Navbar from '@/components/Navbar'
import Featured from '@/components/Featured'
import MoviesSection from '@/components/MoviesSection'
import PageSpinner from '@/components/spinner'
import { useEffect, useState } from 'react'
import { Categories, moviesService } from '@/services/moviesService'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [categories, setCategories] = useState<Categories[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    callCategories().then((categories)=>{
      if(categories.length !== 0)
        setLoading(false)
    })

  },[])
 const callCategories = async ()=>{
  const categories = await moviesService.getCategories()
  setCategories(categories)
  return categories
  }
  if(loading)return <PageSpinner/>
  return (
    <>
      <Head>
        <title>Home - Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/netflixicon.ico" />
      </Head>

      <main>
        <Navbar/>
        <Featured/>
        <MoviesSection categories={categories}/>
      </main>
      
    </>
  )
}
