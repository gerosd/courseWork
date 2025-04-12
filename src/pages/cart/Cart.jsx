import React from 'react';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import MainCart from "./MainCart.jsx";

function Cart() {
    return (
        <div className="cart mainContainer">
            <Header />
            <MainCart />
            <Footer />
        </div>
    )
}

export default Cart;