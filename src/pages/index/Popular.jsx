import React from 'react';
import PopularCard from "./PopularCard.jsx";

function Popular() {
    return (
        <div className="popular section">
            <h1>Наиболее популярные товары</h1>
            <div className="popular-cards">
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
            </div>
        </div>
    )
}

export default Popular