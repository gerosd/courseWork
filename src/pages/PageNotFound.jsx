import React from 'react';
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import MainError from "../components/MainError.jsx";

import '../assets/css/error.css';

function PageNotFound() {
    return (
        <div className="mainContainer">
            <Header />
            <MainError />
            <Footer />
        </div>
    )
}

export default PageNotFound;