import React from 'react'
import { useGetPopularMoviesQuery } from '../api/movieApi';

export const MovieCard = () => {
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const { data, error, isLoading } = useGetPopularMoviesQuery();
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong</p>

    return (
        <div>
            {
            data?.results.map((result)=>(
            <div key={result.id}>
                <img src={`${imageUrl}${result.poster_path}`} alt="" />
                        <p>{result.overview}</p>
                        <p>{result.title}</p>
                        <p>Rating: {result.vote_average}</p>
            </div>
            ))
           }
        </div>
    )
    
}

export default MovieCard;
