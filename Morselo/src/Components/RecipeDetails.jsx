import React, { useContext, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../RecipeDetails.css";
import RecpieContext from "../Contexts/RecpieContext";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function RecipeDetails() {
  const { id, category } = useParams();
  const { showRecpieDetails, error, fetchRecpieDetails, loading } =
    useContext(RecpieContext);

  useEffect(() => {
    fetchRecpieDetails(id, category);
  }, [id, category]);



  const hadnleAddTofavs = () => {

    let favs = JSON.parse(localStorage.getItem("favs")) || []

    const favData = {
      id: showRecpieDetails.idMeal || showRecpieDetails.idDrink,
      name: showRecpieDetails.strMeal || showRecpieDetails.strDrink,
      img: showRecpieDetails.strMealThumb || showRecpieDetails.strDrinkThumb,
      category: category

    }
    if (!favs.find((item) => item.id === favData.id)) {
      favs.push(favData);
      localStorage.setItem("favs", JSON.stringify(favs));
      alert("Added to Favorites!");
    } else {
      alert("Already in Favorites!");
    }
  };

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!showRecpieDetails || showRecpieDetails.length === 0)
    return <p>No details found</p>;




  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = showRecpieDetails[`strIngredient${i}`];
    const measure = showRecpieDetails[`strMeasure${i}`];
    if (ing && ing.trim() !== "") {
      ingredients.push(`${measure ? measure : ""} ${ing}`.trim());
    }
  }


  const instructions = showRecpieDetails.strInstructions
    ? showRecpieDetails.strInstructions
      .split(". ")
      .filter((step) => step.trim() !== "")
    : [];

  return (
    <div>
      <NavBar />
      <div className="recepie-details-container">
        <div className="recpie-heading">
          <h1>{showRecpieDetails.strMeal || showRecpieDetails.strDrink}</h1>
          <button onClick={hadnleAddTofavs}>Add to Favs</button>
        </div>

        <div className="recipe-sub-details">
          <div className="recpie-img">
            <img
              src={showRecpieDetails.strMealThumb || showRecpieDetails.strDrinkThumb}
              alt="N/A"
            />
          </div>
          <div className="recpie-sub-details-right">
            <h4>Category: {showRecpieDetails.strCategory}</h4>
            {showRecpieDetails.strArea ? <p>Cuisine: {showRecpieDetails.strArea || "N/A"}</p> : "Cuisine: N/A"}
            {showRecpieDetails?.strYoutube && (
              <a href={showRecpieDetails.strYoutube} target="_blank" rel="noreferrer">
                Watch Video
              </a>
            )}
          </div>
        </div>

        <div className="ingredinets">
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="instructions">
          <h2>Instructions</h2>
          <ol>
            {instructions.map((step, idx) => (
              <li key={idx}>{step.trim()}.</li>
            ))}
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );

}


export default RecipeDetails;
