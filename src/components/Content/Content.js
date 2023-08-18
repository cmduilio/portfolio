import React from 'react';
import './Content.css';

function Content({content, id}) {
    return (
        <div id={id} className={"content"}>
            {content}
        </div>
    );
}

export default Content;