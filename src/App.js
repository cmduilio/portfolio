import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Florcita from "./components/Florcita";
import Juancito from "./components/Juancito";
import HomeHeader from "./components/HomeHeader";
import Error from "./components/Error";
import {Layout} from "antd";
const { Footer } = Layout;

function App() {
    return (
        <Layout style={{minHeight:"100vh"}}>
            <BrowserRouter basename="/portfolio">
                <HomeHeader/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/florcita' component={Florcita}/>
                    <Route exact path='/juancito' component={Juancito}/>
                    <Route exact path='/error' component={Error}/>
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
