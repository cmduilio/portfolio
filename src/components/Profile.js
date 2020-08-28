import React from "react";
import {Card} from "antd";
import profilePic from "../profilepic.jpg";

const { Meta } = Card;

function Profile(){
    return (
        <Card
            style={{ width: 250 }}
            cover={
                <img
                    alt="example"
                    src={profilePic}
                />
            }
        >
            <Meta

                title="Mauro Duilio Candotti"
                description="Software Engineer papu"
            />
        </Card>
    )
}

export default Profile;