import React from 'react';
import Header from "../../components/header/Header.jsx";
import MainVacancies from "./MainVacancies.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Vacancies() {
    return (
        <div className="vacancies mainContainer">
            <Header />
            <MainVacancies />
            <Footer />
        </div>
    )
}

export default Vacancies;