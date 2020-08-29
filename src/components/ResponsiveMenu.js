import React, { useEffect, useState } from 'react';
import {Menu, Popover} from "antd";
import {Link} from "react-router-dom";
import {MenuOutlined} from "@ant-design/icons";

function ResponsiveMenu(){
    const [float, setFloat] = useState("right");
    const [mode, setMode] = useState("horizontal");
    const [key, setKey] = useState(1);

    const handleClick = e => {
        console.log('click', e);
        setKey(e.key);
    }

    const [viewportWidth, setViewportWidth] = useState(19);
    const [isMenuShown, setIsMenuShown] = useState(false);
    const isMobile = () => viewportWidth < 600;

    useEffect(() => {
        setViewportWidth(window.innerWidth);

        let isMobile = window.innerWidth < 600;
        setFloat(isMobile ? "none" : "right");
        setMode(isMobile ? "vertical-right" : "horizontal");
        window.addEventListener('resize', () => {
            setViewportWidth(window.innerWidth);
            let isMobile = window.innerWidth < 600;
            setFloat(isMobile ? "none" : "right");
            setMode(isMobile ? "vertical-right" : "horizontal");
        });

        return () => window.removeEventListener('resize', () => {
            setViewportWidth(window.innerWidth);
            let isMobile = window.innerWidth < 600;
            setFloat( isMobile ? "none" : "right");
            setMode(isMobile ? "vertical-right" : "horizontal");
        });
    }, []);

    const menu =
        <Menu onClick={handleClick} style={{float: float}} theme="dark" mode={mode} defaultSelectedKeys={[key]}>
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
        </Menu>;

    return (isMobile() ? <Popover overlayStyle={{color: "red"}}
                               content={menu}
                               visible={isMenuShown}
                               trigger="click"
                               onVisibleChange={setIsMenuShown}
        >
            <div style={{float: "right", textAlign: "center", color:"lightgrey"}}>
                <MenuOutlined />
            </div>
        </Popover> : menu)
}

export default ResponsiveMenu;
