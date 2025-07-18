import React from 'react'
import MovieCard from '../../reuseables/MovieCard';
import { useGetNowPlayingQuery} from '../../api/movieApi';

export const Movie = () => {
  const {data, error, isLoading} = useGetNowPlayingQuery();
  if (isLoading) return <p>Loading movies...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;
  return (
    <div>
      <h1>MoviePage</h1>
      <MovieCard data={data} />
    </div>  
  )
}

export default Movie;