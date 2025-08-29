import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import Loader from './Loader'
import MovieDetails from './MovieDetails'
import MovieContextProvider from './Contexts/MovieContextProvider'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ThemeContextProvider from './Contexts/ThemeContextProvider';  



function App() {


  return (
    <>
    <MovieContextProvider>
    <ThemeContextProvider  className="app-container">

      <Router>

      <Routes>
        <Route path='/' element={<MovieList/>}/>
     
      <Route path='/movie/:id' element={<MovieDetails/>}/>
 
      </Routes>

      </Router>
    </ThemeContextProvider>
    </MovieContextProvider>
    

      
    </>
  )
}

export default App
