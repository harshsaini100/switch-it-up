import React, { createContext, useState, useEffect, useContext } from 'react';

export type Theme = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    recentlyChangedTheme: Theme | null;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const savedTheme: Theme = localStorage.getItem('theme') as Theme || 'theme1';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [theme, setThemeState] = useState<Theme>(savedTheme);
    const [recentlyChangedTheme, setRecentlyChangedTheme] = useState<Theme | null>(null);

    //global theme setter function
    //1. Sets the theme state
    //2. sets theme change animation state to true then to false after one second
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        setRecentlyChangedTheme(newTheme);
        setTimeout(() => setRecentlyChangedTheme(null), 1000); // Hide after 1s
    };


    //effect of theme change. sets theme to local storage and adds relevent class to html
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);


    return (
        <ThemeContext.Provider value={{ theme, setTheme, recentlyChangedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
};