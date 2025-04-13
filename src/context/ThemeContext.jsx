import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();
const THEME_KEY = 'theme';

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false); // Default to dark theme

  const saveThemeToLocalStorage = (theme) => {
    localStorage.setItem(THEME_KEY, theme); // Store as plain string
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme) {
      // Assume storedTheme is a plain string ('dark', 'light', 'system')
      setDark(storedTheme === 'dark');
      return;
    }

    // If no stored theme, use system preference
    const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(isSystemThemeDark);
    saveThemeToLocalStorage(isSystemThemeDark ? 'dark' : 'light');
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, setDark, saveThemeToLocalStorage }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider };
export default ThemeContext;