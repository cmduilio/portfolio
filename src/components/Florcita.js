import React from 'react';
import { Breadcrumb } from 'antd';
import ContentMarginTop from "./ContentMarginTop";

function Florcita() {
    return (
        <ContentMarginTop>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Florcita</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{backgroundColor: "lightyellow"}}>Content of Florcita</div>
        </ContentMarginTop>
    );
}

export default Florcita;