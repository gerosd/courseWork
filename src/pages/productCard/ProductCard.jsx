import React from "react";

const ProductCard = ({product}) => {
    return (
        <div className="productCard">
            <img src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: ${product.price}</p>
            <button>Добавить в корзину</button>
        </div>
    )
};

export default ProductCard;