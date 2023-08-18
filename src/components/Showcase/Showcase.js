import React from 'react';
import './Showcase.css';

function Showcase({title, subtitle, description, backgroundUrl, url, from, to}) {
    return (
        <div className={"showcase"}>
            <div className={"showcase-container"}>
                <img className={"showcase-image"} src={backgroundUrl} alt={""}/>
                {/*<div className={"showcase-image"} style={{backgroundImage: `url(${backgroundUrl}`}}/>*/}
            </div>
            <div className={"showcase-container"}>
                <h3 className={"showcase-title"}>
                    {title}
                    <span className={"showcase-years"} >{from} - {to}</span>
                </h3>

                <div className={"showcase-subtitle"}>{subtitle}</div>
                <div className={"showcase-description"}>{description}</div>
                <a className={"showcase-link"} target={"_blank"} rel={"noopener noreferrer"} href={url} >
                    <span className={"showcase-button"} >
                        Visit site
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Showcase;