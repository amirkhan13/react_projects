import React from 'react'
import Card from './Card'
import '../featured.css'
import { useContext } from 'react'
import RecpieContext from '../Contexts/RecpieContext'
import Loader from './Loader'

function Featured() {
  const { error, recpies, drinks, loadingMeals, loadingDrinks } = useContext(RecpieContext);

  if (loadingMeals) return <Loader />
  if (loadingDrinks) return <Loader />


  return (
    <div>
      <div className="recipies" id="recipes-section">
        <h1 className="recepie-heading">Trending Recipes</h1>
        <div className="card-components">

          {
            Array.isArray(recpies) && recpies.map((item) => (
              <Card key={item.idMeal} data={{
                id: item.idMeal,
                name: item.strMeal,
                img: item.strMealThumb,
              }}
                category={"meal"}
              />
            ))
          }
        </div>
      </div>
      <div className="drinks " id="drinks-section">
        <h1 className="drinks-heading">Popular Drinks</h1>
        <div className="card-components">

          {
            Array.isArray(drinks) && drinks.map((item) => (
              <Card key={item.idDrink} data={{
                id: item.idDrink,
                name: item.strDrink,
                img: item.strDrinkThumb,

              }}
                category={"drink"}
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Featured
