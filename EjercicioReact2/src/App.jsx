
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CustomCard from './components/CustomCard/CustomCard'
import NavBar from './Components/NavBar/NavBar'

import HomePage from './pages/HomePage/HomePage'
import FilterPage from './pages/FilterPage/FilterPage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'

const App = () => {

  return (
    <>
      <Header />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/filter/:especie' element={<FilterPage />} />
          <Route path='/details/:id' element={<DetailsPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>           
      <Footer />
    </>
  )
}

export default App