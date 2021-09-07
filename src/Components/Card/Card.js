import React from "react";
import "./Card.scss";

function Card(props) {
    return (
        <div className={ "card " + props.className } onClick={props.onClick}>
            <p className="card__title">{props.title}</p>
            <p className="card__content">{props.content}</p>
        </div>
    );
}

export default Card;