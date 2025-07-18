import React from 'react'

export const MovieCard = (data) => {
    const imageUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <div>
            {
            data?.data.results.map((result)=>(
            <div key={result.id}>
                <img src={`${imageUrl}${result.poster_path}`} alt="" />
                        <h4><p>{result.title}</p></h4>
                        <p>{result.overview}</p>
                        <p>Rating: {result.vote_average}</p>
            </div>
            ))
           }
        </div>
    )
    
}

export default MovieCard;
