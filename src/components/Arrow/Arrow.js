import React from "react";
import "./Arrow.css"

function Arrow({ direction, clickFunction, glyph }) {
    return(
        <div className={`slide-arrow ${direction}`}
            onClick={clickFunction}>
            { glyph }
        </div>
    )
}

export default Arrow;