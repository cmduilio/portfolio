import {Image, Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import React from "react";
const { Header } = Layout;

function HomeHeader(){
    return (
        <Header style={{position: "fixed", zIndex: "1", width: "100%"}}>
            <Menu style={{float: 'right'}} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/home">
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/florcita">
                        Florcita
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/juancito">
                        Juancito
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default HomeHeader;