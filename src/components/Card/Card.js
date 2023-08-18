import React, {useState} from "react";
import './Card.css';

function Card({url, title, subtitle, description, grow}) {
    const [hoverStyle, setHoverStyle] = useState({});
    const onHover = () => {
        setHoverStyle(grow ? {transform: "scale(1.3)"} : {});
    }

    const mouseOut = () => {
        setHoverStyle({})
    }

    return (
        <div className={"card"} style={hoverStyle} onMouseOver={onHover} onMouseOut={mouseOut}>
            <div className={"card-image"} style={{backgroundImage: `url(${url}`}}/>
            <div className={"card-title"}>{title}</div>
            <div className={"card-subtitle"}>{subtitle}</div>
            <div className={"card-description"}>{description}</div>
        </div>
    )
}

export default Card;