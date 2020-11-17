import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import HomeHeader from "./components/HomeHeader";
import Error from "./components/Error";
import {Layout} from "antd";
import Pathfinding from "./components/Pathfinding";
const { Footer } = Layout;

function App() {
    return (
        <Layout style={{minHeight:"100vh"}}>
            <BrowserRouter basename="/portfolio">
                <HomeHeader content="Mauro Duilio Candotti"/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/skills' component={Skills}/>
                    <Route exact path='/experience' component={Experience}/>
                    <Route exact path='/error' component={Error}/>
                    <Route exact path='/pathfinding' component={Pathfinding}/>
                    <Redirect from='/*' to='/error'/>
                </Switch>
            </BrowserRouter>
            <Footer style={{ color: "lightgrey", alignContent: 'bottom', textAlign: 'center', backgroundColor:"#001529" }}>
                Maurito Design ©2020 - Para todos los gatitos
            </Footer>
        </Layout>
    );
}

export default App;
