import React from 'react'
import { Link } from 'react-router';

export const SideBar = () => {
  return (
    <div>
      <Link to="/popularmovies"></Link>
      <Link to="/nowplaying"></Link>
      <Link to="toprated"></Link>
      <Link to="upcoming"></Link>
    </div>
  )
}

export default SideBar;
