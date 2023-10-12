import { useParams} from "react-router-dom"
import { getMovieDetails } from "api"
import { MovieCard } from "components/MovieCard/MovieCard"
import { useState, useEffect} from 'react';




export const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState(null)
    const {movieId} = useParams()
    // const location = useLocation();
    

    useEffect(() => {
        getMovieDetails(movieId).then(setMovieDetails)
    }, [movieId])

    if (!movieDetails) {
        return null;
      }

    return (
        <>
            <MovieCard movies={movieDetails}/>
        </>
    )
} 