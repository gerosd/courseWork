import React, {useEffect} from 'react';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import MainCart from "./MainCart.jsx";
import {useLocation} from "react-router-dom";

function Cart() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="cart mainContainer">
            <Header />
            <MainCart />
            <Footer />
        </div>
    )
}

export default Cart;