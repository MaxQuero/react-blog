import React from "react";
import {Link} from "react-router-dom";
import "./Button.scss";

function Button(props) {
    return(
        <Link className={`button ${props.className} ${props.rounded ? " rounded" : ""}` } to="/new-article">{ props.children }</Link>
    );
}

export default Button;