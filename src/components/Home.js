import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import ContentMarginTop from "./ContentMarginTop";
const { Content } = Layout;


function Home() {
    return (
        <ContentMarginTop content={
            <>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{backgroundColor: "aquamarine"}}>Content of home</div>
            </>
        }/>
    );
}

export default Home;