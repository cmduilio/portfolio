import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

function ContentMarginTop({children: content}) {

    return (
        <Content style={{ display: "flex", flexDirection: "column", padding: '0 50px', marginTop: 64 }}>
            {content}
        </Content>
    );
}

export default ContentMarginTop;