import React, {useState} from 'react';
import MenuButton from "./MenuButton.jsx";
import SearchBar from "./SearchBar.jsx";
import Icons from "./Icons.jsx";
import SideMenu from "../SideMenu.jsx";

import '../../assets/scss/header.scss';
import '../../assets/scss/sideMenu.scss'
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    const main = () => navigate('/');

    return (
        <div className="header">
            <SideMenu isActive={isMenuActive} toggleMenu={toggleMenu} />
            <div className="header-top">
                <div className="header-left">
                    <MenuButton onClick={toggleMenu} />
                </div>
                <div className="header-right">
                    <div className="header-right-elements">
                        <p className="name" onClick={main}>PowerVibe</p>
                        <SearchBar />
                        <Icons />
                    </div>
                    <div className="header-bottom"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;