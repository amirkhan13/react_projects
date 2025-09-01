import React, { useContext } from 'react';
import '../searchBar.css';
import RecpieContext from '../Contexts/RecpieContext';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const { searchQuery, setSearchQuery, category, setCategory } = useContext(RecpieContext)
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate('/search-results'); // Only navigate, search will run in RecipeList
    }
  }

  return (
    <div className='search'>
      <div className="search-input">
        <input
          type="text"
          placeholder='What do you feel like cooking or sipping today?'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      <select
        className='category-select'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="meal">Meal</option>
        <option value="drink">Drink</option>
      </select>
    </div>
  );
}

export default SearchBar;
