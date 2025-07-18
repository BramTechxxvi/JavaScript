import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const movieBaseUrl = "https://api.themoviedb.org/3/movie";
const apiKey = import.meta.env.VITE_API_MOVIE_API_KEY;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: movieBaseUrl }),
  endpoints: (builder) => ({ 
    getNowPlaying: builder.query({
      query: () => (`/now_playing?api_key=${apiKey}`),
    }),
    getPopularMovies: builder.query({
      query: () => (`/popular?api_key=${apiKey}`),
    }),
    getTopRatedMovies: builder.query({
      query: () => (`/top_rated?api_key=${apiKey}`),
    }),
    getUpcomingMovies: builder.query({
      query: () => (`/upcoming?api_key=${apiKey}`),
    })
  })
});

export const { useGetNowPlayingQuery, useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery } = movieApi;