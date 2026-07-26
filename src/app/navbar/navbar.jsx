//navigation bar
import "./navbar.scss";
import library from "../library/library.jsx";
import {useState} from "react";

const navbar = () => {
const [activePage,setActivePage] =useState("library");

const handleNav=(page) => {
    setActivePage(page);
};

    return (

        <div className="navbar">

<nav>
                <ul className="nav-item">
                    <li
                        onClick={() => handleNav('library')}
                        className={activePage === 'library' ? 'active' : ''}
                    >
                        Library
                    </li>

                    <li onClick={() => handleNav('about')}
                        className={activePage === 'search' ? 'active' : ''}
                        >
                        Search
                    </li>
                </ul>
</nav>
            {activePage


            <h1>Navbar</h1>
        </div>
    )



}

export default navbar;