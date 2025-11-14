// Themecontext.jsx
import React, { useState, useEffect, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    const updatedTheme = !isDark;
    setIsDark(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setIsDark(savedTheme);
    } else if (prefersDark) {
      setIsDark("dark");
    }
  }, []);

  return (
    <AppContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
