import React from 'react';
import { Breadcrumb } from 'antd';
import ContentMarginTop from "../components/ContentMarginTop";
import {MemoBfs} from "../components/bfs/Bfs";

function Pathfinding() {
    return (
        <ContentMarginTop>
            <Breadcrumb style={{margin: '5px 0'}}>
                <Breadcrumb.Item>Portfolio</Breadcrumb.Item>
                <Breadcrumb.Item>Pathfinding</Breadcrumb.Item>
            </Breadcrumb><br/>
            <MemoBfs/>
        </ContentMarginTop>
    );
}

export default Pathfinding;