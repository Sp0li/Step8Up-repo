import React, { createContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

// Theme provider component
export function ThemeProvider({ children }) {
  //const [userId, setUserID] = useState(0);
  const [darkMode,setDarkMode] = useState(false); // Default theme color is white

  /*const setID = (id) => {
    setUserID(id)
  }

  const toggleTheme2 = () => {
    if(themeColor=="light")
        setThemeColor("dark");
    else
        setThemeColor("light");
  };*/

  return (
    <ThemeContext.Provider value={{ darkMode,setDarkMode/*userId, themeColor, toggleTheme2*/ }}>
      {children}
    </ThemeContext.Provider>
  );
}
