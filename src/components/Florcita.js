import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import ContentMarginTop from "./ContentMarginTop";

const { Content } = Layout;

function Florcita() {
    return (
        <ContentMarginTop content={
            <>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Florcita</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{backgroundColor: "lightgreen"}}>Content of Florcita</div>
            </>
        }>
        </ContentMarginTop>
    );
}

export default Florcita;