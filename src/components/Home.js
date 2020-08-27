import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

function Home() {
    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{backgroundColor: "aquamarine"}}>Content of home</div>
        </Content>
    );
}

export default Home;