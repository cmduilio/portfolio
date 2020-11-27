import React, { useState } from 'react';
import {Anchor, Button, Drawer, Menu} from "antd";
import {Link as Linko} from "react-router-dom";
import "./ResponsiveMenu.css";
import {MenuOutlined} from "@ant-design/icons";
import { BackgroundDark } from "../Constants"
import SubMenu from "antd/es/menu/SubMenu";
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
        {index: "1", name: "Home", link: "/"},
        {index: "2", name: "Skills", link: "/skills"},
        {index: "3", name: "Experience", link: "/experience"}];

    const menuProjects = [{index: "4", name: "Pathfinding", link: "/pathfinding"},
        {index: "5", name: "Youtube", link: "/youtube"},
        {index: "6", name: "Google", link: "/google"}];

    return (
        <div>
            <div className="mobileHidden">
                <Menu onClick={handleClick} style={{float: "right"}} theme="dark" mode={"horizontal"} defaultSelectedKeys={[key]}>
                    {menuList.map((element) => {
                        return createMenuItem(element.index, element.name, element.link);
                    })}

                    <SubMenu key="Submenu" title="Projects">
                        {menuProjects.map((element) => {
                            return createMenuItem(element.index, element.name, element.link);
                        })}
                    </SubMenu>
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
