import React, {useEffect} from 'react';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import MainCatalog from "./MainCatalog.jsx";
import {useLocation, useSearchParams} from "react-router-dom";

function Catalog() {

    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");
    const query = searchParams.get("query");

    const { pathname } = useLocation();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            document.querySelector(hash).scrollIntoView({ behavior: 'smooth' })
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }, [pathname]);

    return (
        <div className="catalog mainContainer">
            <Header />
            <MainCatalog type={type} query={query} />
            <Footer />
        </div>
    )
}

export default Catalog;