import React from 'react'
import './Header.css'
import HomeFilledIcon from '@mui/icons-material/HomeFilled';

const Header = () => {
  return (
    <header>
        <h1>Rick & Morty</h1>
        <HomeFilledIcon />
        <h3>Test Applicaton</h3>
    </header>
  )
}

export default Header