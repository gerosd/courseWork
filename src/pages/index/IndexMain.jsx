import React from 'react';
import Slider from "./Slider.jsx";
import "../../assets/css/index.css";
import Popular from "./Popular.jsx";

function IndexMain() {
    return (
        <div className="main-container">
            <Slider />
            <Popular />
        </div>
    )
}

export default IndexMain;