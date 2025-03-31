import {useState, useEffect} from 'react'

import './Header.css'
import AppleIcon from '@mui/icons-material/Apple';

const Header = () => {

  const [counter, setcounter] = useState(8)

  useEffect(() => {
    setcounter(20)}
  , [])


  const handlecounter = () => {
    setcounter(counter + 1)
  }
  
  useEffect(() => {
    //setcounter(counter + 1);
     console.log("Disparándose");     
     }, [counter]);

  return (
    <header>
        <AppleIcon sx={{fontSize:"5rem", color:"blue"}}/>
        <h1>Ejercicio de React</h1>
        <p>Este es un ejemplo de una App</p>
        <div>
          {counter} tarjetas
        </div>
        <button id='boton' onClick={handlecounter}>Actualizar</button>
    </header>
  )
}

export default Header