import React from 'react';
import ps5 from '../../assets/images/catalog/SonyPS5Dualshock.png';

// TODO - реализовать загрузку товаров из Cookies.

function Favorite( {isActive } ) {

    return (
        <div className={`favorite ${isActive ? 'favorite-active' : ''}`}>
            <div className="favorite-card">
                <div className="favorite-card-img">
                    <img src={ps5} alt="favourite-img"/>
                </div>
            </div>
        </div>
    )
}

export default Favorite;