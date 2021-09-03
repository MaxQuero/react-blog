import React from 'react';
import './LightMode.scss';
import {useContext} from "react";
import {ThemeContext} from "../../Context/ThemeContext";
function LightMode() {

    let {toggleTheme, theme} = useContext(ThemeContext);
    return (
        <>
            <button className="btn-lightmode" onClick={toggleTheme}>{theme ? 'Darkmode': 'Lightmode'}</button>
        </>
    );
}

export default LightMode;