import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

function ContentMarginTop({content}) {
    return (
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
            {content}
        </Content>
    );
}

export default ContentMarginTop;