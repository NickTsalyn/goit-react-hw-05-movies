import axios from "axios"



const searchParams = new URLSearchParams({
    api_key:  '5de032b5f903096b5b93d0d893d30ceb',
    language: 'en-US'
})

axios.defaults.baseURL = 'https://api.themoviedb.org/3';


export const getTrendingMovies = async() => {
    const {data} = await axios.get(`/trending/all/week?${searchParams}`)
    return data.results
}

export const getMovieName = async(query) => {
    const {data} = await axios.get(`/search/movie?${searchParams}&query=${query}`)
    console.log(data.results)
    return data.results
}

export const getMovieDetails = async(movieId) => {
    const {data} = await axios.get(`/movie/${movieId}?${searchParams}`)
    return data
}

export const getMovieCredits = async(movieId) => {
    const {data} = await axios.get(`/movie/${movieId}/credits?${searchParams}`)
    return data.cast
}

export const getMovieRatings = async(movieId) => {
    const {data} = await axios.get(`/movie/${movieId}/reviews?${searchParams}`)
    return data.results
}