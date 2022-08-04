import { createContext, useContext, useState, useEffect } from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

const defaultObj = {};
const ThemeContext = createContext(defaultObj);

const ThemeProvider = ({ children }: ChildrenProps) => {
  const storedTheme = localStorage.getItem("storedTheme");

  const [theme, setTheme] = useState(
    storedTheme !== null ? JSON.parse(storedTheme) : "light-theme"
  );

  useEffect(() => {
    localStorage.setItem("storedTheme", JSON.stringify(theme));
    document.body.classList.add(theme);
  });

  const valueObj = { theme, setTheme };

  return (
    <ThemeContext.Provider value={valueObj}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
