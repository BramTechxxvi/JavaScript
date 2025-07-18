import React from 'react'
import { useGetPopularMoviesQuery } from '../api/movieApi';

export const MovieCard = () => {
    const { data, error, isLoading } = useGetPopularMoviesQuery();
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong</p>

    return (
        <div>
           {
             data?.data.results.map((result)=>(
                  <div>
                    <h1>
                        <p>{result.overview}</p>
                        <p>{result.title}</p>
                        <p>Rating: {result.vote_average}</p>
                    </h1>
                </div>
            ))
           }
        </div>
    )
    
}

export default MovieCard;
