import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
const FontContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Check local storage or system preference
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark'; // Default to dark
    });

    const [font, setFont] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('font') || 'inter';
        }
        return 'inter';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // Remove previous theme class and add current one
        root.classList.remove('light', 'dark');
        root.classList.add(theme);

        // Save to local storage
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const root = window.document.documentElement;
        root.setAttribute('data-font', font);
        localStorage.setItem('font', font);
    }, [font]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const changeFont = (newFont) => {
        setFont(newFont);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <FontContext.Provider value={{ font, changeFont }}>
                {children}
            </FontContext.Provider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const useFont = () => {
    const context = useContext(FontContext);
    if (!context) {
        throw new Error('useFont must be used within a ThemeProvider');
    }
    return context;
};
