import React from 'react';
import { List, Avatar } from 'antd';

function ItemList({listData}) {
    return (
        <List
            itemLayout="vertical"
            size="small"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5,
            }}
            dataSource={listData}
            renderItem={item => (
                <List.Item
                    key={item.title}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={item.title}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    );
}

export default ItemList;