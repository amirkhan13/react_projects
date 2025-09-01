import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import SearchBar from '../Components/SearchBar'
import Featured from '../Components/Featured'
import Footer from '../Components/Footer'


function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <SearchBar />
      <Featured />
      <Footer />
    </div>
  )
}

export default Home
