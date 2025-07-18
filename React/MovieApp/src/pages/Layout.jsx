import React from 'react'
import NavBar from "../components/navBar/NavBar";
import SideBar from "../components/sideBar/SideBar";
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router';


export const Layout = () => {
  return (
    <div>
        <NavBar/>
        <div>
            <SideBar/>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout;