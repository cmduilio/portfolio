import React from 'react';
import './MenuItem.css';

function MenuItem({url, text, style}) {
    return (
        <a href={url} className={"link"}>
            <span className={"text"} style={style}>
                {text}
            </span>
        </a>
    )
}

export default MenuItem;