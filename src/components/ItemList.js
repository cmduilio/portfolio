import React from 'react';
import {List, Divider, Avatar} from 'antd';

function ItemList({pageSize, listData}) {
    const pagination = pageSize ?
                 {
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: pageSize,
                } : null;

    return (
        <List
            itemLayout="horizontal"
            size="small"
            pagination={pagination}
            dataSource={listData}
            renderItem={item => (
                <>
                    <List.Item
                        key={item.title}
                    >
                        <List.Item.Meta
                            avatar={<Avatar shape="square" src={item.avatar} />}
                            title={item.title}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                    <Divider/>
                </>
            )}
        />
    );
}

export default ItemList;