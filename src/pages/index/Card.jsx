import React from 'react';
import ps5 from "../../assets/images/catalog/SonyPS5Dualshock.png";

function Card() {
    return (
        <div className="card">
            <div className="card-img-container">
                <img src={ps5} alt="Card-img"/>
            </div>
            <p className="card-name">Геймпад беспроводной PlayStation DualSense белый</p>
            <div className="card-bottom">
                <p className="price">20 000₽</p>
                <div className="premium">
                    <p>Premium</p>
                </div>
            </div>
        </div>
    )
}

export default Card;