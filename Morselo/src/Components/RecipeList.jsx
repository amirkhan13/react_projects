import React, { useContext, useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Card from './Card';
import "../recpie-drink-List.css";
import RecpieContext from '../Contexts/RecpieContext';
import Loader from './Loader';

function RecipeList() {
  const itemsPerPage = 12;
  const {
    searchQuery,
    meal,
    drink,
    loading,
    error,
    category,
    filterType,
    setSearchQuery,
    setFilterType,
    searchRecpie
  } = useContext(RecpieContext);

  const [currentPage, setCurrentPage] = useState(1);



  useEffect(() => {
    if (searchQuery) {
      searchRecpie();
      setCurrentPage(1);
    }
  }, [searchQuery, category, filterType]);

  if (error) return <h2>Error: {error}</h2>;

  const data = category === "meal" ? meal : drink;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const renderCards = () => {
    if (data.length === 0) return <p style={{ color: "orange", fontSize: "50px" }}>No results found</p>;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    return currentData.map((item, idx) => {
      const key = category === "meal" ? item.idMeal : item.idDrink;
      const name = category === "meal" ? item.strMeal : item.strDrink;
      const img = category === "meal" ? item.strMealThumb : item.strDrinkThumb;

      return <Card key={key + idx} data={{ name, img, id: key }} category={category} />;
    });
  };

  return (
    <>
      <NavBar />
      {
        loading ? (
          <Loader />
        ) : (
          <div className="recpie-drink-container">
            <h1 className='recpie-drink-heading'>Search results for {searchQuery || "All"}</h1>


            {category === "meal" && (
              <div className="recepie-filter">
                <select
                  value={filterType === "cuisine" ? searchQuery : ""}
                  onChange={(e) => { setSearchQuery(e.target.value); setFilterType("cuisine"); }}
                >
                  <option value="" disabled>Cuisine Type</option>
                  <option value="Italian">Italian</option>
                  <option value="Indian">Indian</option>
                  <option value="Mexican">Mexican</option>
                  <option value="American">American</option>
                </select>

                <select
                  value={filterType === "mealType" ? searchQuery : ""}
                  onChange={(e) => { setSearchQuery(e.target.value); setFilterType("mealType"); }}
                >
                  <option value="" disabled>Meal Type</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Side">Side</option>
                  <option value="Starter">Starter</option>
                </select>

                <select
                  value={filterType === "ingredient" ? searchQuery : ""}
                  onChange={(e) => { setSearchQuery(e.target.value); setFilterType("ingredient"); }}
                >
                  <option value="" disabled>Ingredients</option>
                  <option value="Chicken">Chicken</option>
                  <option value="Beef">Beef</option>
                  <option value="Tomato">Tomato</option>
                  <option value="Cheese">Cheese</option>
                </select>
              </div>
            )}

            {category === "drink" && (
              <div className="recepie-filter">
                <select
                  value={filterType === "mealType" ? searchQuery : ""}
                  onChange={(e) => { setSearchQuery(e.target.value); setFilterType("mealType"); }}
                >
                  <option value="" disabled>Drink Type</option>
                  <option value="Ordinary_Drink">Ordinary Drink</option>
                  <option value="Cocktail">Cocktail</option>
                  <option value="Shake">Shake</option>
                  <option value="Cocoa">Cocoa</option>
                </select>

                <select
                  value={filterType === "ingredient" ? searchQuery : ""}
                  onChange={(e) => { setSearchQuery(e.target.value); setFilterType("ingredient"); }}
                >
                  <option value="" disabled>Ingredients</option>
                  <option value="Vodka">Vodka</option>
                  <option value="Rum">Rum</option>
                  <option value="Lemon">Lemon</option>
                  <option value="Milk">Milk</option>
                </select>
              </div>
            )}

            {/* Cards */}
            <div className="recpie-cards">{renderCards()}</div>

            {/* Pagination */}
            <div className="pagination">
              <button onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
              {[...Array(totalPages)].map((_, idx) => {
                const page = idx + 1;
                return (
                  <button
                    key={page}
                    className={page === currentPage ? "active" : ""}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                );
              })}
              <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>
          </div>
        )
      }
      <Footer />
    </>
  );
}

export default RecipeList;
