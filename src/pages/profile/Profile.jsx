import React from 'react';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import MainProfile from "./MainProfile.jsx";
import '../../assets/css/profile.css';

function Profile() {
    return (
        <div className="profile mainContainer">
            <Header />
            <MainProfile />
            <Footer />
        </div>
    )
}

export default Profile;