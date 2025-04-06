import React, {useState} from 'react';
import userIcon from '../../assets/images/user_icon.svg';
import cartIcon from '../../assets/images/cart_icon.svg';
import favoriteIcon from '../../assets/images/favourites_icon.svg';
import {useNavigate} from "react-router-dom";
import Account from "../account/Account.jsx";

function Icons() {
    const navigate = useNavigate();

    const [showAccountModal, setShowAccountModal] = useState(false);
    const handleProfile = () => {
        if (sessionStorage.getItem('currentUser')) {
            navigate('/profile');
        } else {
            setShowAccountModal(true)
        }
    }

    const navToCart = () => navigate('/cart');

    return (
        <div className="icons">
            <div className="icon-container">
                <img src={favoriteIcon} alt="Icon"/>
            </div>
            <div className="icon-container">
                <img src={cartIcon} alt="Icon" onClick={navToCart}/>
            </div>
            <div className="icon-container">
                <img src={userIcon} alt="Icon" onClick={handleProfile}/>
            </div>
            {showAccountModal && (
                <Account onClose={() => setShowAccountModal(false)} />
            )}
        </div>
    )
}

export default Icons;