import React from 'react'
import MovieCard from '../../reuseables/MovieCard';
import { useGetTopRatedMoviesQuery } from '../../api/movieApi';

export const Movie = () => {
    const {data, error, isLoading} = useGetTopRatedMoviesQuery();
    if (isLoading) return <p>Loading top rated movies...</p>;
    if (error) return <p>Something went wrong: {error.message}</p>;
  return (
    <div>
        <h1>Top Rated Movies</h1>
        <MovieCard data={data}/>
    </div>
  )
}
export default Movie;