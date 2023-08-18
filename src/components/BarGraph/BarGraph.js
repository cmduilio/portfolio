import React from 'react';
import './BarGraph.css'
import LabeledBar from "../LabeledBar/LabeledBar";

function BarGraph({graphs, title}) {
    return (
            <div className={"graph"}>
                <div className={"graph-title"}>
                    {title}
                </div>
                {graphs.map(graph => {
                    return <LabeledBar key={graph.label} label={graph.label} width={graph.width}/>
                })}
            </div>
    )
}

export default BarGraph;
