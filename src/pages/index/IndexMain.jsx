import React from 'react';
import Slider from "./Slider.jsx";
import "../../assets/css/index.css";
import Popular from "./Popular.jsx";
import News from "./News.jsx";

function IndexMain() {
    return (
        <div className="main-container">
            <Slider />
            <Popular />
            <News />
        </div>
    )
}

export default IndexMain;