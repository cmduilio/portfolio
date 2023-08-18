import React, {useRef, useEffect, useState} from 'react';
import './Bar.css';

function Bar({width}) {

    const bar = useRef();

    const [visible, setVisible] = useState(false);

    const isInViewport = (offset = 0) => {
        if (!bar || !(bar.current)) return false;
        const top = bar.current.getBoundingClientRect().top;
        return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
    }

    useEffect( () => {
        window.addEventListener('scroll', (event) => {
            setVisible(isInViewport());
        });
    }, []);

    return (
        <div className={"growing-bar"} style={visible ? {width: width} : {}} ref={bar}/>
    )
}

export default Bar;