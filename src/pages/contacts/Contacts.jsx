import React from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ContactsMain from "./ContactsMain.jsx";

function Contacts() {
    return (
        <div className="contacts mainContainer">
            <Header />
            <ContactsMain />
            <Footer />
        </div>
    )
}

export default Contacts;