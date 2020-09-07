import React from 'react';
import "./CardListFlex.css";
import {Card, Image} from "antd";
import Meta from "antd/es/card/Meta";

function CardListFlex({list, imageWidth}) {
    return (
        <div className="space-container">
            {list.map((element) => {
                return <Card
                    style={{ width: 250 }}
                    cover={element.image ?
                        <Image style={{display: "block", marginLeft: "auto", marginRight: "auto"}}
                               width={imageWidth}
                               preview={false}
                               src={element.image}
                        /> : null}
                >
                <Meta
                    title={element.title}
                    description={element.description}
                    />
            </Card>
            })}

        </div>
    );
}

export default CardListFlex;