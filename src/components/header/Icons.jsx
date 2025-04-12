import React, {useEffect, useState} from 'react';
import userIcon from '../../assets/images/user_icon.svg';
import cartIcon from '../../assets/images/cart_icon.svg';
import {useNavigate} from "react-router-dom";
import Account from "../account/Account.jsx";
import Favorite from "./Favorite.jsx";
import favoriteIcon from "../../assets/images/favourites_icon.svg";
import {useSelector} from "react-redux";
import {useProducts} from "../../assets/js/ProductsContext.jsx";

function Icons() {
    const navigate = useNavigate();
    const favorites = useSelector((state) => state.favorites);
    const cart = useSelector(state => state.cart);
    const {products} = useProducts();
    const allProducts = Object.values(products).flat();
    const [userIconChange, setUserIconChange] = useState(userIcon);
    const [showAccountModal, setShowAccountModal] = useState(false);
    const [isFavouriteActive, setIsFavouriteActive] = useState(false);

    const favoriteProducts = allProducts.filter(
        (product) => favorites[product.id]
    );

    const cartProducts = allProducts.filter(
        (product) => cart[product.id]
    );

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
            <div className="icon-container" title="Избранное">
                <img src={favoriteIcon} alt="Icon" onClick={toggleFavourites}/>
                {favoriteProducts.length > 0 ? <span>{favoriteProducts.length}</span> : ''}
            </div>
            <Favorite isActive={isFavouriteActive} favoriteProducts={favoriteProducts} favorites={favorites}/>
            <div className="icon-container" title="Корзина">
                <img src={cartIcon} alt="Icon" onClick={navToCart}/>
                {cartProducts.length > 0 ? <span>{cartProducts.length}</span> : ''}
            </div>
            <div className="icon-container" title="Профиль">
                <img src={userIconChange} alt="Icon" id="profile-img-change" onClick={handleProfile}/>
            </div>
            {showAccountModal && (
                <Account onClose={() => setShowAccountModal(false)} />
            )}
        </div>
    )
}

export default Icons;