import React from 'react';
import './Footer.css';
import {FaGithub, FaTwitter} from 'react-icons/fa';

function Footer({title}) {
    return (
        <div className={"footer"}>
            <div className={"footer-icons"}>
                <a href={"https://github.com/cmduilio"} className={"footer-link"} target={"_blank"} rel={"noopener noreferrer"} >
                    <FaGithub size={"1.5rem"} color={"var(--text-title)"}/>
                </a>
                <a href={"https://twitter.com/DuilioGameDev"} className={"footer-link"} target={"_blank"} rel={"noopener noreferrer"} >
                    <FaTwitter size={"1.5rem"} color={"var(--text-title)"}/>
                </a>
            </div>
            <h3 className={"footer-title"}>
                {title}
            </h3>
        </div>
    )
}

export default Footer;