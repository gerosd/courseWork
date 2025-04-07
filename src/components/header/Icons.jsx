import React, {useEffect, useState} from 'react';
import userIcon from '../../assets/images/user_icon.svg';
import cartIcon from '../../assets/images/cart_icon.svg';
import {useNavigate} from "react-router-dom";
import Account from "../account/Account.jsx";
import Favorite from "./Favorite.jsx";
import favoriteIcon from "../../assets/images/favourites_icon.svg";

function Icons() {
    const navigate = useNavigate();
    const [userIconChange, setUserIconChange] = useState(userIcon);
    const [showAccountModal, setShowAccountModal] = useState(false);
    const [isFavouriteActive, setIsFavouriteActive] = useState(false);

    const handleProfile = () => {
        if (sessionStorage.getItem('currentUser')) {
            navigate('/profile');
        } else {
            setShowAccountModal(true)
        }
    }

    useEffect(() => {
        const img = sessionStorage.getItem('image');
        if (img) {
            setUserIconChange(img);
        }
    }, []);

    const toggleFavourites = () => {
        setIsFavouriteActive(!isFavouriteActive);
    }

    const navToCart = () => navigate('/cart');

    return (
        <div className="icons">
            <div className="icon-container">
                <img src={favoriteIcon} alt="Icon" onClick={toggleFavourites}/>
                <Favorite isActive={isFavouriteActive} toggleFavorite={toggleFavourites}/>
            </div>
            <div className="icon-container">
                <img src={cartIcon} alt="Icon" onClick={navToCart}/>
            </div>
            <div className="icon-container">
                <img src={userIconChange} alt="Icon" id="profile-img-change" onClick={handleProfile}/>
            </div>
            {showAccountModal && (
                <Account onClose={() => setShowAccountModal(false)} />
            )}
        </div>
    )
}

export default Icons;