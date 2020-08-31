import React from 'react';
import {Breadcrumb, Image} from 'antd';
import ContentMarginTop from "./ContentMarginTop";
import errorImage from "../Error.jpg"

function Error() {
    return (
        <ContentMarginTop>
            <div style={{alignContent: "center"}}>
                <Image src={errorImage} width={200}/>
                <div style={{backgroundColor: "aquamarine"}}>ERROR 404 <br/> Michi not found (try going home?)</div>
            </div>
        </ContentMarginTop>
    );
}

export default Error;