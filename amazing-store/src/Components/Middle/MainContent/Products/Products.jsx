import React from "react";
import "./Products.css";
import BodyRight1 from "./BodyRight1/BodyRight1"
import BodyRight2 from "./BodyRight2/BodyRight2"
import BodyRight3 from "./BodyRight3/BodyRight3";

class Products extends React.Component {
    render() {

        return (
            <div className="body-right">
                <BodyRight1></BodyRight1>
                <BodyRight2></BodyRight2>
                <BodyRight3></BodyRight3>
            </div>
        )
    }

}

export default Products;