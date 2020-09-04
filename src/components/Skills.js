import React from 'react';
import {Breadcrumb, Card, Col, Row, Space} from 'antd';
import ContentMarginTop from "./ContentMarginTop";
import ItemList from "./ItemList";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import JavaLogo from "../resources/Java.png";
import Profile from "./Profile";
import CardListFlex from "./CardListFlex";
const listData = [];
const Java = {
    title: "Java",
    avatar: JavaLogo,
    description:
        null,
    content:
        'Knowledge in Java 8, Spark, Guice as main libraries. Gradle, maven, ' +
        'Hibernate.',
};
const ReactSkill = {
    title: "React",
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        null,
    content:
        'Knowledge in Java 8, Spark, Guice as main libraries.',
};
const Node = {
    title: "Node",
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        null,
    content:
        'Knowledge in Java 8, Spark, Guice as main libraries.',
};
const DB = {
    title: "DB",
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        '',
    content:
        'Both relational and non-relational databases, experience in Oracle SQL,' +
        'MySQL and MongoDB.',
};
const Misc = {
    title: "Miscellaneous",
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        '',
    content:
        'Experience in streaming data frameworks like BigQ or Kafka, ' +
        ' Clean architecture and SOLID principles.',
};

listData.push(Java);
listData.push(ReactSkill);
listData.push(Node);
listData.push(DB);
listData.push(Misc);
function Skills() {
    return (
        <ContentMarginTop>
            <Breadcrumb>
                <BreadcrumbItem>Portfolio</BreadcrumbItem>
                <BreadcrumbItem>Skills</BreadcrumbItem>
            </Breadcrumb>
            <CardListFlex list={listData}/>
        </ContentMarginTop>
    );
}

export default Skills;