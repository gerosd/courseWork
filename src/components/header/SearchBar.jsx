import React, {useState} from "react";

import search from "../../assets/images/search.png";
import {useNavigate} from "react-router-dom";

function SearchBar() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (input === "") {
            return;
        }

        navigate(`/courseWork/catalog?query=${input}`);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="search-bar">
            <label>
                <input type="text" value={input} placeholder="Поиск по товарам" onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyPress} />
                <img src={search} alt="search" onClick={handleSearch} />
            </label>
        </div>
    )
}

export default SearchBar