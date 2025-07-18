import React from 'react'
import { useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery } from '../api/movieApi';

export const MovieCard = () => {
    const data = useGetPopularMoviesQuery();
    console.log(data);
  return (
    <div>

    </div>
  )
}

export default MovieCard;
