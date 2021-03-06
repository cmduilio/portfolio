import {Layout} from "antd";
import React from 'react';
import ResponsiveMenu from "./ResponsiveMenu";

const { Header } = Layout;

function HomeHeader({content}){

    return (
        <Header style={{position: "fixed", zIndex: "1", width: "100%"}}>
            <div style={{float: "left", color: "lightgrey", fontSize: "large", fontWeight: "bold"}}>
                {content}
            </div>
            <ResponsiveMenu />
        </Header>
    )
}

export default HomeHeader;