import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Florcita from "./components/Florcita";
import Juancito from "./components/Juancito";
import HomeHeader from "./components/HomeHeader";
import {Layout} from "antd";
const { Footer } = Layout;

function App() {

    return (
        <Layout className="layout" >
            <BrowserRouter>
                <HomeHeader/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/florcita' component={Florcita}/>
                    <Route exact path='/juancito' component={Juancito}/>
                </Switch>
            </BrowserRouter>
            <Footer style={{ alignContent: 'bottom', textAlign: 'center' }}>Maurito Design ©2020 - Para todos los gatitos</Footer>
        </Layout>
    );
}

export default App;
