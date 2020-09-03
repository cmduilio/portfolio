import React from 'react';
import { Breadcrumb } from 'antd';
import ContentMarginTop from "./ContentMarginTop";

function Experience() {
    return (
        <ContentMarginTop>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Experience</Breadcrumb.Item>
            </Breadcrumb>
        </ContentMarginTop>
    );
}

export default Experience;