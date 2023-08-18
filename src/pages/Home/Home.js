import React from 'react';
import camit from '../../resources/camit.jpg';
import saku from '../../resources/saku.jpg';
import CardList from "../../components/CardList/CardList";
import ShowcaseList from "../../components/ShowcaseList/ShowcaseList";
import santa from '../../resources/Santa.jpg';
import meli from '../../resources/melipng.png';
import sys1 from '../../resources/sysone.jpg';
import qw from '../../resources/qw.jpg';
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

import './Home.css';

const images = [
    {id: 1, url: saku, description: "Brave, lively and playful. Makes weird faces sleeping.", subtitle: "Calico!", title: "Saku"},
    {id: 2, url: camit, description: "Scaredy but very fond to me. Scared to storms (who isn't?)", subtitle: "Orange and white", title: "Camit"},
    ];

const showcaseList = [
    {
        title: "Senior Software Engineer",
        subtitle:"Santander Tecnología",
        description:"Fullstack engineer in risk department. Using React/Node + Java with springboot.",
        from:"Sep. 2020",
        to:"now",
        backgroundUrl:santa,
        url:"https://www.santander.com.ar/banco/online/select"
    },
    {
        title:"Software Engineer",
        subtitle:"Mercadolibre",
        description:"Java Engineer in Billing department. Focused on end-to-end initiatives, developing multiple REST applications and reporting tools using technologies such as: jUnit, Spark, MySQL, Guice, jxls, Pulsar, redis, Document Search, Elastic Search and many others.",
        from:"Aug. 2018",
        to:"Sep. 2020",
        backgroundUrl:meli,
        url:"http://www.mercadolibre.com.ar"
    },
    {
        title:"Software Developer",
        subtitle:"Sysone",
        description:"Java Developer in team Galicia. Maintenance of product. Technologies used: OOP, Spring Boot, JPA, Hibernate, JSF, MySQL, Oracle, JUnit, TDD, Git, SVN, Gradle, Maven, Liquibase",
        from:"Nov. 2017",
        to:"Aug. 2018",
        backgroundUrl:sys1,
        url:"http://www.sysone.com"
    },
    {
        title:"Software Developer",
        subtitle:"Quality Work",
        description:"Lead programmer making a ERP for one of the biggest drugstore in Argentina.",
        from:"Aug. 2014",
        to:"Oct. 2017",
        backgroundUrl:qw,
        url:"https://www.qwork.com.ar"
    }
];

const footerTitle = `©${new Date().getFullYear()} Mauro Duilio Candotti`;

function Home({menu, home}) {
    return (
        <div>
            <Banner title={"Mauro Candotti"} subtitle={"Software Engineer"} menu={menu} home={home}/>
            <Navbar home={home} menu={menu} sticky={true}/>
            <section id={"about"}>
                <About title={"Hi, I'm Mauro."}
                       text={"I'm a software developer focused on fullstack web development using Java, Node and React. " +
                       "I also like making components for Unreal Engine and try new things."}/>
            </section>
            <section id={"projects"}>
                <h2 style={{color: "var(--text-primary)"}}>
                    Projects
                </h2>
                <p style={{color: "var(--text-primary)"}}>(WiP, sorry... but meet my 2 cats!)</p>
                <CardList growOnHover={true} cards={images}/>
            </section>
            <section id={"experience"}>
                <h2 style={{color: "var(--text-primary)"}}>
                    Experience
                </h2>
                <ShowcaseList list={showcaseList} />
            </section>
            <div id={"contact"}>
                <Contact/>
            </div>
            <Footer title={footerTitle}/>
        </div>
    )
}


export default Home;