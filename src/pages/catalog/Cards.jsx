import React from 'react';
import favoriteIcon from "../../assets/images/favourites_icon.svg";
import favoriteIconActive from "../../assets/images/favourites_icon-active.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../assets/js/favoritesSlice.jsx";
import { addToCart } from "../../assets/js/cartSlice.jsx";

function Cards({ type, query, allProducts }) {
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const filteredProducts = type
        ? allProducts.filter((el) => el.id.includes(type))
        : query
            ? allProducts.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()))
            : allProducts;

    const handleFavoriteClick = (productId, e) => {
        e.stopPropagation();
        dispatch(toggleFavorites(productId));
    };

    const handleBuyClick = (productId, e) => {
        e.stopPropagation();
        dispatch(addToCart(productId));
    }

    return (
        <div className="cards">
            {filteredProducts.map((product) => (
                <div className="product-card" key={product.id} id={product.id}>
                    <div className="product-card-image">
                        <LazyLoadImage
                            className="card-image-img"
                            src={product.img}
                            alt={product.name}
                        />
                    </div>
                    <div className="product-card-content">
                        <div className="content-top">
                            <h1>{product.name}</h1>
                            <p>{product.price}</p>
                        </div>
                        <div className="content-buttons">
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
                            <button className="buy-button" onClick={(e) => handleBuyClick(product.id, e)}>Купить</button>
                        </div>
                        <div className="content-bottom">
                            <div className="bottom-line"></div>
                            <div className="bottom-content">
                                <p>В наличии</p>
                                <p>0 отзывов</p>
                                <p>Доставка: завтра</p>
                                {product.isPremium && (
                                    <div className="premium">
                                        <p>Premium</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default React.memo(Cards);