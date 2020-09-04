import React from 'react';
import Profile from "./Profile";
import "./CardListFlex.css";
import {Card, Image} from "antd";
import Meta from "antd/es/card/Meta";
import profilePic from "../profilepic.jpg";

function CardListFlex({list}) {
    return (
        <div className="space-container">
            {list.map((element) => {
                return <Card
                    style={{ width: 250 }}
                    cover={<Image src={profilePic}/>}
                >
                <Meta
                    title="Mauro Duilio Candotti"
                    description="Software Engineer papu"
                    />
            </Card>
            })}

        </div>
    );
}

export default CardListFlex;