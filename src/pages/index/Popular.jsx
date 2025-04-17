import React from 'react';
import {useProducts} from "../../assets/js/ProductsContext.jsx";
import {useNavigate} from "react-router-dom";

function Popular() {
    const {products} = useProducts();
    const allProducts = Object.values(products).flat()
        .filter((val) => parseInt(val.price.replace(/\s+/g, ''), 10) > 33000);

    const navigate = useNavigate();

    const handleClick = (id) => () => {
        navigate(`/courseWork/catalog#${id}`);
    }

    return (

        <div className="popular section">
            <h1>Наиболее популярные товары</h1>
            <div className="popular-cards">
                {allProducts.map((product) => (
                    <div className="card" key={product.id} onClick={handleClick(product.id)}>
                        <div className="card-img-container">
                            <img src={product.img} alt="PopularCard-img"/>
                        </div>
                        <p className="card-name">{product.name}</p>
                        <div className="card-bottom">
                            <p className="price">{product.price}</p>
                            {product.isPremium &&
                                <div className="premium">
                                    <p>Premium</p>
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Popular