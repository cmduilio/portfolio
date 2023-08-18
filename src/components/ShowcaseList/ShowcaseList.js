import React from "react";
import './ShowcaseList.css';
import Showcase from "../Showcase/Showcase";

function ShowcaseList({list}) {
    return (
        <div>
            {list.map(elem => {
                return(
                    <div key={elem.subtitle}>
                        <Showcase title={elem.title} subtitle={elem.subtitle}
                                  description={elem.description} from={elem.from}
                                  to={elem.to} backgroundUrl={elem.backgroundUrl}
                                  url={elem.url}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ShowcaseList;