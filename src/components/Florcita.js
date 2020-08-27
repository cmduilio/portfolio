import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

function Florcita() {
    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Florcita</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{backgroundColor: "lightgreen"}}>Content of Florcita</div>
        </Content>
    );
}

export default Florcita;