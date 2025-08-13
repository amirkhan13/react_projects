import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");
  
  const isValidColor = (value) => {
    
    const s = new Option().style;
    s.color = value;
    return s.color !== "";
  };

  function handleColorChange(e){
    const value = e.target.value.trim().toLowerCase();
    setInputValue(value);

    if (!value) {
      setError("");
      setColor("");
      return;
    }
    if (isValidColor(value)) {
      setColor(value);
      setError("");
    } else {
      setError(" Invalid color name or hex code");
      setColor(" ")
    }
  }
  
  return (
    <>
     <div className="ColorPicker">
      <h1>Color Picker</h1>
      <div className="box"
      style={{ 
        background:color || "white",
        border: error ? "2px solid red":"2px solid black"
      }}
      ></div>
      {error &&<p
        style={{
          color:"red"
        }}
      >{error}</p>}
      <input type="text" 
      placeholder='enter a color name' 
      value={inputValue}
      onChange={handleColorChange}
      />
     </div>
    </>
  )
}

export default App
