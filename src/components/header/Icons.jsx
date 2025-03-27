import React from 'react';
import userIcon from '../../assets/images/user_icon.svg';
import cartIcon from '../../assets/images/cart_icon.svg';
import favoriteIcon from '../../assets/images/favourites_icon.svg';

function Icons() {
    return (
        <div className="icons">
            {/* Обернуть img в Link, когда будут созданы компоненты */}
            <img src={favoriteIcon} alt="Icon"/>
            <img src={cartIcon} alt="Icon"/>
            <img src={userIcon} alt="Icon"/>
        </div>
    )
}

export default Icons;