import React from 'react';
import { Breadcrumb } from 'antd';
import ContentMarginTop from "./ContentMarginTop";
import ItemList from "./ItemList";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import JavaLogo from "../resources/Java.png";
const listData = [];
AddSkill({
    title: "Java",
    avatar: JavaLogo,
    description:
        '',
    content:
        'Knowledge in Java 8, Spark, Guice as main libraries. Gradle, maven, ' +
        'Hibernate.',
});
AddSkill({
    title: "React",
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        '',
    content:
        'Knowledge in Java 8, Spark, Guice as main libraries.',
});
AddSkill({
    title: "Node",
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        '',
    content:
        'Knowledge in Java 8, Spark, Guice as main libraries.',
});
AddSkill({
    title: "DB",
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        '',
    content:
        'Both relational and non-relational databases, experience in Oracle SQL,' +
        'MySQL and MongoDB.',
});
AddSkill({
    title: "Miscellaneous",
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        '',
    content:
        'Experience in streaming data frameworks like BigQ or Kafka, ' +
        ' Clean architecture and SOLID principles.',
});

function AddSkill({title, avatar, description, content}){
    listData.push({
        title: title,
        avatar: avatar,
        description: description,
        content: content
    })
}

function Skills() {
    return (
        <ContentMarginTop>
            <br/>
            <Breadcrumb>
                <BreadcrumbItem>Portfolio</BreadcrumbItem>
                <BreadcrumbItem>Skills</BreadcrumbItem>
            </Breadcrumb>
            <br/>
            <ItemList listData={listData} />
        </ContentMarginTop>

    );
}

export default Skills;