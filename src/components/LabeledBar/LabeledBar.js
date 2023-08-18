import React from "react";
import './LabeledBar.css';
import Bar from "../Bar/Bar";

function LabeledBar({label, width}) {

    return (
        <div className={"bar-box"}>
            <label className={"bar-label"}>
                {label}
            </label>
            <Bar width={width}/>
        </div>
    )
}

export default LabeledBar;