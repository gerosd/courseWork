import React from 'react';
import {useDispatch} from "react-redux";
import {toggleFavorites} from "../../assets/js/favoritesSlice.jsx";
import favoriteIconActive from '../../assets/images/favourites_icon-active.svg';

function Favorite( { isActive, favoriteProducts, favorites } ) {
    const dispatch = useDispatch();

    const handleFavoriteClick = (productId, e) => {
        e.stopPropagation();
        dispatch(toggleFavorites(productId));
    };

    return (
        <div className={`favorite ${isActive ? 'favorite-active' : ''}`}>
            <div className="fav-cards">
                {favoriteProducts.length === 0 ? <p className="no-favorite">У вас пока нет изранного</p> :
                (favoriteProducts.map((product) => (
                    <div className="favorite-card" key={product.id}>
                        <div className="favorite-card-img">
                            <img src={product.img} alt={product.name}/>
                        </div>
                        <div className="fav-left">
                            <p className="fav-left-name">{product.name}</p>
                            <div className="left-bottom">
                                <p className="fav-name">{product.price}</p>
                                {product.isPremium &&
                                    <div className="premium">
                                        <p>Premium</p>
                                    </div>
                                }
                                <div
                                    className="fav-icon-container"
                                    onClick={(e) => handleFavoriteClick(product.id, e)}
                                    title={favorites[product.id] ? 'Удалить из избранного' : 'Добавить в избранное'}
                                >
                                    <img src={favoriteIconActive} alt="favourite" className='fav-icon'/>
                                </div>
                            </div>
                        </div>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default Favorite;