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
        <Layout style={{minHeight:"100vh"}}>
            <BrowserRouter>
                <HomeHeader/>
                <Switch>
                    <Route exact path='/portfolio' component={Home}/>
                    <Route exact path='/portfolio/home' component={Home}/>
                    <Route exact path='/portfolio/florcita' component={Florcita}/>
                    <Route exact path='/portfolio/juancito' component={Juancito}/>
                </Switch>
            </BrowserRouter>
            <Footer style={{ color: "lightgrey", alignContent: 'bottom', textAlign: 'center', backgroundColor:"#001529" }}>
                Maurito Design ©2020 - Para todos los gatitos
            </Footer>
        </Layout>
    );
}

export default App;
