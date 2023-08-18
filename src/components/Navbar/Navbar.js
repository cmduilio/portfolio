import React, {useRef, useEffect} from 'react';
import './Navbar.css';
import Menu from "../Menu/Menu";

function Navbar({home, menu, sticky}) {
    const checkRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                checkRef.current.checked = false;
            }
        })
    }, [])

    return(
        <div className={"navbar"} ref={navRef} style={sticky ? {position: "sticky"}: {}}>
            <label htmlFor={"toogle"} className={"hamburguer item"}>
                &#9776;
            </label>
            <input className={"navbar-input"} type={"checkbox"} id={"toogle"} ref={checkRef}/>
            <Menu home={home} menu={menu} onClick={() => {
                checkRef.current.checked = false;
            }}/>
        </div>
    );
}

export default Navbar;