import React from 'react';
import './About.css';

function About({title, text}) {
    return (
        <div className={"about"}>
            <h2>
                {title}
            </h2>
            <p>
                {text}
            </p>
        </div>
    );
}

export default About;