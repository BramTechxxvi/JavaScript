import { createBrowserRouter } from "react-router";
import Login from "../auth/login/Login";
import SignUp from "../auth/signUp/SignUp";
import Layout from "../pages/Layout/";
import PopularMovies from "../components/moviePage/PopularMovies";
import NowPlaying from "../components/moviePage/NowPlaying";
import TopRated from "../components/moviePage/TopRated";
import Upcoming from "../components/moviePage/Upcoming";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/signUp",
        element: <SignUp/>
    },
    {
        path: "/popularmovies",
        element: <PopularMovies/>
    },
    {
        path: "/nowplaying",
        element: <NowPlaying/> // Assuming PopularMovies is used for now playing as well
    },
    {
        path: "/toprated",
        element: <TopRated/>
    },
    {
        path: "/upcoming",
        element: <Upcoming/>
    },
    {
        path: "/layout",
        element: <Layout/>,
        children: [
            {
                path: "nowplaying",
                element: <NowPlaying/>
            },
            {
                path: "popularmovies",
                element: <PopularMovies/>
            },
            {
                path: "toprated",
                element: <TopRated/>
            },
            {
                path: "upcoming",
                element: <Upcoming/>
            }

        ]
    }
])

export default router