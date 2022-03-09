import React from "react";
import globe from "../images/globe-128.png";

export default function Navbar(){
    return (
        <nav>
            <img src={globe} alt="a globe" className="nav--icon" />
            <h4 className="nav--title">my travel journal</h4>
        </nav>
    )
}