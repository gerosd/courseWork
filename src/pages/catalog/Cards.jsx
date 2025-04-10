import React, {useState} from 'react';
import {useProducts} from "../../assets/js/ProductsContext.jsx";
import favoriteIcon from "../../assets/images/favourites_icon.svg";
import favoriteIconActive from "../../assets/images/favourites_icon-active.svg";
import {LazyLoadImage} from 'react-lazy-load-image-component';

function Cards({type}) {
    const {products} = useProducts();
    const allProducts = Object.values(products).flat();
    const [favorites, setFavorites] = useState({});

    const handleToggleFavorite = (productId) => {
        setFavorites(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    }

    return (
        <div className="cards">
            {allProducts.map((product) => (
                <div className="product-card" key={product.id}>
                    <div className="product-card-image">
                        <LazyLoadImage className="card-image-img" src={product.img} alt={product.name} />
                    </div>
                    <div className="product-card-content">
                        <div className="content-top">
                            <h1>{product.name}</h1>
                            <p>{product.price}</p>
                        </div>
                        <div className="content-buttons">
                            <div className="favorite-icon-container">
                                <img
                                    onClick={() => handleToggleFavorite(product.id)}
                                    src={favorites[product.id] ? favoriteIconActive : favoriteIcon}
                                    alt="favourite"
                                    className={`favorite-icon ${favorites[product.id] ? 'active' : ''}`}
                                />
                            </div>
                            <button>Купить</button>
                        </div>
                        <div className="content-bottom">
                            <div className="bottom-line"></div>
                            <div className="bottom-content">
                                <p>В наличии</p>
                                <p>0 отзывов</p>
                                <p>Доставка: завтра</p>
                                {product.isPremium &&
                                    <div className="premium">
                                        <p>Premium</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;