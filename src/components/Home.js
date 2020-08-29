import React from 'react';
import { Breadcrumb } from 'antd';
import ContentMarginTop from "./ContentMarginTop";


function Home() {
    return (
        <ContentMarginTop>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{backgroundColor: "aquamarine"}}>Content of home</div>
        </ContentMarginTop>
    );
}

export default Home;