//navigation bar
import "./navbar.scss";
import Library from "../library/Library.jsx";
import Search from "../search/Search.jsx";
import {useState} from "react";


const Navigation = () => {
const [activePage,setActivePage] =useState("library");

const handleNav=(page) => {
    setActivePage(page);
};

    return (

        <div className="navbar">

<nav>
                <ul className="nav-item">
                    <li
                        onClick={() => handleNav('Library')}
                        className={activePage === 'Library' ? 'active' : ''}
                    >
                        Library
                    </li>

                    <li onClick={() => handleNav('Search')}
                        className={activePage === 'Search' ? 'active' : ''}
                        >
                        Search
                    </li>
                </ul>
</nav>
            {activePage === 'Library' && <Library />}
            {activePage === 'Search' && <Search />}



        </div>
    )



}

export default Navigation;