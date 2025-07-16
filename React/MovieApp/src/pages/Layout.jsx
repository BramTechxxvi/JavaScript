import React from 'react'
import NavBar from "../components/navBar/NavBar";
import SideBar from "../components/sideBar/SideBar";
import MoviePage from "../components/moviePage/MoviePage";
import Footer from '../components/footer/Footer';

export const Layout = () => {
  return (
    <div>
        <NavBar/>
        <div>
            <SideBar/>
            <MoviePage/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout;