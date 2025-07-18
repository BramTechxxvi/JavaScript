import React from 'react'
import MovieCard from '../../reuseables/MovieCard';
import { useGetUpcomingMoviesQuery } from '../../api/movieApi';

export const Movie = () => {
    const {data, error, isLoading} = useGetUpcomingMoviesQuery();
    if (isLoading) return <p>Loading upcoming movies...</p>;
    if (error) return <p>Something went wrong: {error.message}</p>;
  return (
    <div>
        <h1>Upcoming</h1>
        <MovieCard data={data}/>
    </div>
  )
}

export default Movie;