import api from './api'
import { Movie } from 'typings';
export interface Categories{
    id: number;
    name: string;
    movies: {
        page: number,
        results: Movie[]
    }
}
//require('dotenv/config')
export const moviesService = {
    getCategories: async() : Promise<any>=>{
        return [
            {
                id: 1,
                name: 'Critically Acclaimed TV Shows',
                movies: await api.get(`/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)
            },
            {
                id: 2,
                name: 'Treding Now',
                movies: await api.get(`/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)
            },
            {
                id: 3,
                name: 'Popular on Netflix',
                movies: await api.get(`/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
            },
            {
                id: 4,
                name: 'Popular',
                movies: await api.get(`/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=3`)
            },
        ]
    }
}

