import React from 'react';
import {useNavigate} from "react-router-dom";
import '../../assets/css/cart.css';
import {useDispatch, useSelector} from "react-redux";
import {useProducts} from "../../assets/js/ProductsContext.jsx";

function MainCart() {
    const cart = useSelector((state) => state.carts);
    const navigate = useNavigate();
    const {products} = useProducts();
    const allProducts = Object.values(products).flat();
    const dispatch = useDispatch();

    const cartProducts = allProducts.filter(
        (product) => cart[product.id]
    )

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
                    {cartProducts.map((product) => (
                        <div className="cart-item" key={product.id}>
                            <p>Товар: {product.name}, Количество: {product.quantity}</p>
                        </div>
                    ))}
                </div>
                )}
        </div>
    );
}

export default MainCart;