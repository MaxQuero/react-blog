import React from "react";
import "./Navbar.scss";
import { NavLink} from "react-router-dom";
function Navbar() {
    return (
        <>
            <ul className="navbar">
                <NavLink exact to="/">
                    <li className="navbar__item">Accueil</li>
                </NavLink>
                <NavLink exact to="/articles">
                    <li className="navbar__item">Articles</li>
                </NavLink>
                <NavLink exact to="/contact">
                    <li className="navbar__item">Contact</li>
                </NavLink>
            </ul>
        </>
    );
}

export default Navbar;