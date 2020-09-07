import React from 'react';
import { Breadcrumb } from 'antd';
import ContentMarginTop from "./ContentMarginTop";
import ItemList from "./ItemList";
import MercadolibreLogo from "../resources/Mercadolibre.jpg";
import SysoneLogo from "../resources/Sysone.jpg";
import QWLogo from "../resources/QWork.jpg";
import SantanderLogo from "../resources/Santander.png";

const listData = [];
const Santander = {
    title: "Software Engineer",
    avatar: SantanderLogo,
    description: "Santander Tecnología Argentina",
    content: "TBD"
};
const MercadoLibre = {
    title: "Software Development Engineer",
    avatar: MercadolibreLogo,
    description: "MercadoLibre",
    content:
        "Java Engineer in Billing department. We focus on end-to-end iniciativesdeveloping multiple REST applications (for accounting, taxes, billing,credit policies and many others) and reporting tools using technologiessuch as: jUnit, Spark, MySQL, Guice, jxls, AWS, GCP, Pulsar, redis, maven,gradle, git, Document Search, Elastic Search and others."
};
const Sysone = {
    title: "Software Engineer",
    avatar: SysoneLogo,
    description:
        "Sysone",
    content:
        "Java Developer (OOP, Spring Boot, JPA, Hibernate, JSF, MySQL, Oracle, JUnit, TDD, Git, SVN, Gradle, Maven, Liquibase)\n" +
        "\n" +
        "- Developer\n" +
        "- Unit test design and quality assurance\n" +
        "- Business process designer\n" +
        "- Project Management\n" +
        "- Resource management and training."
};
const QW = {
    title: "Software Engineer",
    avatar: QWLogo,
    description:
        "Quality Work",
    content: "Lead programmer in the making of a ERP for the biggest drugstore in Argentina.\n" +
        "Creating on only selling point software but also administration and server. " +
        "Including libraries for fiscal printers and open source hardware."
};
listData.push(Santander);
listData.push(MercadoLibre);
listData.push(Sysone);
listData.push(QW);

function Experience() {
    return (
        <ContentMarginTop>
            <Breadcrumb style={{margin: '5px 0'}}>
                <Breadcrumb.Item>Portfolio</Breadcrumb.Item>
                <Breadcrumb.Item>Experience</Breadcrumb.Item>
            </Breadcrumb><br/>
            <ItemList listData={listData}/>
        </ContentMarginTop>
    );
}

export default Experience;