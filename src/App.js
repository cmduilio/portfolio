import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";

function App() {
    const home = {text: "Home"};
    const menu = [{id: 1, url: "#about", text: "About me"}, {id: 2, url: "#projects",text: "Projects"}, {id: 3, url: "#experience",text: "Experience"}, {id: 4, url: "#contact",text: "Contact"}]

    return (
        <div className="App">
            <BrowserRouter>
                <Home home={home} menu={menu}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
