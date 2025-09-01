import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import RecpiedrinkList from './Pages/RecpiedrinkList'
import RecipeDetails from './Components/RecipeDetails'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recpie from './Pages/Recpie'
import Drinks from './Pages/Drinks'
import Fav from './Pages/Fav'
import About from './Pages/About'
import NavBar from './Components/NavBar'
import RecpieDetailsPage from './Pages/RecpieDetailsPage'

function App() {


  return (
    <>
      <Router>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<RecpiedrinkList />} />
          <Route path="/details/:category/:id" element={<RecpieDetailsPage />} />
          <Route path="/recpies" element={<Recpie />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/about" element={<About />} />
          <Route path="/fav-recpies" element={<Fav />} />


        </Routes>

      </Router>
    </>

  )
}

export default App
