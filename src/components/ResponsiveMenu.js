import React, { useState } from 'react';
import {Anchor, Button, Drawer, Menu} from "antd";
import {Link as Linko} from "react-router-dom";
import "./ResponsiveMenu.css";
import {MenuOutlined} from "@ant-design/icons";
import { BackgroundDark } from "../Constants"
const { Link } = Anchor;

function ResponsiveMenu(){
    const [key, setKey] = useState(1);
    const [visible, setVisible] = useState(false);

    const handleClick = e => {
        setKey(e.key);
    }

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const menuList = [
        {index: "1", name: "Home", link: "/home"},
        {index: "2", name: "Florcita", link: "/florcita"},
        {index: "3", name: "Juancito", link: "/juancito"}];

    return (
        <div>
            <div className="mobileHidden">
                <Menu onClick={handleClick} style={{float: "right"}} theme="dark" mode={"horizontal"} defaultSelectedKeys={[key]}>
                    {menuList.map((element) => {
                        return createMenuItem(element.index, element.name, element.link);
                    })}
                </Menu>
            </div>
            <div className="mobileVisible">
                <div style={{float: "right"}}>
                    <Button type="primary" onClick={showDrawer}>
                        <MenuOutlined/>
                    </Button>
                </div>
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    bodyStyle={BackgroundDark}
                >
                    <Anchor style={BackgroundDark} targetOffset="65" >
                        {menuList.map((element) => {
                            return createLink(element.index, element.name, element.link);
                        })}
                    </Anchor>
                </Drawer>
            </div>
        </div>)
}

function createLink(index, name, link){
    return(
        <Link key={index}
              href={link}
              title={
                  <div className="white-text">
                      {name}
                  </div>}
        />)
}

function createMenuItem(index, name, link){
    return (
        <Menu.Item key={index}>
            <Linko to={link}>
                {name}
            </Linko>
        </Menu.Item>)
}

export default ResponsiveMenu;
