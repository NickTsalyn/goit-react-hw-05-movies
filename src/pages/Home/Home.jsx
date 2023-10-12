import { useEffect, useState } from "react"

import { getTrendingMovies } from "api";
import { MovieList } from "components/MovieList/MovieList";



export default function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getTrendingMovies().then(setMovies)
        console.log(movies)
    }, [movies])

    return (
        <div>
            <h1>Trending This Week</h1>
           <MovieList movies={movies}></MovieList>
        </div>
    )
} 