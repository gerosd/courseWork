import React from 'react';
import {useNavigate} from "react-router-dom";
import '../../assets/css/cart.css';
import {useDispatch, useSelector} from "react-redux";
import {useProducts} from "../../assets/js/ProductsContext.jsx";
import favoriteIcon from '../../assets/images/favourites_icon.svg';
import deleteIcon from '../../assets/images/delete.png';
import plus from '../../assets/images/Plus.png';
import minus from '../../assets/images/Minus.png';
import favoriteIconActive from "../../assets/images/favourites_icon-active.svg";
import {toggleFavorites} from "../../assets/js/favoritesSlice.jsx";
import {decreaseQuantity, increaseQuantity, removeFromCart} from "../../assets/js/cartSlice.jsx";

function MainCart() {
    const favorites = useSelector((state) => state.favorites);
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const {products} = useProducts();
    const allProducts = Object.values(products).flat();
    const dispatch = useDispatch();

    const cartProducts = allProducts.filter(
        (product) => cart[product.id]
    );

    const totalQuantity = Object.values(cart).reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const calculateProductTotal = (product) => {
        const priceNumber = parseInt(String(product.price).replace(/ /g, ''));
        const quantity = cart[product.id]?.quantity || 0;
        return priceNumber * quantity;
    };

    const totalSum = cartProducts.reduce((sum, product) => {
        const item = cart[product.id];
        return sum + (parseInt(String(product.price).replace(/ /g, '')) * item.quantity);
    }, 0);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0
        }).format(price);
    };

    const handleFavoriteClick = (productId, e) => {
        e.stopPropagation();
        dispatch(toggleFavorites(productId));
    };

    const handleIncreaseQuantity = (productId) => {
        dispatch(increaseQuantity(productId));
    };

    const handleDecreaseQuantity = (productId) => {
        dispatch(decreaseQuantity(productId));
    };

    const handleRemoveItem = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const toCatalog = () => navigate('/catalog');

    return (
        <div className="cart-main">
            {cartProducts.length === 0 ? (
                <div className="empty-cart">
                    <p>Корзина пуста</p>
                    <button onClick={toCatalog}>В каталог</button>
                </div>
            ) : (
                <div className="has-cart">
                    <div className="has-cart-top">
                        <h1>Корзина</h1>
                        <p>Количество товаров: {totalQuantity}</p>
                    </div>
                    <div className="has-cart-main">
                        <div className="cart-items">
                            {cartProducts.map((product) => (
                                <div className="cart-item" key={product.id}>
                                    <div className="cart-img-container">
                                        <img src={product.img} alt="cart-img"/>
                                    </div>
                                    <div className="cart-main-left">
                                        <div className="cart-left-top">
                                            <p>{product.name}</p>
                                            <div className="cart-item-actions">
                                                <div
                                                    className="favorite-icon-container"
                                                    onClick={(e) => handleFavoriteClick(product.id, e)}
                                                    title={favorites[product.id] ? 'Удалить из избранного' : 'Добавить в избранное'}
                                                >
                                                    <img
                                                        src={favorites[product.id] ? favoriteIconActive : favoriteIcon}
                                                        alt="favourite"
                                                        className={`favorite-icon ${favorites[product.id] ? 'active' : ''}`}
                                                    />
                                                </div>
                                                <img onClick={() => handleRemoveItem(product.id)} src={deleteIcon}
                                                     alt="delete" title="Удалить товар"/>
                                            </div>
                                        </div>
                                        <div className="cart-left-main">
                                            <div className="count-work">
                                                <img onClick={() => handleIncreaseQuantity(product.id)} src={plus}
                                                     alt="Add"/>
                                                <p>{cart[product.id].quantity}</p>
                                                <img onClick={() => handleDecreaseQuantity(product.id)} src={minus}
                                                     alt="Minus"/>
                                            </div>
                                            <p>{calculateProductTotal(product)} ₽</p>
                                        </div>
                                        <p className="tomorrow">Доставка: завтра</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-confirm">
                            <h1>К оплате: {formatPrice(totalSum)}</h1>
                            <button>Оформить<br/>заказ</button>
                            <p>Доставка: завтра</p>
                        </div>
                    </div>
                </div>
                )}
        </div>
    );
}

export default MainCart;