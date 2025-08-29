import React, { useContext, useEffect } from 'react'
import './moviedetails.css'
import MovieContext from './Contexts/MovieContext'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import SearchBar from './SearchBar'
import Footer from './Footer'

function MovieDetails() {
  const { id } = useParams();
  const { loading, error, showMovieDetails, fetchMoviesDetails } = useContext(MovieContext);

  useEffect(() => {
    fetchMoviesDetails(id);
  }, [id]); 

  if (loading) return <Loader />;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

  return (
    <>
      <SearchBar />

      {(!showMovieDetails || Object.keys(showMovieDetails).length === 0) ? (
        <h2 style={{ color: "darkcyan", fontSize: "20px" }}>
          No Movie Details Found
        </h2>
      ) : (
        <div className='movie-details-container'>
          <div className="movie-detail">
            <h1>{showMovieDetails.Title}</h1>
            <div className="sub-details">
              {showMovieDetails.Ratings && showMovieDetails.Ratings.map((rating, index) => (
                <p key={index}>
                  {rating.Source}: {rating.Value}
                </p>
              ))}
              <p>Runtime: {showMovieDetails.Runtime}</p>
              <p>Year: {showMovieDetails.Year}</p>
            </div>
            <div className="movie-descrpition">
              {showMovieDetails.Plot}
            </div>
            <div className="movie-other-detailss">
              <p>Director : {showMovieDetails.Director}</p>
              <p>Stars : {showMovieDetails.Actors}</p>
              <p>Genre : {showMovieDetails.Genre}</p>
              <p>Languages : {showMovieDetails.Language}</p>
              <p>Awards : {showMovieDetails.Awards}</p>
            </div>
          </div>
          <div className="movie-poster">
            <img src={showMovieDetails.Poster} alt={showMovieDetails.Title || "N/A"} />
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}

export default MovieDetails;
