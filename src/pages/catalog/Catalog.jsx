import React from 'react';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import MainCatalog from "./MainCatalog.jsx";
import {useSearchParams} from "react-router-dom";

function Catalog() {

    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");

    return (
        <div className="catalog mainContainer">
            <Header />
            <MainCatalog type={type} />
            <Footer />
        </div>
    )
}

export default Catalog;