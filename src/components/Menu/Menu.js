import React from 'react';
import './Menu.css';
import MenuItem from "../MenuItem/MenuItem";

function Menu({home, menu, style, itemStyle, onClick}) {
    return (
        <div className={"menu"} style={style} onClick={onClick}>
            <div key={home.text} className={"item"} style={{marginRight: "auto"}}>
                <MenuItem url={"#"} text={home.text} style={itemStyle}/>
            </div>

            {menu.map(data => {
                return (
                    <div key={data.text} className={"item"}>
                        <MenuItem style={itemStyle} url={data.url} text={data.text}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu;