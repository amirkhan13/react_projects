import RecpieContext from "./RecpieContext";
import { useState, useEffect } from "react";

const RecpieContextProvider = ({ children }) => {
  const [recpies, setRecipies] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("meal")
  const [filterType, setFilterType] = useState("name")
  const [meal, setMeal] = useState([])
  const [drink, setDrink] = useState([])
  const [showRecpieDetails, setshowRecpieDetails] = useState([])
  const [loadingMeals, setLoadingMeals] = useState(false);
  const [loadingDrinks, setLoadingDrinks] = useState(false);



  const fetchRecpies = async () => {
    setLoadingMeals(true);
    try {
      let temp = [];
      for (let i = 0; i < 6; i++) {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await res.json();
        if (data.meals) {
          temp.push(data.meals[0]);
        }
      }
      setRecipies(temp);




    } catch (error) {
      setError("Something went wrong while fetching recipes");
      setRecipies([]);
      setLoadingMeals(false);
    }
    finally {
      setLoadingMeals(false);
    }
  };

  const fetchDrinks = async () => {
    setLoadingDrinks(true);
    try {
      let temp = [];
      for (let i = 0; i < 6; i++) {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const data = await res.json();
        if (data.drinks) {
          temp.push(data.drinks[0]);
        }
      }
      setDrinks(temp);



    } catch (error) {
      setError("Something went wrong while fetching drinks");
      setDrinks([]);
      setLoadingDrinks(false);
    }
    finally {
      setLoadingDrinks(false);
    }
  };

  const searchRecpie = async () => {
    if (!searchQuery) return;

    setLoading(true);
    try {
      let url = "";

      if (category === "meal") {
        if (filterType === "name") {
          url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
        } else if (filterType === "ingredient") {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQuery}`;
        } else if (filterType === "cuisine") {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchQuery}`;
        } else if (filterType === "mealType") {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchQuery}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setMeal(data.meals ? data.meals : []);
        setDrink([]);
      }

      if (category === "drink") {
        if (filterType === "name") {
          url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`;
        } else if (filterType === "ingredient") {
          url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchQuery}`;
        } else if (filterType === "mealType") {
          url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchQuery}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setDrink(data.drinks ? data.drinks : []);
        setMeal([]);
      }
    } catch (error) {
      setError("Error while searching");
    } finally {
      setLoading(false);
    }
  };


  const fetchRecpieDetails = async (id, category) => {
    if (!id) return;
    setLoading(true);
    setError("");

    try {
      if (category === "meal") {

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json()

        setshowRecpieDetails(data.meals[0]);

      } else {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json()

        setshowRecpieDetails(data.drinks[0]);
      }

    } catch (error) {
      setError("Error fetching the details" || error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecpies();
    fetchDrinks();
  }, []);

  return (
    <RecpieContext.Provider
      value={{
        fetchRecpies,
        fetchDrinks,
        recpies,
        drinks,
        error,
        setDrinks,
        setError,
        setRecipies,
        searchRecpie,
        loading,
        setLoading,
        searchQuery,
        setSearchQuery,
        category,
        setCategory,
        setFilterType,
        meal,
        setMeal,
        setDrink,
        drink,
        setshowRecpieDetails,
        showRecpieDetails,
        fetchRecpieDetails,
        loadingDrinks,
        loadingMeals,
        setLoadingMeals,
        setLoadingDrinks
      }}
    >
      {children}
    </RecpieContext.Provider>
  );
};

export default RecpieContextProvider;
