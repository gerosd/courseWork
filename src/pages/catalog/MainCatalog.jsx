import React, {useState} from 'react';
import '../../assets/css/catalog.css';
import sort from '../../assets/images/sort.png';
import Cards from "./Cards.jsx";
import {useProducts} from "../../assets/js/ProductsContext.jsx";
import ScrollToTopButton from "./ScrollToTopButton.jsx";

function MainCatalog({type, query}) {
    const {products} = useProducts();
    const [sortedProducts, setSortedProducts] = useState([]);
    const [isAscending, setIsAscending] = useState(true);
    const allProducts = Object.values(products).flat();

    const comparePrices = (a, b) => {
        const removeCurrencySymbol = (price) => parseFloat(price.replace(/[^0-9]+/g, ''));
        const priceA = removeCurrencySymbol(a.price);
        const priceB = removeCurrencySymbol(b.price);
        return isAscending ? priceA - priceB : priceB - priceA;
    };

    const handleSort = () => {
        const allProducts = Object.values(products).flat();
        const sortedArray = [...allProducts].sort(comparePrices);
        setSortedProducts(sortedArray);
        setIsAscending(!isAscending);
    };

    const resetSorting = () => {
        setSortedProducts([]);
        setIsAscending(true);
    };

    return (
        <div className="main-catalog">
            <div className="main-top">
                <div className="sort-img">
                    <img src={sort} alt="sort" title="Сортировать по цене" onClick={handleSort} />
                </div>
                <p title="Сбросить сортировку" onClick={resetSorting}>Каталог</p>
            </div>
            <Cards type={type} query={query} allProducts={sortedProducts.length > 0 ? sortedProducts : allProducts} />
            <ScrollToTopButton />
        </div>
    )

}

export default MainCatalog;