import React from 'react';
import {Breadcrumb, Card, Image} from 'antd';
import ContentMarginTop from "../components/ContentMarginTop";
import CardListFlex from "../components/CardListFlex";
import JavaLogo from "../resources/Java.png";
import ReactLogo from "../resources/React.png";
import NodeLogo from "../resources/NodeJs2.png";
import DBLogo from "../resources/DB.png";
import MiscLogo from "../resources/React.png";
import Meta from "antd/es/card/Meta";
import Icon, {
    EditOutlined,
    EllipsisOutlined,
    GithubOutlined,
    LinkedinOutlined,
    SettingOutlined,
    TwitterOutlined
} from '@ant-design/icons';
import {Option} from "antd/es/mentions";
import ContactMe from "../components/ContactMe";
import Test from "../components/test/Test";

/*
function callLocal() {
        //fetch("http://localhost:3000/aymat/ping", {
        fetch("", {
            method: "GET"
        })
        .then(res => {
            console.log(res.json());
            return res.json();
        })
        .catch( error => console.log(error));
};
*/
const listData = [];
const Java = {
    title: "Java",
    image: JavaLogo,
    description:
        'Knowledge in Java 8, Spark, Guice as main libraries. Gradle, maven, ' +
        'Hibernate.',
};
const ReactSkill = {
    title: "React",
    image: ReactLogo,
    description:
        'Knowledge in Java 8, Spark, Guice as main libraries.',
};
const Node = {
    title: "Node",
    image: NodeLogo,
    description:
        'Knowledge in Java 8, Spark, Guice as main libraries.',
};
const DB = {
    title: "DB",
    image: DBLogo,
    description:
        'Both relational and non-relational databases, experience in Oracle SQL,' +
        'MySQL and MongoDB.',
};
const Misc = {
    title: "Miscellaneous",
    image: MiscLogo,
    description:
        'Experience in streaming data frameworks like BigQ or Kafka, ' +
        ' Clean architecture and SOLID principles.',
};

listData.push(Java);
listData.push(ReactSkill);
listData.push(Node);
listData.push(DB);
listData.push(Misc);
function IconOption({image}){
    return  (
        <div>
            <Image width={25} preview={false} src={image}/>
        </div>
    )};
function Home() {

    return (
        <ContentMarginTop>
            <Breadcrumb style={{ margin: '5px 0' }}>
                <Breadcrumb.Item>Portfolio</Breadcrumb.Item>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>

            <div style={{ color: "red", display: "block", marginLeft: "auto", marginRight: "auto"}}>
                DISCLAIMER: THIS IS A WORK IN PROGRESS! Thanks for understanding!
            </div>

            <Test/>

            <Card style={{ width:600, display: "block", marginLeft: "auto", marginRight: "auto"}}
                  actions={[
                      <LinkedinOutlined key="setting" />,
                      <GithubOutlined key="edit" />,
                      <TwitterOutlined key="ellipsis" />,
//                      <IconOption image={JavaLogo}/>,
                  ]}>
                <Meta style={{color: "black"}}
                    description={"I'm a Software engineer from Argentina.\n" +
                    "I love software development specifically game development,\n" +
                    "currently working on a game in UnrealEngine!\n" +
                    "You can find me in...\n"}
                />
            </Card>

            <ContactMe/>

            <CardListFlex list={listData} imageWidth={100}/>
        </ContentMarginTop>
    );
}

export default Home;