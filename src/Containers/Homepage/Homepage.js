import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Articles from "../Articles/Articles";
import "./Homepage.scss";

function Homepage() {
    return (
        <>
            <h1 className="homepage__title"> Bienvenue sur le blog !</h1>
            <Articles />
        </>
    );
}

export default Homepage;