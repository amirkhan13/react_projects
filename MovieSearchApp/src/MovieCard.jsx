import React, { useContext } from 'react'
import './moviecard.css'
import MovieContext from './Contexts/MovieContext'
import { Link } from 'react-router-dom'

function MovieCard( {movieId}) {
  const {movies} = useContext(MovieContext)

  const movie =movies.find((m)=>m.imdbID === movieId)
  

  if (!movie) return null;



  return (
    <Link 
    to={`/movie/${movie.imdbID}`}
    style={{ textDecoration: "none", color: "inherit" }}>
      <div className="card-container">
        <div className="img-container">
            <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="movie-details">

        <h4>Title : {movie.Title}</h4>
        <p>Released Year : {movie.Year} </p>
        <p>Type : {movie.Type}</p>

        </div>

      </div>
      </Link>
    
  )
}

export default MovieCard
