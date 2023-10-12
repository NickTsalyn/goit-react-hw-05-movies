import { useEffect, useState } from "react"

import { getTrendingMovies } from "api";
import { MovieList } from "components/MovieList/MovieList";
import { Title } from "./Home.styled";



export default function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getTrendingMovies().then(setMovies)
        console.log(movies)
    }, [movies])

    return (
        <div>
            <Title>Trending This Week</Title>
           <MovieList movies={movies}></MovieList>
        </div>
    )
} 