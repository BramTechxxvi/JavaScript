import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const movieBaseUrl = "https://api.themoviedb.org/3/movie/popular";
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: `` }),
  endpoints: (builder) => ({ 
    
  }),
});