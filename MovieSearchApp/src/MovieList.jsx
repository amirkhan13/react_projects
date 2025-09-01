import React, { useContext, useState } from 'react'
import MovieCard from './MovieCard'
import "./movielist.css"
import MovieContext from './Contexts/MovieContext';
import Loader from './Loader';
import SearchBar from './SearchBar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';


function MovieList() {

    const location =useLocation()
    const params = new URLSearchParams(location.search)
    const search = params.get("search")
 
    const {movies ,loading , currentPage,setCurrentPage,totalPages} =useContext(MovieContext)
  
    

    if(loading) return <Loader/>

    
    const handlePageClick=(page)=>{
      setCurrentPage(page)
    }


  return (
    <>
    
    <SearchBar/>
    <div className='movie-list'>
      
      <div className='headingss'>

      <h1 >Movies & Shows</h1>
      </div>
      
      
      <div className="movie-card">

      {

        movies.length === 0? (
        <p style={{
          color:"darkcyan",
          fontSize:"30px",
          marginTop:"200px",
          marginLeft:"555px"
          
        }}>No movies or shows found</p>
      )
          :(

            movies.map((movie)=><MovieCard key={movie.imdbID} movieId={movie.imdbID}/>   )
          )
        
      }
      
      </div>

      {
        movies.length >0 ?(
          <div className="pagination">
        <button
          disabled={currentPage==1}
          onClick={()=>handlePageClick(currentPage-1)}
        >
          prev
        </button>
        {
          [...Array(totalPages)].map((_,index)=>{
            const page = index +1;

            return(
              <button 
                key={page}
                className={currentPage === page ? "active" :""}
                onClick={()=>handlePageClick(page)}
              >
                {page}
              </button>
            )

          })

        }
        <button
          disabled = {currentPage ===totalPages}
          onClick={()=>handlePageClick(currentPage +1)}
        >
          next
        </button>
      </div>
        ):
        (
          ""
        )
      }
      
       

    </div>
    <Footer/>
    </>
  )
}

export default MovieList
