import React, {createContext, useState} from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
    const [theme, setTheme] = useState(true)

    const toggleTheme = () => {
        setTheme(!theme);
    }

    if (theme) {
        document.body.classList.remove('lightmode--dark');
        document.body.classList.add('lightmode--light');
    }  else {
        document.body.classList.remove('lightmode--light');
        document.body.classList.add('lightmode--dark');
    }


    return (
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;