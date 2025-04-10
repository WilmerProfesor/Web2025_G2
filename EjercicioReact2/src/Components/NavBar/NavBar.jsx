import React from 'react'
import './NavBar.css'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/filter/Human"}>Humanos</Link>
            <Link to={"/filter/Alien"}>Aliens</Link>
        </ul>
    </nav>
  )
}

export default NavBar