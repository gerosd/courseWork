import React from 'react';
import Card from "./Card.jsx";

function Popular() {

    return (
        <div className="popular">
            <h1>Наиболее популярные товары</h1>
            <div className="popular-cards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Popular