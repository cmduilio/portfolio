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
    image: JavaLogo,
    description:
        'Knowledge in Java 8, Spark, Guice as main libraries. Gradle, maven, ' +
        'Hibernate.',
};
const ReactSkill = {
    title: "React",
    image: JavaLogo,
    description:
        'Knowledge in Java 8, Spark, Guice as main libraries.',
};
const Node = {
    title: "Node",
    image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Knowledge in Java 8, Spark, Guice as main libraries.',
};
const DB = {
    title: "DB",
    image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Both relational and non-relational databases, experience in Oracle SQL,' +
        'MySQL and MongoDB.',
};
const Misc = {
    title: "Miscellaneous",
    image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
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