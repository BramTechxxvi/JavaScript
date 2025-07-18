import { createBrowserRouter } from "react-router";
import Login from "../auth/login/Login";
import SignUp from "../auth/signUp/SignUp";
import Layout from "../pages/Layout/";
import PopularMovies from "../components/moviePage/PopularMovies";

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
        path: "/layout",
        element: <Layout/>,
        // children: [
        //     {
        //         path: "/layout/nowplaying",
        //         element: <NowPlaying/>
        //     }

        // ]
    }
])

export default router