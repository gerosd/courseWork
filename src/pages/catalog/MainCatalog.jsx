import React from 'react';
import '../../assets/css/catalog.css';
import sort from '../../assets/images/sort.png';
import Cards from "./Cards.jsx";

function MainCatalog({type}) {


    return (
        <div className="main-catalog">
            <div className="main-top">
                <div className="sort-img">
                    <img src={sort} alt="sort"/>
                </div>
                <p>Каталог</p>
            </div>
            <Cards type={type}/>
        </div>
    )

}

export default MainCatalog;