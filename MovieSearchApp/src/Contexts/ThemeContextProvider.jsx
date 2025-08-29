import { useState } from "react";
import ThemeContext from "./ThemeContext.js";

const ThemeContextProvider = ({children})=>{

        const [theme , setTheme] =useState("light");

        const toggleTheme =()=>{
            setTheme((prevTheme)=>(prevTheme === "light" ? "dark" : "light"))
        }

    return(
        <ThemeContext.Provider value={{theme , setTheme , toggleTheme}} >
          <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;