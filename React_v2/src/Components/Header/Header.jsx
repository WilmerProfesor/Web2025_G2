import React from 'react'
import './Header.css'
import AppleIcon from '@mui/icons-material/Apple';

const Header = () => {
  return (
    <header>
        <AppleIcon sx={{fontSize:"5rem", color:"blue"}}/>
        <h1>Ejercicio de React</h1>
        <p>Este es un ejemplo de una App</p>
    </header>
  )
}

export default Header