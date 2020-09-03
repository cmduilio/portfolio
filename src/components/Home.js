import React from 'react';
import {Breadcrumb, Button} from 'antd';
import ContentMarginTop from "./ContentMarginTop";
function callLocal() {
        //fetch("http://localhost:3000/aymat/ping", {
        fetch("", {
            method: "GET"
        })
        .then(res => {
            console.log(res.json());
            return res.json();
        })
        .catch( error => console.log(error));
};
function Home() {

    return (
        <ContentMarginTop>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{backgroundColor: "aquamarine"}}>Content of home</div>
            <Button onClick={callLocal}> press me </Button>
        </ContentMarginTop>
    );
}

export default Home;