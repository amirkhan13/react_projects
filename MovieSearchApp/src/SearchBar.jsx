import React, { useContext, useState } from 'react'
import './searchbar.css'
import MovieContext from './Contexts/MovieContext';
import { useNavigate } from 'react-router-dom';
import ThemeContext from './Contexts/ThemeContext';

function SearchBar() {
  const { setQuery } = useContext(MovieContext);
  const {theme , toggleTheme} = useContext(ThemeContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (input.trim()) {
      setQuery(input);                
      navigate(`/?search=${input}`);  
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setQuery(input);
      navigate(`/?search=${input}`);
    }
  };

  return (
    <div>
      <div className="header">
        <h1>Cine Verse</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search movies or shows"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown} 
          />
        </div>
        <div className="search-button">
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </div>
         <button className="theme-button" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
